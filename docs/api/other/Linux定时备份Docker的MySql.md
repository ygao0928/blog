# Linux定时备份Docker的MySQL数据库

### 血的教训

![image-20210123223004940](https://kevingao-blog.oss-cn-shanghai.aliyuncs.com/img/image-20210123223004940.png)

### 定时备份

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

   

## 结束

**学习是一种进步态度，笔记是一种成长的动作**

参考地址：[Linux定时备份Docker的MySQL数据库](https://www.hjava.cn/articles/2019/08/28/1566980010076.html)

