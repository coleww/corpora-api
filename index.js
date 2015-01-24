var http = require('http');
var fs = require('fs');
var url = require("url");

http.createServer(function (req, res) {
  var uri = url.parse(req.url).pathname;
  if (uri === "/") {
    // INDEX ROUTE, RETURN SOME META DATAS?!?!?!
  } else if (fs.existsSync(dataPath)) {
    // RETURN THE DATAS!
  } else {
    // 404
  }
}).listen(8000);