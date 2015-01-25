var http = require("http");
var fs = require("fs");
var url = require("url");

var tools = require("./corpora_index.js");
var buildIndex = tools.buildIndex;
var existsInIndex = tools.existsInIndex;

var DATA_DIR = "corpora/data/";

var intro = "an API for the corpora. to access a data, navigate to '/{key}/{value}', for example: '/animals/dinosaurs' or '/words/literature/shakespeare_words'";

module.exports = function(){
  var index = buildIndex(DATA_DIR);
  return http.createServer(function (req, res) {
    var uri = url.parse(req.url).pathname.replace(".json", "").substr(1);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if ( req.method === 'OPTIONS' ) {
      res.writeHead(200);
      res.end();
      return;
    }

    if (uri === "") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({description: intro, data: index}));
    } else if (existsInIndex(uri, index)) {
      fs.readFile(DATA_DIR + uri + ".json", function(err, data){
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({data: JSON.parse(data)}));
      });
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({error: "404 Not Found"}));
    }
  });
};