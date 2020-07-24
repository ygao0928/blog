
//java
// const jvm =require('../java/jvm');
// const designpattern =require('../java/designpattern');
// const redis =require('../java/redis');
// const spring =require('../java/spring');
// const springcloud =require('../java/springcloud');
// const sql =require('../java/sql');
// const Thread =require('../java/Thread');



module.exports = {
  //-----------------------前台
  '/api/front/vue/': [
    {
      title: 'Vue',
      collapsable: false,
      children: [
        { title: '前言', path: '/api/front/vue/' },
        { title: 'vue开发环境', path: '/api/front/vue/vue开发环境' }
      ]
    }
  ],
  //------------------------java
  '/api/java/jvm/': [
    {
      title: 'JVM',
      collapsable: false,
      children: [
        { title: '前言', path: '/api/java/jvm/' },
        { title: 'jvm初探', path: '/api/java/jvm/jvm初探' },
        { title: 'jvm二探', path: '/api/java/jvm/jvm二探' }
      ]
    }

  ],

  '/api/java/designpattern/': [
    {
      title: '设计模式',
      collapsable: false,
      children: [
        { title: '前言', path: '/api/java/designpattern/' },
        { title: '工厂模式', path: '/api/java/designpattern/工厂模式' }
      ]
    }
  ],

  '/api/java/thread/': [
    {
      title: '并发多线程',
      collapsable: false,
      children: [
        { title: '前言', path: '/api/java/thread/' },
        { title: '线程介绍', path: '/api/java/thread/线程介绍' }
      ]
    }
  ],
  '/api/java/sql/': [
    {
      title: 'SQL',
      collapsable: false,
      children: [
        { title: '前言', path: '/api/java/sql/' },
        { title: 'sql基本', path: '/api/java/sql/sql基本' },
        { title: 'sql join 用法', path: '/api/java/sql/sql-joins' },
        { title: 'mybatis基础', path: '/api/java/sql/mybatis基础' },
        { title: 'mybatis用法', path: '/api/java/sql/MyBatis用法' }


      ]
    }
  ],
  '/api/java/springcloud/': [
    {
      title: 'Spring-Cloud',
      collapsable: false,
      children: [
        { title: '前言', path: '/api/java/springcloud/' }

      ]
    }
  ],
  '/api/java/spring/': [
    {
      title: 'Spring',
      collapsable: false,
      children: [
        { title: '前言', path: '/api/java/spring/' }

      ]
    }
  ],
  '/api/java/redis/': [
    {
      title: 'Redis',
      collapsable: false,
      children: [
        { title: '前言', path: '/api/java/redis/' },
        { title: 'redis基础', path: '/api/java/redis/redis基础' }

      ]
    }
  ],

  //----------------------other
  '/api/other/': [
    {
      title: '其他',
      collapsable: false,
      children: [
        { title: '前言', path: '/api/other/' },
        { title: '宏运接口示例说明文档', path: '/api/other/宏运接口示例说明文档' }
      ]
    }
  ]
}

// 在config.js中配置的侧边栏的文字跟浏览器侧边栏显示的文字可能是不一样的。
// 在config中配置的文字是对应的markdown文章的文件名。
// 在浏览器侧边栏显示的文字是markdown文章内容里第一个格式为标题1的文字
