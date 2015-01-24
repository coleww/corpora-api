var http = require('http');
var fs = require('fs');
var url = require("url");


var buildIndex = function(){
  var index = {};
  fs.readdirSync("corpora/data").forEach(function(dir){
    index[dir] = fs.readdirSync("corpora/data/" + dir).map(function(el){
      return el.replace(".json", "");
    });
  });
  return index;
};

module.exports = function(){
  return http.createServer(function (req, res) {
    var uri = url.parse(req.url).pathname;
    var dataPath = "corpora/data" + uri + ".json";
    var index = buildIndex();
    if (uri === "/") {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({description: "an API for the corpora", data: index}));

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