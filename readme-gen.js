const FileIO = require('./lib/fileIO');
const inquirer = require('inquirer');
const questions = require('./lib/askQuestions');
const fileIO = new FileIO();
const ReadmeGen = require('./lib/generateMarkdown.js')
let path = "./README.md";

function init() {
    console.log(`This utility will walk you through creating a README.md file.
    It only covers the most common items, and tries to guess sensible defaults.
  
    Press ^C at any time to quit.`);

    // Check if Readme exists
    if (fileIO.exists('./README.md')) {
        return console.log('README.md file already exists, please delete and run again if you want to generate a new file');
    }

    inquirer.prompt(questions)
    .then(answers => {
        const readmeGen = new ReadmeGen();

        readmeGen.title(path, answers.title);
        readmeGen.shieldVersion(path);
        
        if (answers.description !== "") {
        readmeGen.section(path, "Description", answers.description);
        }

        readmeGen.tocHead(path);

        // Create Table of Contents based on answers that are not empty
        Object.keys(answers).forEach(answer => {
            if (answer !== "") {
                readmeGen.toc(path, answer);
        }});
        
        if (answers.install !== "") {
            readmeGen.section(path, "Installation", answers.installation);
        }

        if (answers.usage !== "") {
            readmeGen.section(path, "Usage", answers.usage);
        }

        if (answers.license !== "") {
            readmeGen.section(path, "Licenses", answers.license);
        }

        if(answers.contribute !== "") {
            readmeGen.section(path, "Contributers", answers.contribute);
        }

        if(answers.tests !== "") {
            readmeGen.section(path, "Tests", answers.tests);
        }

        if(answers.author !== "") {
            readmeGen.author(path, answers.author, answers.githubUrl);
        }
        console.log("README.md is complete");
    });

}

init();