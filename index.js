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
    }
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
