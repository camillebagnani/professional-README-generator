// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// Array of questions for user input that we can use as a variable in our inquirer prompt
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Any usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please list the credits here:',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Any test instructions?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What is the license?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Add a link to your GitHub profile.',
        name: 'profile',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

// Writes README file
// Takes in the file name and the data from the inquirer prompt
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => {
        console.log('Generating README...')
    })
}

// This will initialize the app when you call node index
function init() {
    // Inquirer uses the questions array as the prompts in the terminal
    inquirer.prompt(questions)
    // The function waits for the response before it completes the writeToFile function
    .then((response) => {
        var markdown = generateMarkdown(response)
        // We pass in the file name, and the response from inquirer
        writeToFile('README.md', markdown)
    })
 }

// Function call to initialize app
init();
