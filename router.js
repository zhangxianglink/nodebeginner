function route(handlers, pathname, response,request){
    console.log(`router ----------- ${pathname}`);
    if(typeof handlers[pathname] === 'function'){
        return handlers[pathname](response,request);
    }else{
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type" : "text/plain"});
        response.write("404 Not Found.");
        response.end();
    }
}

exports.route = route;