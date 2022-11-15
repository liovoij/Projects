const global = {
    title:"泛微智能开放平台",
    description: "wiki easst article",
    base:"/wiki/",
    sidebarDepth: 3,
    //downUrl:'https://www.easst.cn/easst-wiki/book.pdf',
    sidebarMap : [
      { title: '平台简介', dirname: '/', siderOne: true},
      { title: '开放服务', dirname: 'opening_function', siderOne: false},
      { title: '签名机制', dirname: 'signature_mechanism', siderOne: true},
      { title: '错误码', dirname: 'error_code', siderOne: true},
    ]
}

module.exports = global