将以下加密参数添加到请求的公共请求头（HTTP 协议 headers参数）里面。  

| 参数名 | 参数说明 |
| ------- | ------- |
| appId | 开发者AppId |
| timestamp | 当前时间戳(毫秒数)。与当前时间相差10分钟内的可用，示例值:1627983230687 |
| sign | 加密值。生成方式：Md5(appId + timestamp + appSecret)，appSecret为开发者appSecret |