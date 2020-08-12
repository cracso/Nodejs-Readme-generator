const inquirer = require("inquirer");
const fs = require("fs");
const generate = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title'
    },
    {
        type: 'input',
        message: "Project Description",
        name: 'description',
    },
    {
        type: "input",
        name: "installation",
        message: "Provide the installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide the project usage"
    },
    {
        type: "input",
        name: "license",
        message: "Provide the project license"
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide the contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Provide the project tests"
    },
    {
        type: "input",
        name: "questions",
        message: "Provide any questions"
    }
];    
// function to write README file
inquirer
.prompt(questions)
.then(function(data){

fs.writeFile("README.md", generate(data), function(err) {
    if (err) {
      throw err;
    };
      console.log("NEW READ ME FILE CREATED!");
    });

 })
// function to initialize program
function init() {

}

// function call to initialize program
init();
