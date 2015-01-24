var http = require('http');
var fs = require('fs');
var url = require("url");

module.exports = function(){
  return http.createServer(function (req, res) {
    var uri = url.parse(req.url).pathname;
    var dataPath = "corpora/data" + uri + ".json";
    if (uri === "/") {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end();

    } else if (fs.existsSync(dataPath)) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end();
    } else {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.end("404 Not Found\n");
      // 404
    }

  });
};