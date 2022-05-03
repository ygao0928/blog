import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { path } from "@vuepress/utils";
const {
  registerComponentsPlugin,
} = require("@vuepress/plugin-register-components");
import { navbar, sidebar } from "./configs";

export default defineUserConfig({
  base: "/",
  // alias: {
  //   "@images": path.resolve(__dirname, "./public/images"),
  // },
  port: 8080,

  locales: {
    "/": {
      lang: "zh-CN",
      title: "不想淹死的魚的技术站",
      description:
        "技术博客,专注全栈学习与总结。Java,JavaScript,js,ES6,TypeScript,vue,css3,html5,git,github等技术文章。",
      head: [
        ["link", { rel: "icon", href: "http://img.thee.top/logo/logo.png" }],
      ],
    },
  },

  theme: defaultTheme({
    // 在这里进行配置
    docsDir: "docs", // 编辑的文件夹

    logo: "http://img.thee.top/logo/logo.png",
    // navbar
    navbar: navbar.zh,

    // sidebar
    sidebar: sidebar.zh,

    // page meta
    editLinkText: "Edit this page on GitHub",
    tip: "提示",
    warning: "注意",
    danger: "警告",

    // 404 page
    notFound: [
      "这里什么都没有",
      "我们怎么到这来了？",
      "这是一个 404 页面",
      "看起来我们进入了错误的链接",
    ],
    backToHome: "返回首页",

    // a11y
    openInNewWindow: "在新窗口打开",
    toggleDarkMode: "切换夜间模式",
    toggleSidebar: "切换侧边栏",
  }),
  // 构建工具

  plugins: [
    //注册组件
    // docsearchPlugin({
    //   // 配置项
    // }),
    registerComponentsPlugin({
      // 配置项
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
});
