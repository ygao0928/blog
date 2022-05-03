import type { NavbarConfig } from "@vuepress/theme-default";

export const zh: NavbarConfig = [
  {
    text: "指南",
    link: "/guide/",
  },
  {
    text: "Java",
    children: [
      {
        text: "Java 面向对象和基础",
        children: [
          {
            text: "Java 面向对象基础",
            link: "/java/01基础/Java 基础 - 面向对象.md",
          },
          {
            text: "Java 基础知识体系",
            link: "/java/01基础/Java 基础 - 知识点.md",
          },
        ],
      },
      {
        text: "Java 集合框架",
        children: [
          {
            text: "Java 集合框架详解",
            link: "/java/02集合/Collection 类关系图.md",
          },
        ],
      },
      {
        text: "Java 并发框架",
        children: [
          {
            text: "Java 并发知识体系",
            link: "/java/03多线程与并发/01-Java并发知识体系详解.md",
          },
          {
            text: "Java 并发理论基础",
            link: "/java/03多线程与并发/Java 并发 - 理论基础.md",
          },
          {
            text: "Java 并发线程基础",
            link: "/java/03多线程与并发/Java 并发 - 线程基础.md",
          },
          {
            text: "J.U.C 知识体系与详解",
            link: "/java/03多线程与并发/JUC - 类汇总和学习指南.md",
          },
        ],
      },
      {
        text: "Java IO框架",
        children: ["/java/04IO/README.md"],
      },
      {
        text: "Java 新版本特性",
        children: ["/java/05Java版本特性/README.md"],
      },
      {
        text: "Java JVM相关",
        children: [{ text: "", link: "/java/06JVM/README.md" }],
      },
    ],
  },
  {
    text: "算法",
    children: [
      {
        text: "算法基础和思想",
        children: ["/java/05基础/Java 基础 - 反射机制详解.md"],
      },
      {
        text: "一些领域算法",
        children: ["/java/05基础/Java 基础 - 反射机制详解.md"],
      },
    ],
  },
  {
    text: "数据库",
    children: [
      {
        text: "数据库基础和原理",
        children: ["/java/05基础/Java 基础 - 反射机制详解.md"],
      },
      {
        text: "SQL 数据库",
        children: ["/java/05基础/Java 基础 - 反射机制详解.md"],
      },
      {
        text: "NoSQL 数据库",
        children: ["/java/05基础/Java 基础 - 反射机制详解.md"],
      },
    ],
  },
  {
    text: "开发",
    children: [
      {
        text: "开发 - 常用开发基础",
        children: ["/java/05基础/Java 基础 - 反射机制详解.md"],
      },
      {
        text: "开发 - 代码重构",
        children: ["/java/05基础/Java 基础 - 反射机制详解.md"],
      },
      {
        text: "开发 - 备忘",
        children: ["/java/05基础/Java 基础 - 反射机制详解.md"],
      },
    ],
  },
  {
    text: "Spring",
    children: [
      {
        text: "Spring Framework",
        children: ["/java/05基础/Java 基础 - 反射机制详解.md"],
      },
      {
        text: "SpringBoot系列",
        children: ["/java/05基础/Java 基础 - 反射机制详解.md"],
      },
    ],
  },
  {
    text: "框架|中间件",
    children: [
      {
        text: "Web 容器",
        children: ["/java/05基础/Java 基础 - 反射机制详解.md"],
      },
      {
        text: "ORM框架",
        children: ["/java/05基础/Java 基础 - 反射机制详解.md"],
      },
      {
        text: "分表分库框架",
        children: ["/java/05基础/Java 基础 - 反射机制详解.md"],
      },
    ],
  },
  {
    text: "工具|部署|运维",
    children: [
      {
        text: "Web 容器",
        children: ["/java/05基础/Java 基础 - 反射机制详解.md"],
      },
      {
        text: "ORM框架",
        children: ["/java/05基础/Java 基础 - 反射机制详解.md"],
      },
      {
        text: "分表分库框架",
        children: ["/java/05基础/Java 基础 - 反射机制详解.md"],
      },
    ],
  },
  {
    text: "关于",
    link: "/about/",
  },
];
