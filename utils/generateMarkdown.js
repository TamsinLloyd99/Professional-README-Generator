//function to generate a badge
function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return ''
}

// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
This is my GitHub profile: 'https://github.com/${data.github}', if you would like to view my code or other apps. If you have any questions, feel free to contact me at ${data.email}.

## License

${renderLicenseBadge(data.license)}

This project is licensed under the ${data.license} license.
`;
}

module.exports = generateMarkdown;
//double check layout

//When a user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.

//When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

//When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.

//When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.