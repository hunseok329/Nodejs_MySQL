var textFolder = "data";
var fs = require("fs");

fs.readdir(textFolder, function (err, filelist) {
  console.log(filelist);
});
