const FileIO = require("./fileIO.js");
let path = ()
let str = FileIO.read('./.git/config');
// Identify the URL string with the USERID and REPOSITORY name
let iStart = str.indexOf('.com:')+5;
let iEnd = str.indexOf('.git');
let gitUserRepo = str.slice(iStart, iEnd);

// put the User [0] and Title(Repo) [1] into an array
const projectArr = gitUserRepo.split('/') 

let name = projectArr[1];
let authorUser = projectArr[0];
let description = "";
let license = "";
let github = `https://github.com/${authorUser}/${name}`;
let author = "";


// if npm package.json exists use data to populate MyProject properties
if (fileIO.exists('./fileIO.js')){
    const jsonInfo = JSON.parse(fileIO.read('./package.json'));
description = jsonInfo.description;
license = jsonInfo.license;
github = jsonInfo.repository.url
author = jsonInfo.author
}

class MyProject {
    constructor(){
    this.title = name;
    this.description = description;
    this.license = license;
    this.github = github;
    this.author = author;
    this.githubUser = authorUser;
    this.authorGithub = `https://github.com/${authorUser}`
    this.authorImg = `https://github.com/${authorUser}.png`
}
}

module.exports=MyProject;