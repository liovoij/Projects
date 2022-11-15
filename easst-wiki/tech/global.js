const global = {
    title:"小e助手技术手册",
    description: "wiki easst article",
    base:"/easst-wiki/",
    sidebarDepth: 3,
    downUrl:'https://www.easst.cn/easst-wiki/book.pdf',
    sidebarMap : [
      { title: '产品架构及介绍', dirname: '/', siderOne: false},
      { title: '申请小e助手', dirname: 'apply', siderOne: true},
      { title: '部署小e助手', dirname: 'arrange', siderOne: false},
      { title: '小e助手功能说明', dirname: 'function', siderOne: false},
      { title: '小e后台管理系统说明', dirname: 'system', siderOne: false},
      { title: '小e后台管理系统功能配置', dirname: 'intention_function', siderOne: false},
      { title: '小e前端组件SDK文档', dirname: 'sdk', siderOne: false}
    ]
}

module.exports = global