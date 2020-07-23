#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build
#npm run build
# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
 echo 'www.ygao.ltd' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名
#git push -f git@github.com:ygao0928/ygao0928.github.io.git master

#REM 如果发布到 https://gitee.com/<USERNAME>/<REPO>https://gitee.com/ygao0928/blog.git
git push -f https://gitee.com/ygao0928/blog.git master:gh-pages


# 发布到自定义域名
#echo "ygao.ltd"
#echo 'ygao.ltd' > CNAME

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
 git push -f git@github.com:ygao0928/blog.git master:gh-pages

cd -
