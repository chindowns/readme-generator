var inquirer = require('inquirer');
var getPtojectInfo = require('../lib/getProjectInfo');

console.log(getProjectInfo);


    inquirer.prompt([
        {
            // type: "input",
            message: "Project Title",
            name: "title",
            default: myProject.title,
        },
        {
            // type: "input",
            message: "Description",
            name: "description",
            default: myProject.description,
        },
        {
            type: "input",
            message: "Installation Instructions (triple space will be parsed as a new line",
            name: "installation",
        },
        {
            type: "input",
            message: "Features (three spaces will be treated as a new list item",
            name: "features",
        },
        {
            type: "input",
            message: "Usage",
            name: "usage",
        },
        {
            type: "checkbox",
            message: "What Licenses should be included",
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
            message: "Constributing",
            name: "contribute",
        },
        {
            type: "input",
            message: "Tests",
            name: "tests",
        },
        {
            type: "input",
            message: "GitHub username",
            name: "github",
            default: myProject.githubUser,
        },
        {
            type: "input",
            message: "GitHub URL",
            name: "githubUrl",
            default: myProject.authorGithub,
       } 
    ]).then((response) => {
        response.installation = response.installation.replace(/"   "/g, "\n");
        return myProject = {
            title: response.title,
            description : response.description,
            installation : response.installation,
            features : response.features,
            usage : response.usage,
            license : response.license,
            contribute : response.contribute,
            tests : response.tests,
            github : response.github,
        }
    });
    console.log(getProjectInfo);
    return getProjectInfo;
