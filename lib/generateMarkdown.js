const fs = require('fs');

function ReadmeGen() {
  
  ReadmeGen.prototype.title = function(path, content) {
    return fs.writeFileSync(path, `# ${content}`);
  }

  ReadmeGen.prototype.shieldVersion = function(path) {
    return fs.appendFileSync(path,`![Site](https://img.shields.io/date/1586822400)`);
  }

  ReadmeGen.prototype.tocHead = function(path) {
    return fs.appendFileSync(path,`
# Table of Contents`);
  }

  ReadmeGen.prototype.toc = function(path, heading, count) {
    return fs.appendFileSync(path, `
## [${heading}](#${heading})`);
  }

  ReadmeGen.prototype.section = function(path, section, content) {
    return fs.appendFileSync(path, `   
 
## ${section}
${content}`);
  }
  ReadmeGen.prototype.author = function(path, author, githubUrl) {
    return fs.appendFileSync(path, `
   
## Authors   
![Site](${githubUrl}.png)  ${author}
${githubUrl}`);
  }
} 

module.exports = ReadmeGen;