const fs = require('fs');

function FileIO() {}

FileIO.prototype.read = function(file) {
    return fs.readFileSync(file, 'utf8');
};

FileIO.prototype.write = function(path, content) {
    return fs.writeFileSync(path, content);
};

FileIO.prototype.append = function(file, content) {
    return fs.appendFileSync(file, content);
};

FileIO.prototype.exists = (file) => {
    return fs.existsSync(file);
}

module.exports = FileIO;