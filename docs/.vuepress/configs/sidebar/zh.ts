import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
  "/guide/": [
    {
      text: "指南",
      children: ["/guide/README.md"],
    },
  ],
  "/java/": [
    {
      text: "Java 基础",
      children: [
        "/java/01基础/Java 基础 - 面向对象.md",
        "/java/01基础/Java 基础 - 知识点.md",
        "/java/01基础/Java 基础 - 图谱.md",
        "/java/01基础/Java 基础 - 泛型机制详解.md",
        "/java/01基础/Java 基础 - 注解机制详解.md",
        "/java/01基础/Java 基础 - 异常机制详解.md",
        "/java/01基础/Java 基础 - 反射机制详解.md",
        "/java/01基础/Java 常用机制 - SPI机制详解.md",
      ],
    },
    {
      text: "Java 集合框架",
      children: [
        "/java/02集合/Collection 类关系图.md",
        "/java/02集合/Collection - ArrayList 源码解析.md",
        "/java/02集合/Collection - LinkedList源码解析.md",
        "/java/02集合/Collection - Stack & Queue 源码解析.md",
        "/java/02集合/Collection - PriorityQueue源码解析.md",
        "/java/02集合/Map - HashSet & HashMap 源码解析.md",
        "/java/02集合/Map - LinkedHashSet&Map源码解析.md",
        "/java/02集合/Map - TreeSet & TreeMap 源码解析.md",
        "/java/02集合/Map - WeakHashMap源码解析.md",
      ],
    },
    {
      text: "Java 多线程与并发",
      children: [
        "/java/03多线程与并发/01-Java并发知识体系详解.md",
        "/java/03多线程与并发/Java 并发 - 理论基础.md",
        "/java/03多线程与并发/Java 并发 - 线程基础.md",
        "/java/03多线程与并发/关键字-final详解.md",
        "/java/03多线程与并发/关键字-synchronized详解.md",
        "/java/03多线程与并发/关键字-volatile详解.md",
        "/java/03多线程与并发/JUC - 类汇总和学习指南.md",
        "/java/03多线程与并发/JUC-原子类-CAS, Unsafe和原子类详解.md",
        "/java/03多线程与并发/JUC-JUC锁-锁核心类AQS详解.md",
        "/java/03多线程与并发/JUC-JUC锁-LockSupport详解.md",
        "/java/03多线程与并发/JUC-JUC锁-ReentrantLock详解.md",
        "/java/03多线程与并发/JUC-JUC锁-ReentrantReadWriteLock详解.md",
        "/java/03多线程与并发/JUC-JUC集合-ConcurrentHashMap详解.md",
        "/java/03多线程与并发/JUC-JUC集合-CopyOnWriteArrayList详解.md",
        "/java/03多线程与并发/JUC-JUC集合-ConcurrentLinkedQueue详解.md",
        "/java/03多线程与并发/JUC-JUC集合-BlockingQueue详解.md",
        "/java/03多线程与并发/JUC-JUC线程池-FutureTask详解.md",
        "/java/03多线程与并发/JUC-JUC线程池-ThreadPoolExecutor详解.md",
        "/java/03多线程与并发/JUC-JUC线程池-ScheduledThreadPoolExecutor详解.md",
        "/java/03多线程与并发/JUC-JUC线程池-Fork,Join框架详解.md",
        "/java/03多线程与并发/JUC-JUC工具类-CountDownLatch详解.md",
        "/java/03多线程与并发/JUC-JUC工具类-CyclicBarrier详解.md",
        "/java/03多线程与并发/JUC-JUC工具类-Exchanger详解.md",
        "/java/03多线程与并发/JUC-JUC工具类-Phaser详解.md",
        "/java/03多线程与并发/JUC-JUC工具类-Semaphore详解.md",
      ],
    },
    {
      text: "Java IO",
      children: ["/java/04IO/"],
    },
  ],
  "/reference/": [
    {
      text: "VuePress 参考",
      collapsible: true,
      children: [
        "/reference/cli.md",
        "/reference/config.md",
        "/reference/frontmatter.md",
        "/reference/components.md",
        "/reference/plugin-api.md",
        "/reference/theme-api.md",
        "/reference/client-api.md",
        "/reference/node-api.md",
      ],
    },
    {
      text: "打包工具参考",
      collapsible: true,
      children: ["/reference/bundler/vite.md", "/reference/bundler/webpack.md"],
    },
    {
      text: "默认主题参考",
      collapsible: true,
      children: [
        "/reference/default-theme/config.md",
        "/reference/default-theme/frontmatter.md",
        "/reference/default-theme/components.md",
        "/reference/default-theme/markdown.md",
        "/reference/default-theme/styles.md",
        "/reference/default-theme/extending.md",
      ],
    },
    {
      text: "官方插件参考",
      collapsible: true,
      children: [
        {
          text: "常用功能",
          children: [
            "/reference/plugin/back-to-top.md",
            "/reference/plugin/container.md",
            "/reference/plugin/external-link-icon.md",
            "/reference/plugin/google-analytics.md",
            "/reference/plugin/medium-zoom.md",
            "/reference/plugin/nprogress.md",
            "/reference/plugin/register-components.md",
          ],
        },
        {
          text: "内容搜索",
          children: [
            "/reference/plugin/docsearch.md",
            "/reference/plugin/search.md",
          ],
        },
        {
          text: "PWA",
          children: [
            "/reference/plugin/pwa.md",
            "/reference/plugin/pwa-popup.md",
          ],
        },
        {
          text: "语法高亮",
          children: [
            "/reference/plugin/prismjs.md",
            "/reference/plugin/shiki.md",
          ],
        },
        {
          text: "主题开发",
          children: [
            "/reference/plugin/active-header-links.md",
            "/reference/plugin/git.md",
            "/reference/plugin/palette.md",
            "/reference/plugin/theme-data.md",
            "/reference/plugin/toc.md",
          ],
        },
      ],
    },
  ],
};
