## 小E技术手册

## 准备工作

### 安装 Node.js

   Vuepress是基于Node.js的命令行工具，下载安装[Node.js](https://nodejs.org/en/)，安装完成之后，使用下面的命令检验是否安装成功：

    $ node -v
    v8.11.1
    v16.18.0


### 安装Git

本地环境安装 git, 下载地址: https://git-scm.com/downloads

详细操作请看  [菜鸟教程](https://www.runoob.com/git/git-tutorial.html) 
### 提交代码

如果本地没有任何代码处理，先拉取代码

    $ git pull

如果本地修改文件后，如何操作

    # 更新目录
    
    $cd xxx
    $ npm run summary
    $ 生成电子书  gitbook pdf . ./book.pdf --log=debug
    
    # 添加到本地
    $ git add .
    # 如果要回滚文件的话 git checkout -- xxx.md  这个是不可逆的
    $ git commit -m '注释'
    # 拉取代码
    $ git pull
    # 提交远程
    $ git push


### 安装Gitbook

输入下面的命令来安装 GitBook

    $ npm install gitbook-cli -g

安装完成后，使用下面的命令检验是否安装成功：

    $ gitbook -V
    CLI version: 2.3.2
    Installing GitBook 3.2.3

更多的详情请阅读 [GitBook 安装文档](https://github.com/GitbookIO/gitbook/blob/master/docs/setup.md) 来安装。

启动服务

    gitbook serve
    

### 开发工具

可以使用 Vscode, Typora等根据自己喜好选择，我选择 Vscode;

## 下载源码

您可以克隆项目 `easst-wiki.git` 在继续之前进入子目录。

    git clone git@code.aliyun.com:easst/easst-wiki.git
    cd easst-wiki

## 开始使用

前期 `准备工作` 完成后，我们可以使用和演示了，首先进入下载源文件的目录，然后执行下面的命令操作：

    $ npm install 

执行成功后，在本地运行即可看到演示效果：

    $ npm run dev

命令编译成功后，在浏览器输入 http://localhost:8080/ 即可。

## 生成电子书

安装插件

    $ cd tech 
    # 或者 cd develop
    $ gitbook install

生成电子书命令

    $ cd tech
    # 或者 cd develop
    $ gitbook pdf . ./book.pdf --log=debug
    npm run summary

## 补充

### 如何构建

首先执行 `npm install` 之后，在执行 `npm run build` 即可编译成可发布的静态文件，操作如下：

    $ cd tech 
    # 或者 cd develop

    $ npm install
    $ npm run build

编译后的源文件在 `.vuepress` -> `dist` 中

![](./static/dist.png)


当看到 `dist` 文件夹说明构建成功了！

### **如何开发使用**

#### global.js

`global.js` 文件用于设置侧边栏显示内容，我们只需要配置 下面显示的内容即可：

- title 显示名称
- dirname 配置的 `md` 文件名称

``` js                                          
sidebarMap : [
    { title: '指南', dirname: 'guide'},
    { title: '介绍', dirname: 'article'},
    { title: '测试', dirname: 'test'}
]
```

配置显示的视图如下：

![](./static/sidebar.png)


#### static

用于存放静态文件，如图片 `png`, `jpg`, `svg` 等等


#### docs

上面侧边栏设置的文件(`dirname`)存放地址, 

![](./static/dirname.png)

