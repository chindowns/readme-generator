const fs = require('fs');

function FileIO() {}

FileIO.prototype.read = function(file) {
    return fs.readFileSync(file, 'utf8');
};

FileIO.prototype.write = function(file) {
    return fs.writeFileSync(path, content);
};

FileIO.prototype.appendFileSync() = function(file, content) {
    return fs.appendFileSync(file, content);
};

module.exports = FileIO;