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
    name: "sections",
    message: "What sections would you like to include?"
},
{
    type: "input",
    name: "description",
    message: "Please write a short description of your project."
},
{
    type: "input",
    name: "contents",
    message: "Can you include a table of contents?"
},
{
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?"
}
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
inquirer.createPromptModule(questions).then(answers => {
    const markdown = generateMarkdown(answers);
    writeToFile("README.md", markdown);
})
}

// function call to initialize program
init();
