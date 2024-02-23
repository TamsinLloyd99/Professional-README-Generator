const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What instillation is needed?",
        default: "npm install"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "list",
        name: "license",
        message: "What license did you use?",
        choices: ["MIT", "Apache", "GPL", "None"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "What tests did you run?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        const markdown = generateMarkdown(answers);
        writeToFile("tempReaDME.md", markdown);
    })
}

// function call to initialize program
init();
