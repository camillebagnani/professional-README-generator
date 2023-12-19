// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![MIT license badge](https://img.shields.io/badge/License-MIT-green)`;
  } else if (license === 'APACHE 2.0') {
    return `![Apache 2.0 license badge](https://img.shields.io/badge/License-APACHE_2.0-green)`;
  } else if (license === 'GPL 3.0') {
    return `![GPL 3.0 license badge](https://img.shields.io/badge/License-GPL_3.0-green)`;
  } else if (license === 'BSD 3') {
    return `![BSD 3 license badge](https://img.shields.io/badge/License-BSD_3-green)`;
  } else if (license === 'None') {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// only generate this if there is a license
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `*[License](#license)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
*[Installation](#installation)

*[Usage](#usage)

*[Credits](#credits)

*[Tests](#tests)

${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## Tests
${data.tests}

${renderLicenseSection(data.license)}
`
}

module.exports = generateMarkdown;


// ## License
// ${data.license}