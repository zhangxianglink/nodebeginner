## 阅读nodebeginner有感
1. node内建服务器支持，主要用于中间层，适用于一些高并发处理逻辑简单场景。
2. node采用的是单线程模型，和常规线性的编程不同，需要依靠事件和回调函数。
3. node的异步机制是基于事件的，网络通信，数据库查询，客户端请求，磁盘IO非阻塞的方式发送请求，返回的结果由事件循环进行处理。

本文应用的组织：
```javascript
index.js ：应用的开始，将多个模块整合给http服务
service.js 构建http服务器
route.js 路由模块，当请求发送的时候，根据路径转发到执行器
requestHandlers.js 执行器模块，非阻塞的方式处理请求
（就是将response对象（从服务器的回调函数onRequest()获取）通过请求路由传递给请求处理程序。 随后，处理程序就可以采用该对象上的函数来对请求作出响应。）
```

[参考文献](https://www.nodebeginner.org/index-zh-cn.html)

