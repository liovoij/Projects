const path = require('path')
const fs = require('fs')

const global = require('../../global.js')
const sidebarMap = global.sidebarMap;

exports.inferSiderbars = () => {
  const sidebars = []
  sidebarMap.forEach((item) => {
    const sidebar = {
      title: item.title,
      prefix: "/",
      children: [item.dirname]
    }
    if(item.siderOne){
      sidebar.children = []
      sidebar.collapsable = false
      sidebar.path= item.dirname
    }
    sidebars.push(sidebar)
  })
  return sidebars 
}
