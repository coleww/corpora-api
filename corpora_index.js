var fs = require("fs");

module.exports.buildIndex = function(dataDir){
  var index = {};
  var toIndex = fs.readdirSync(dataDir);
  while (toIndex.length) {
    var subDir = toIndex.shift();
    index[subDir] = fs.readdirSync(dataDir + subDir).filter(function(file){
      return file.indexOf(".json") !== -1 ? true : (
        file !== ".DS_Store" && toIndex.push(subDir+"/"+file),
        false
      );
    }).map(removeDotJson);
  }
  return index;
};

module.exports.existsInIndex = function(path, index){
  var parts = path.split("/");
  var dir = parts.slice(0, parts.length - 1).join("/");
  var file = parts[parts.length - 1];
  return index[dir] && index[dir].indexOf(file) !== -1;
};


function removeDotJson(file){
  return file.replace(".json", "");
}
