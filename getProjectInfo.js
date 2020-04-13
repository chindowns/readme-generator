const FileIO = require("./fileIO.js");

const fileIO = new FileIO;

const jsonInfo = JSON.parse(fileIO.read('./package.json'));

let authorUser = jsonInfo.repository.url.split('/')[3];

function MyProject() {
    this.title = jsonInfo.name;
    this.description = jsonInfo.description;
    this.license = jsonInfo.license;
    this.github = jsonInfo.repository.url;
    this.author = jsonInfo.author;
    this.authorImg = `https://github.com/${authorUser}.png`
}

const myProject = new MyProject();

module.export = {
    MyProject: MyProject,
    myProject: myProject,
    Inquirer:Inquirer,
}