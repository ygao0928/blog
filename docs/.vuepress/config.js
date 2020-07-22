
const nav = require('./nav');
const headConf=require('./config/headConf');
const pluginsConf=require('./config/pluginsConf');
const sidebarConf = require('./config/sidebar');
module.exports = {
	title: 'Kevin的个人博客',  // 设置网站标题
	description: '一个在互联网苟且偷生的程序员',
	base: '/blog/',
	repo: 'https://gitee.com/ygao0928/blog',
	head: headConf,
	plugins: pluginsConf,
	markdown: {
		lineNumbers: true,  // 代码显示行号
	},
	
	themeConfig: {
		lastUpdated: '上次更新时间',
		logo: "/logo.jpg",   // 导航栏左边logo,不写就不显示
		nav: nav,

		sidebar: sidebarConf
		
	}
}