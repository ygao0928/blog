# Redis 分布式锁

处理场景：

比如一个操作要修改用户的状态，修改状态需要先读出用户的状态，在内存里进行修改，改完了再存回去。如果这样的操作同时进行了，就会出现并发问题，因为读取和保存状态这两个操作不是原子的。（Wiki 解释：所谓**原子操作**是指不会被线程调度机制打断的操作；这种操作一旦开始，就一直运行到结束，中间不会有任何 context switch 线程切换。）

## 分布式锁

分布式锁本质上要实现的目标就是在 Redis 里面占一个“茅坑”，当别的进程也要来占时，发现已经有人蹲在那里了，就只好放弃或者稍后再试。

占坑一般是使用 setnx(set if not exists) 指令，只允许被一个客户端占坑。先来先占， 用完了，再调用 del 指令释放茅坑。

```shell
// 这里的冒号:就是一个普通的字符，没特别含义，它可以是任意其它字符，不要误解
> setnx lock:codehole true
OK
... do something critical ...
> del lock:codehole
(integer) 1
```

但是有个问题，如果逻辑执行到中间出现异常了，可能会导致 del 指令没有被调用，这样就会陷入死锁，锁永远得不到释放。

![image-20200925165144077](https://kevingao-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200925165144077.png)

于是我们在拿到锁之后，再给锁加上一个过期时间，比如 5s，这样即使中间出现异常也可以保证 5 秒之后锁会自动释放。

```shell
> setnx lock:codehole true
OK
> expire lock:codehole 5
... do something critical ...
> del lock:codehole
(integer) 1
```

但是以上的操作还是有问题，如果setnx和expire之间的服务器突然挂掉，就会导致expire得不到执行，会造成死锁

造成这种问题的根源就是setnx和expire不是原子指令，

在Redis的2.8作者针对set指令进行扩展。是的setnx 和expire指令可以一起执行，彻底解决分布式锁的乱象；

```shell
> set lock:codehole true ex 5 nx
OK
... do something critical ...
> del lock:codehole
```

## 超时问题

Redis的分布式锁不能解决超时问题，如果在加锁和释放锁之间的逻辑太长，超出了锁的超时限制，就会出现问题。因为这把锁被第二个线程持有，但是紧接在第一个线程执行完逻辑就将锁又释放，就会出现锁错乱；

为了避免这种问题最好用redis分布式锁不处理较长的任务。

```shell
tag = random.nextint() # 随机数
if redis.set(key, tag, nx=True, ex=5):
do_something()
redis.delifequals(key, tag) # 假想的 delifequals 指令
```

有一个稍微安全一点的方案是为 set 指令的 value 参数设置为一个随机数，释放锁时先匹配随机数是否一致，然后再删除 key，这是为了确保当前线程占有的锁不会被其它线程释放，除非这个锁是过期了被服务器自动释放的。 但是匹配 value 和删除 key 不是一个原子操作，Redis 也没有提供类似于`delifequals`这样的指令，这就需要使用 `Lua `脚本来处理了，因为 `Lua `脚本可以保证连续多个指令的原子性执行。

```shell
# delifequals
if redis.call("get",KEYS[1]) == ARGV[1] then
return redis.call("del",KEYS[1])
else
return 0
end
```

