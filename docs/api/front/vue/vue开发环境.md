[[toc]]

# Vue 开发环境

::: tip

搭建开发平台`WIN`

每个出现的error都是可能是多方面的影响,一定不要完全照搬,要善于使用网络资源,在这里就不赘述了,有哪些平台,这是作为程序员的基本功

:::

## node配置

- 安装[node.js](https://nodejs.org/en/)

  ![image-20200724133622740](https://kevingao-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200724133622740.png)

  下载完毕后，可以安装node，建议不要安装在系统盘,一路`next`;

  设置nodejs global（全局）和cache（缓存）路径

  1. 新建node_global和node_cache两个文件夹

  ![image-20200724133826485](https://kevingao-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200724133826485.png)

  2. 设置缓存文件夹

     ```npm
     npm config set cache "D:\vueProject\nodejs\node_cache"
     ```

     

  3. 设置全局模块存放路径

     ```
     npm config set prefix "D:\vueProject\nodejs\node_global"
     ```

- 安装cnpm(淘宝镜像)

  ```
  npm install -g cnpm --registry=https://registry.npm.taobao.org
  ```

- 设置环境变量

  第一步:

  ![image-20200724134930550](https://kevingao-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200724134930550.png)

  第二步:



![image-20200724135153671](https://kevingao-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200724135153671.png)

## 安装Vue

1. 安装全局vue

   ```
   cnpm install vue -g
   ```

2. 安装vue脚手架

   ```
   cnpm install vue-cli -g
   ```

3. 新建项目

   - 打开开始菜单，输入 CMD，或使用快捷键 win+R，输入 CMD，敲回车，弹出命令提示符。打开你将要新建的项目目录

   - 在当前目录下输入“vue init webpack-simple 项目名称（使用英文）”。

     ![image-20200724135635536](https://kevingao-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200724135635536.png)

   - 最后`install`和`run dev`

   

   ## 安装常用依赖

   1. 安装element-ui

      - ```
        npm i element-ui -S
        ```

      - 在main.js引入

        ```js
        // The Vue build version to load with the `import` command
        // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
        import Vue from 'vue'
        import App from './App'
        import router from './router'
        
        /*引入下面三行*/
        import ElementUI from 'element-ui';
        import 'element-ui/lib/theme-chalk/index.css';
        Vue.use(ElementUI);
        
        
        Vue.config.productionTip = false
        
        /* eslint-disable no-new */
        new Vue({
          el: '#app',
          router,
          components: { App },
          template: '<App/>'
        })
        ```

        

   2. 安装`axios`

      - 安装:`npm install axios --save-dev`

      - main.js中导入

        ```js
        import axios from 'axios'; /* 引入axios进行地址访问*/
        Vue.prototype.$http = axios;
        ```

        

   3. 安装`scss`

      - ```js
        cnpm install node-sass --save-dev //安装node-sass 
        cnpm install sass-loader --save-dev //安装sass-loader 
        cnpm install style-loader --save-dev //安装style-loader 有些人安装的是 vue-style-loader 其实是一样的
        ```

      - 这个时候你打开build文件夹下面的webpack.base.config.js

        ```js
        module: { 
        　　　　rules: [ 
        　　　　　　　　　　{ 
        　　　　　　　　　　　　test: /\.vue$/, 
        　　　　　　　　　　　　loader: 'vue-loader', 
        　　　　　　　　　　　　options: vueLoaderConfig
        　　　　　　　　　　}, 
        　　　　　　　　　　{ 
        　　　　　　　　　　　　test: /\.js$/, 
        　　　　　　　　　　　　loader: 'babel-loader', 
        　　　　　　　　　　　　include: [resolve('src'), 
        　　　　　　　　　　　　resolve('test')] 
        　　　　　　　　　　}, 
        　　　　　　　　　　{
        　　　　　　　　　　　　 test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, 
        　　　　　　　　　　　　 loader: 'url-loader', 
        　　　　　　　　　　　　 options: { 
        　　　　　　　　　　　　　　　　limit: 10000,
        　　　　　　　　　　　　　　　  name: utils.assetsPath('img/[name].[hash:7].[ext]')
                                     } 
                         }, 
        　　　　　　　　　　{ 
                            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                            loader: 'url-loader', 
                           options: { 
                                       limit: 10000, 
                                       name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                                    } 
                           }, 
        　　　　　　　　　　{ //从这一段上面是默认的！不用改！下面是没有的需要你手动添加，相当于是编译识别sass! 
                             test: /\.scss$/,
                             loaders: ["style", "css", "sass"]
                          } 
                       ] 
                   }
        ```

        

   4. 安装`qs`

   5. 安装`echars`

      - ```
        cnpm install echarts -S
        ```

      - 全局引入

        ```js
        // 引入基本模板
        let echarts = require('echarts/lib/echarts')
        // 引入柱状图组件
        require('echarts/lib/chart/bar')
        // 引入提示框和title组件
        require('echarts/lib/component/tooltip')
        require('echarts/lib/component/title')
        ```

        

      

