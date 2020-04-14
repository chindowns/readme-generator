const inquirer = require('inquirer');
const MyProjInfo = require('../lib/getProjectInfo');

const projectInfo = new MyProjInfo;
const{title, description, license, author, githubUser, authorGithub, authorImg, github} = projectInfo;
console.log(title);

inquirer.prompt([
    {
        type: "input",
        message: "Project Title:  ",
        name: "title",
        default: title
    },
    {
        type: "input",
        message: "Description:  ",
        name: "description",
        default: description
    },
    {
        type: "input",
        message: "Installation Instructions (triple space will be parsed as a new line:  ",
        name: "installation",
    },
    {
        type: "input",
        message: "Features (three spaces will be treated as a new list item):  ",
        name: "features",
    },
    {
        type: "input",
        message: "Usage:  ",
        name: "usage",
    },
    {
        type: "checkbox",
        message: "What Licenses should be included:",
        name: "license",
        choices: [
            "MIT",
            "GNU GPL",
            "Mozilla",
            "The Unlicense",
            "Apache-2.0",
            "Other",
        ]
    },
    {
        type: "input",
        message: "Constributing:  ",
        name: "contribute",
    },
    {
        type: "input",
        message: "Tests:  ",
        name: "tests",
    },
    {
        type: "input",
        message: "Author:  ",
        name: "author",
        default: author,
    },
    {
        type: "input",
        message: "GitHub username:  ",
        name: "github",
        default: githubUser,
    },
    {
        type: "input",
        message: "GitHub URL:  ",
        name: "githubUrl",
        default: authorGithub,
    } 
]).then(response => {
    console.log("running .then");
    response.installation = response.installation.replace(/"   "/g, "\n");
    projectInfo = {
        title: response.title,
        description : response.description,
        license : response.license,
        installation : response.installation,
        features : response.features,
        usage : response.usage,
        contribute : response.contribute,
        tests : response.tests,
        github : response.github,
    };

});

