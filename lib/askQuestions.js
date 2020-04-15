const MyProjInfo = require('../lib/getProjectInfo');
const projectInfo = new MyProjInfo;

const{title, description, usage, license, tests, author, githubUser, authorGithub, authorImg, github} = projectInfo;
console.log(title+" "+description+" "+usage);
questions = ([
    {
        type: "input",
        message: "Project Title:  ",
        name: "title",
        default: title,
    },
    {
        type: "input",
        message: "Description:  ",
        name: "description",
        default: description,
    },
    {
        type: "input",
        message: "Installation Instructions:  ",
        name: "installation",
    },
    {
        type: "input",
        message: "Usage:  ",
        name: "usage",
        default: usage,
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
        default: tests,
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
])
// console.log(questions);
module.exports = questions;