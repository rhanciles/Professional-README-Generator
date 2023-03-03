const fs = require("fs");
const util = require('util');
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);

// const generateMarkdown = require("./utils/generateMarkdown");

const mit = {
    badge: 'https://img.shields.io/github/license/Rod/Readme%20Generator',
    license: ['MIT Software License:',
    'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'],
  };

  const bsd = {
    badge: 'https://img.shields.io/pypi/l/Readme%20Generator',
    license: ['BSD Software License:',
    'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'],
  };

  const glp = {
    badge: 'https://img.shields.io/eclipse-marketplace/l/Readme%20Generator',
    license: ['GLP Software License:',
    'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'],
  };

  const apache = {
    badge: 'https://img.shields.io/hexpm/l/Readme%20Generator',
    license: ['APACHE Software License:',
    'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'],
  };

  const none = {
    badge: 'License Free',
    license: 'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
  };


console.log(mit.badge)
console.log(glp.license)

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
      name: ['badge', 'license'],
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



// function to write README file
const generateInput = (data) => {

if (data.license === 'MIT') {
      console.log("MIT !!!!!!!!")
        (data.badge = mit.badge);
        (data.license = mit.license);
    } else if (data.license === 'BSD-3') {
        (data.badge = bsd.badge);
        (data.license = bsd.license);
    } else if (data.license === 'GPL-2.0') {
        (data.badge = glp.badge);
        (data.license = glp.license);
    } else if (data.license === 'APACHE-2.0') {
        (data.badge = apache.badge);
        (data.license = apache.license);
    } else {
        (data.badge = none.badge);
        (data.license = none.license);
    // } else {
    //     (data.badge = "");
    //     (data.license = "");
    } 

return `${data.badge}

# ${data.title}

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

${data.license}

## Contributing

${data.contribute}

## Test

${data.testing}

## Questions

Please feel free to reach out if you have any questions, queries, comments, or suggestions. You can use the links below to contact me.

GitHub Username: [${data.github}](${data.gitURL})
[Contact Email](${data.email})`;

}

// function to initialize program
const init = async () => {
    console.log('Hi, please type in your details');

    try {
      const data = await questions();
  
    //   const text = JSON.stringify(generateInput(data));
      const text = generateInput(data);

      await writeFileAsync('README.md', text);
    //   await writeFileAsync('README.md', JSON.stringify(text));
  
      console.log('Successfully written to README.md');
    } catch (err) {
      console.log(err);
    }
  };

// function call to initialize program
init();

console.log(questions.choices)
