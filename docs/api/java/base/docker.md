[[toc]]

# Docker 操作

> 运行环境
Linux 8

## 使用yum安装[参考](https://www.cnblogs.com/kingsonfu/p/11576797.html)

1. 查看是否安装docker

   ```nginx
   yum list installed | grep docker
   ```

2. 安装docker

   ```
   yum -y install docker
   ```

3. 启动docker

   ```
   systemctl start docker
   ```

4. 设置开机启动

   ```
   systemctl enable docker.service
   ```

## 常用命令



### 查看容器的信息container（ps）

```dockerfile
docker ps命令可以查看容器的CONTAINER ID、NAME、IMAGE NAME、端口开启及绑定、容器启动后执行的COMMNAD。最常用的功能是通过ps来找到CONTAINER_ID，以便对特定容器进行操作。
docker ps 默认显示当前正在运行中的container
docker ps -a 查看包括已经停止的所有容器
docker ps -l 显示最新启动的一个容器（包括已停止的）
```

### 列出docker 里面的镜像

```
# docker images 
REPOSITORY               TAG             IMAGE ID        CREATED         VIRTUAL SIZE
ubuntu                   14.10           2185fd50e2ca    13 days ago     236.9 MB
```

## 进入正在运行的容器

### 使用attach命令进入Docker

创建一个守护态的Docker容器，然后使用docker attach命令进入该容器

```
$ sudo docker run -itd ubuntu:14.04 /bin/bash  
```

使用docker ps查看到该容器信息，接下来就使用docker attach进入该容器

```
$ sudo docker attach 容器ID  
```

[^ 注释 ]:但在，使用该命令有一个问题。当多个窗口同时使用该命令进入该容器时，所有的窗口都会同步显示。如果有一个窗口阻塞了，那么其他窗口也无法再进行操作。因为这个原因，所以docker attach命令不太适合于生产环境，平时自己开发应用时可以使用该命令。

### 使用docker exec 进入容器

```
$ sudo docker ps  
$ sudo docker exec -it 775c7c9ee1e1 /bin/bash
```

