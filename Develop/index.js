const fs = require("fs");
const generate = require('./utils/generateMarkdown');
//added axios dependency
const axios = require("axios");
//added inquirer dependency
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title'
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
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
        type: "checkbox",
        name: "license",
        message: "Which license do you use",
        choices: [
            "MIT",
            "ISC",
            "Apache"
        ]
    },
    {
        type: "input",
        name: "test",
        message: "Provide the project tests"
    },
    {
        type: "input",
        name: "questions",
        message: "Email Address"
    },
   ];    

   inquirer
.prompt(questions)
.then(function(data){

    const githubUrl = `https://api.github.com/users/${data.username}`;

    axios.get(githubUrl).then(function(res) {
        
        const gitInfo = {
                email: res.data.email,
                name: res.data.name,
                profile: res.data.html_url
        };

// function to write README file
fs.writeFile("README.md", generate(data, gitInfo), function(err) {
    if (err) {
      throw err;
    };
      console.log("NEW READ ME FILE CREATED!");
    });
});

 })
// function to initialize program
function init() {

}

// function call to initialize program
init();

   
