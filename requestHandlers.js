var exec = require('child_process').exec;
const fs = require('fs');
const querystring = require("querystring");
const formidable = require('formidable');

// 阻塞操作代码
function start() {
    console.log('start ---------------');
    function sleep(mils){
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + mils){}
    }
    sleep(10000);
    return 'start ---------------';
}


function update() {
    console.log('update ---------------');
    return 'update ---------------';
}

function findFiles(){
    var content = "empty";
    exec('find /', function(error,stdout,stderr){
        content = stdout;
    });
    return content;
}

// 因为node.js 是单线程操作，为了达到并行执行的效果，所以我们需要异步非阻塞的返回代码，这样就不会影响到其他的请求执行。

function update2(response) {
    console.log('update ---------------');
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write('update ---------------');
    response.end();
}

function findFiles2(response){
    exec('find /', 
        { timeout: 10000, maxBuffer: 20000*1024 },
        function(error,stdout,stderr){
            response.writeHead(200, {"Content-Type" : "text/plain"});
            response.write(stdout);
            response.end();
    });
}

function index(response){
    let html = fs.readFileSync('./index.html');
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
}

function upload(response,request){
    var form = new formidable.IncomingForm();
    console.log("Request handler 'upload' was called.");
    form.parse(request,(error,fields,files) => {
        console.dir(files);
        fs.renameSync(files.upload.path, "./img/test.png");
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
}


function show(response,postData){
    fs.readFile("./img/test.png", "binary", function(error, file) {
        if(error) {
          response.writeHead(500, {"Content-Type": "text/plain"});
          response.write(error + "\n");
          response.end();
        } else {
          response.writeHead(200, {"Content-Type": "image/png"});
          response.write(file, "binary");
          response.end();
        }
      });
}


exports.start = start;
exports.update = update;
exports.findFiles = findFiles;

exports.update2 = update2;
exports.index = index;
exports.upload = upload;
exports.findFiles2 = findFiles2;
exports.show = show;