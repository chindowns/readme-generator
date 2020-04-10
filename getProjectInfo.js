const fs = require('fs');

function GetProjectInfo() {}

GetProjectInfo.prototype.read = function(file) {
    return fs.readFileSync(file, "utf8");
};


const getProjectInfo = GetProjectInfo();

let message = getProjectInfo.read("package.json");

console.log(message);