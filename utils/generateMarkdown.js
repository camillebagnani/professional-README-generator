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

// Only generate a Table of Contents link to License if there is a license, else return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `*[License](#license)`;
  } else {
    return '';
  }
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    // Return statement formatted like this because of template literal behavior in Markdown
    return `
## License
${license}`;
  } else {
    return '';
  }
}

// Generates markdown template of README using template literals
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