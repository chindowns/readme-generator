const FileIO = require("./fileIO");
let fileIO = new FileIO();

const getProjectInfos = () => {

    let str = fileIO.read('../.git/config');
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
    if (fileIO.exists('../package.json')){
        const jsonInfo = JSON.parse(fileIO.read('../package.json'));
        description = jsonInfo.description;
        license = jsonInfo.license;
        github = jsonInfo.repository.url
        author = jsonInfo.author
    }

    title = name;
    description = description;
    license = license;
    github = github;
    author = author;
    githubUser = authorUser;
    authorGithub = `https://github.com/${authorUser}`
    authorImg = `https://github.com/${authorUser}.png`


}
return {};

module.exports={getProjectInfo};