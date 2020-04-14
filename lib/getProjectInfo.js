const FileIO = require("./fileIO");
let fileIO = new FileIO();

let str = fileIO.read('../.git/config');
// Identify the URL string with the USERID and REPOSITORY name
let iStart = str.indexOf('.com:')+5;
let iEnd = str.indexOf('.git');
let gitUserRepo = str.slice(iStart, iEnd);

// put the User [0] and Title(Repo) [1] into an array
const projectArr = gitUserRepo.split('/') 

let projectName = projectArr[1];
let githubUser = projectArr[0];
let description = "";
let license = "";
let github = `https://github.com/${githubUser}/${projectName}`;

// if npm package.json exists use data to populate MyProject properties
if (fileIO.exists('../package.json')){
    const jsonInfo = JSON.parse(fileIO.read('../package.json'));
    description = jsonInfo.description;
    license = jsonInfo.license;
    github = jsonInfo.repository.url
    author = jsonInfo.author
}
    
authorGithub = `https://github.com/${githubUser}`
authorImg = `https://github.com/${githubUser}.png`

class MyProjInfo {
    constructor() {
        this.title = projectName; 
        this.description = description;
        this.license = license;
        this.author = author;
        this.githubUser = githubUser;
        this.authorGithub = authorGithub;
        this.authorImg = authorImg;
        this.github = github;
    }
};

console.log(MyProjInfo);
module.exports = MyProjInfo;