const fs = require("fs");
const util = require('util');
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);

// const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () => {
return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title of your Readme?',
    },
    {
      type: 'input',
      name: 'describe',
      message: 'Enter a description?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Enter details about installation?',
    },
    {
      type: 'input',
      name: 'use',
      message: 'Explain how to use the app?',
    },
    {
      type: 'input',
      name: 'permit',
      message: 'Select a license for your project?',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Enter guidelines for contribution?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Enter guidelines for testing?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'gitURL',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email.',
    },
    
  ]);

}

// function to write README file
const generateInput = (data) =>

`# ${data.title}

## Description

${data.describe}

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)  


## Installation

${data.install}

## Usage

${data.use}

## License

${data.permit}

## Contributing

${data.contribute}

## Test

${data.testing}

## Questions

Please feel free to reach out if you have any questions, queries, comments, or suggestions. You can use the links below to contact me.

GitHub Username: [${data.github}](${data.gitURL})
[Contact Email](${data.email})`;



// function to initialize program
const init = async () => {
    console.log('Hi, please type in your details');
    try {
      const data = await questions();
  
      const text = generateInput(data);
  
      await writeFileAsync('README.md', text);
  
      console.log('Successfully written to README.md');
    } catch (err) {
      console.log(err);
    }
  };

// function call to initialize program
init();
