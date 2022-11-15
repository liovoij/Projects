const global = require("../../global");
const utils = require('./utils')
const sidebarData =  utils.inferSiderbars();
module.exports = {
  title: global.title,
  description: global.description,
  base: global.base,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    nav: [
      // { text: '首页', link: '/' },
      // { text: '下载电子书', link: global.downUrl }
    ],
    sidebar: sidebarData,
    lastUpdated: '最后更新',
    docsDir: 'docs',
    sidebarDepth: global.sidebarDepth,
    displayAllHeaders: true
  },
  plugins: ['@vuepress/back-to-top']
}
