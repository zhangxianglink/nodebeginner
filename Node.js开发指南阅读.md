## Node.js开发指南阅读

>Node.js 的模块

``` javascript
在node.js中模块其实就是一个文件。
exports是模块的公共接口，exports 本身仅仅是一个普通的空对象，即 {}，它专门用来声明接口，本
质上是通过它为模块闭包①的内部建立了一个有限的访问接口。
require用于从外部获得一个模块的接口，获得的就是模块的exports对象。
    var one = require('./8');
    one.setName("rookie");
    var two = require('./8');
    two.setName("while");
    two.getName();
require（单次加载，多次引用产生都是一个实例对象）

```

> Node.js 的包

``` javascript
包是在模块基础上的进一步抽象，通常是针对某个独立功能的封装。
Node.js 采用CommonJs的规范实现包机制
1. package.json在包的顶级目录下；
2. 二进制文件存储在bin目录下；
3. JavaScript代码应该在lib目录下；
4. 文档在doc目录下；
5. 单元测试在test目录下。

```

> Node.js 核心模块(基本Api)

``` javascript
1. 全局对象global,global是全局对象的宿主，既所有的全局变量都是个global的属性（除了它本身）;
2. process 描述Node.js进程状态，通常在命令行书写程序时使用;
3. console 提供控制台的标准输出;
4. util 是一个 Node.js 核心模块，提供常用函数的集合。例如：util.inherits 提供对象之间原型的继承。
5. events 事件驱动函数，node.js 最重要的模块。events开放出来的EventEmitter核心功能就是对事件进行发布和监听。
    const event = require('events');
    const emitter = new event.EventEmitter();
    emitter.on('push', function(name,age){
        console.log(`listen1 ${name} : ${age}`);
    });
    emitter.on('push', function(name,age){
        console.log(`listen2 ${name} : ${age}`);
    });
    emitter.emit('push','德里克',25);
    5.1 大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、
http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
6. 文件系统fs, 通常提供同步异步两种调用方式。异步IO大多不提供返回值。
7. Node.js 标准库提供了 http 模块，其中封装了一个高效的 HTTP 服务器http server和一个简易的
HTTP 客户端 http request。
  
```



> 注意事项

``` javascript
1. Node.js异步编程，函数最后一个参数通常是回调函数。在回调函数的参数中第一个参数是err,其他的参数是返回的内容。
```

