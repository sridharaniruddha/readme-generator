const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// //displaying license badge at the top of readme
// //function to display license badge
// const generateLicenseBadge = license => {
//     //array of badge image urls
//     const badgeArrays = {
//         'Apache': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
//         'BSD': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
//         'Creative Commons': 'https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg',
//         'GNU GPL v3': 'https://img.shields.io/badge/License-GPL-blue.svg',
//         'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
//     };
//     return badgeArrays[License];
// };

//moved above code to generateMarkdown.js



// array of questions for user
const questions = [
    {
        // promt for project title
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
    },
    {
        //Prompt for project description
        type: 'input',
        name: 'Description',
        message: 'Please provide a description of your project',
    },
    {
        //prompt for choosing license
        type: 'list',
        name: 'License',
        message: 'Which license would you like to use?',
        choices: ["MIT", "Apache", "Eclipse", "Mozilla", "None"]
    },
    {
        //prmopt for installation instructions
        type: 'input',
        name: 'Installation',
        message: 'How do you install your project?',
    },
    {
        //prompt for usage after installation 
        type: 'input',
        name: 'Usage',
        message: 'How do you use your project?',
    },
    {
        //prompt for running tests
        type: 'input',
        name: 'Tests',
        message: 'Please state the command(s) to run tests',
    },
    {
        //prompt for github username
        type: 'input',
        name: 'GitHub',
        message: 'Please provide your GitHub username',
    },
    {
        //prompt for project contributors
        type: 'input',
        name: 'Contributing',
        message: 'Please list the contributors on this project',
    },
    {
        //prompt for email address/contact details (choose one when creating prompts)
        type: 'input',
        name: 'Email',
        message: 'Please provide your email address',
    },
]

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            console.error(err)
        } else {
            console.log("Successfully generated README.")
        }
    })

}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            writeToFile(`${answers.Title}.md`, answers)
        })
}

// function call to initialize program
init();