# Nginx

> 虚拟机安装nginx，并安装ssl模块踩过的坑

## 安装

### 下载

```
wget http://nginx.org/download/nginx-1.14.2.tar.gz
```

解压

```
tar -zxvf nginx-1.14.2.tar.gz
```

进入

```
cd nginx-1.14.2
```

### 安装SSL

默认安装在`usr/local/nginx`

```
./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module
make
make install
```

安装完毕时，进入usr/local/nginx/sbin

查看安装模块

```
 ./nginx -V   
```

## 配置

> 因为我这里使用的多个端口所以采用多个配置文件

直接在默认的`nginx.conf`里面修改

```
include conf.d/*.conf;
```



![image-20201224105605342](https://kevingao-blog.oss-cn-shanghai.aliyuncs.com/img/image-20201224105605342.png)

这里是我服务器上nginx的文件列表

![image-20201224105803294](https://kevingao-blog.oss-cn-shanghai.aliyuncs.com/img/image-20201224105803294.png)

> 解释
>
> ssl里面存放的是证书（有关证书的申请请自行查阅）
>
> conf.d (里面存放的是相关的配置文件)

----

ssl配置文件

```
server {
    listen         80;
    server_name    www.ygao.ltd; # 域名
    add_header Strict-Transport-Security max-age=15768000;
    return 301 https://$server_name$request_uri;
}
server {
    listen    443 ssl;
    server_name  www.ygao.ltd; #把此处域名改成你上面申请的

    # 增加ssl
    #ssl on;        #如果强制https访问，这行要打开
    ssl_certificate     ssl/4933030_www.ygao.ltd.pem; #存放证书
    ssl_certificate_key ssl/4933030_www.ygao.ltd.key;#存放证书

    ssl_session_timeout     5m;
    ssl_ciphers         ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;

    location / {
            proxy_pass ******你要代理的后台地址; # 反向代理到本机的8080端口，8080端口的那个服务器不需要任何关于https的配置。
            proxy_redirect off;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-Forwarded-Port $server_port;
    }
}
```

注：可能会遇到没有https模块安装问题和路径问题，请一一排查

部署项目文件

```xml
server {
    listen   8081;
    server_name  localhost; #把此处域名改成你上面申请的
location / {
            root   /usr/local/nginx/html/funhouse/dist;# 前端项目编译好的dist存放地址
            index  index.html index.htm;
        }
location /api/ {# 前端请求的后台地址
            # 前端请求: /api/login 代理后: http://127.0.0.1:8080
            proxy_pass http://127.0.0.1:8080/;
            # 解决springboot中获取远程ip的问题
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_http_version 1.1;
            proxy_set_header Connection "";
        }
}
```

