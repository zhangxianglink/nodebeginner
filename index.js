var service = require('./service')
var router = require('./router')
var requestHandler = require('./requestHandlers');

var handlers = {}
handlers["/start"] = requestHandler.start;
handlers["/update"] = requestHandler.update;
handlers['/findFiles'] = requestHandler.findFiles;

handlers["/update2"] = requestHandler.update2;
handlers['/findFiles2'] = requestHandler.findFiles2;

handlers["/index"] = requestHandler.index;
handlers["/upload"] = requestHandler.upload;
handlers["/show"] = requestHandler.show;
service.start(router.route, handlers);
