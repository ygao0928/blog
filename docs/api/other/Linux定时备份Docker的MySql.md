# Linux定时备份Docker的MySQL数据库

### 血的教训

![image-20210123223004940](https://kevingao-blog.oss-cn-shanghai.aliyuncs.com/img/image-20210123223004940.png)

## 定时备份

1. 新建脚本命名为`mysql_bak.sh`

   ```dockerfile
   # mysql 为安装mysql的docker
   #!/bin/bash
   docker_name=mysql
   data_dir="/data/backup/mysql/"
   docker exec -it $docker_name mysqldump -uroot -p123456 --all-databases > "$data_dir/solo_`date +%Y%m%d%H%M%S`.sql"
   # 删除7天以前的备份
   find $data_dir -mtime +7 -name 'solo_*.sql' -exec rm -rf {} \;
   ```

   **备注**

   - `docker_name`:`MySQL`容器名称

   - `data_dir`:保存路径

   - `--all-databases`:表示所有的数据库都备份，可以备份固定的数据库，直接替换就可以了

   - `-mtime +7`: 按照文件的更改时间来查找文件，+7表示文件更改时间距现在7天以前；如果是 -mmin +7表示文件更改时间距现在7分钟以前

     *`-exec rm -rf {}`; 表示执行一段shell命令，exec选项后面跟随着所要执行的命令或脚本，然后是一对儿{}，一个空格和一个，最后是一个分号

2. 在定时任务中添加新的任务规则，`crontab -e`,将下面命令写入并报存:wq

   ```dockerfile
   0 0 * * * /bin/sh /data/mysql_bak.sh >> /data/logs/mysql_bak.log 2>&1
   
   PS：/data/logs/mysql_bak.log ：输出日志
   ```


## 安装crontab

> crontab命令常见于Unix和类Unix的操作系统之中，用于设置周期性被执行的指令。该命令从标准输入设备读取指令，并将其存放于“crontab”文件中，以供之后读取和执行。通俗来讲就是执行定时任务的一个命令。

#### 先检查你的服务器是否安装了crontab

```do
rpm -qa | grep crontab
```

![image-20210124104400574](https://kevingao-blog.oss-cn-shanghai.aliyuncs.com/img/image-20210124104400574.png)

#### 如果没有安装好~~~~

执行

```dockerfile
yum -y install vixie-cron
yum -y install crontabs
```

#### 安装好了–启动和配置服务

手动：

```dockerfile
service crond start     //启动服务
service crond stop      //关闭服务
service crond restart   //重启服务
service crond reload    //重新载入配置
service crond status    //查看crontab服务状态
```

同样可以设置开机自启动：

```dockerfile
chkconfig --level 345 crond on
```

#### crontab文件格式：

\*       *       *      *       *      command

分     时      日      月     周（几）     命令

#### 特殊字符:

星号（*）：代表’‘每’'的意思，例如month字段如果是星号，则表示每月都执行该命令。
逗号（,）：表示分隔时段的意思，例如，“1,3,5,7,9”。
中杠（-）：表示一个时间范围，例如“2-6”表示“2,3,4,5,6”。
正斜线（/）：可以用正斜线指定时间的间隔频率，例如“0-23/2”表示每两小时执行一次。同时正斜线可以和星号一起使用，例如*/10，如果用在minute字段，表示每十分钟执行一次。

#### 练习

在/root/下新建一个shell文件–test.sh
[root@hwyuntrx ~]# vim [test.sh](http://test.sh/)
添加下面内容

```docker
nowtime=`date +"%Y-%m-%d %H:%M:%S"`
echo "hello cron "$nowtime
```

添加执行权限
[root@hwyuntrx ~]# chmod +x [test.sh](http://test.sh/)
运行：
[root@hwyuntrx ~]# ./test.sh
hello cron 2019-03-09 19:54:30

**运行crontab -e** 编写一条定时任务 */1 * * * * /root/test.sh 在每1分钟执行一次test.sh脚本。
添加如下命令

```dockerfile
*/1 * * * * /root/test.sh  >> /root/test.log
```



## 结束

**学习是一种进步态度，笔记是一种成长的动作**

参考地址：[Linux定时备份Docker的MySQL数据库](https://www.hjava.cn/articles/2019/08/28/1566980010076.html)

