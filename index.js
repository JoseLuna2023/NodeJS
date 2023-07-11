
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of you project?"
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a short description explaining the what, why, and how your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage', 
        message: 'Provide instructions and examples for use'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you created an apllication or package and would like the other developers to contribute it, you can include guidelines for how to do so.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for testing your application.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application',
        choices: ['GNU General Public License v3.0', 'MIT license'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide the link to your github profile.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        console.log(data)
        err ? console.log(err) : console.log("README.md generated!")
    })
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
