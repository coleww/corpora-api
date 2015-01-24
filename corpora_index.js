var fs = require("fs");

module.exports.buildIndex = function(dataDir){
  var index = {};
  fs.readdirSync(dataDir).forEach(function(subDir){
    index[subDir] = fs.readdirSync(dataDir + subDir).map(function(file){
      return file.replace(".json", "");
    });
  });
  return index;
};

module.exports.existsInIndex = function(path, index){
  var parts = path.split("/");
  return index[parts[0]] && index[parts[0]].indexOf(parts[1]) !== -1;
};