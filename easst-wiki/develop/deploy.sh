#!/usr/bin/env sh
# git 拉取成功之后
 
# 进入文件夹
cd easst-wiki/develop

# 安装依赖
npm install

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# copy 到指定路径

# 
