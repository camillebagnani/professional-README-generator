// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt([
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
        message: 'What are the contribution guidelines?',
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
        choices: ['test1', 'test2'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please provide the link to your GitHub profile.',
        name: 'profile',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
])
.then((response) =>
fs.writeFile('README.md', JSON.stringify(response), (err) => {

})
)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

{`# ${title}
## Description
${description}
## Installation
${installation}
## Usage
${usage}
## Credits
${credits}
## Tests
${tests}
## License
${license}
`}