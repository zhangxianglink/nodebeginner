// node自带模块
var http = require('http');
var url = require('url');

// 模块化
function start(route, handlers) {

    // 回调函数
    function onRequest(request,response){
        // 解析请求
        var pathname = url.parse(request.url).pathname;
        var query = url.parse(request.url).query;
        console.log(`Request path------ ${pathname} -------received.`);
        console.log(`Request query------ ${query} -------received.`);
        // 路由
        route(handlers, pathname,response,request);
    }

    http.createServer(onRequest).listen(9009)
    console.log(`service start ------ http://localhost:9009/ \n`)
}

exports.start = start;