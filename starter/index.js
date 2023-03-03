const fs = require("fs");
const util = require('util');
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);

const generateMarkdown = require("./utils/generateMarkdown");


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
      type: 'list',
      name: 'license',
      message: 'Select a license for your project?',
      choices: ['MIT', 'BSD-3', 'GPL-2.0', 'APACHE-2.0', 'None'],
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
      name: 'question',
      message: 'Enter comments or feedback requests',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'gitURL',
      message: 'Enter your GitHub URL',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email.',
    },
    
  ]);

}

const menu = {description: '- [Description](#description)',
installation: '- [Installation](#installation)',
usage: '- [Usage](#usage)',
license: '- [License](#license)',
contributing: '- [Contributing](#contributing)',
tests: '- [Tests](#tests)',
questions: '- [Questions](#questions)'  
  }


const heading = {description: '## Description',
installation: '## Installation',
usage: '## Usage',
license: '## License',
contributing: '## Contributing',
tests: '## Tests',
questions: '## Questions'  
}



// function to write README file
const generateInput = (data) => {

    generateMarkdown(data);

    // switch (menu) {
    //     case data.describe = "":
    //       {data.badge = mit.badge,
    //       data.license = mit.license};
      
    //     case data.license = 'BSD-3':
    //       {data.badge = bsd.badge,
    //       data.license = bsd.license};
    
    //     case data.license = 'GPL-2.0' :
    //       {data.badge = glp.badge,
    //       data.license = glp.license};
      
    //     case data.license = 'APACHE-2.0':
    //       {data.badge = apache.badge,
    //       data.license = apache.license};
    
    //     default:
    //       {data.badge = none.badge,
    //       data.license = none.license};
    
    //   }

return `${data.badge}

# ${data.title}


${heading.description}

${data.describe}


## Table of Contents

${menu.description} 
${menu.installation} 
${menu.usage}
${menu.license}
${menu.contributing}
${menu.tests}
${menu.questions}


${heading.installation}

${data.install}


${heading.usage}

${data.use}


${heading.license}

${data.license}


${heading.contributing}

${data.contribute}


${heading.tests}

${data.testing}


${heading.questions}

${data.question}

GitHub Username: [${data.github}](${data.gitURL})\n
[Contact Email](${data.email})`;

}


// function to initialize program
const init = async () => {
    console.log('Hi, please type in your details');

    try {
      const data = await questions();
  
      console.log(data.license);

      const text = generateInput(data);

      await writeFileAsync('README.md', text);
  
      console.log('Successfully written to README.md');
    } catch (err) {
      console.log(err);
    }

  };

// function call to initialize program
init();


