// function to generate markdown for README

const data = {
  description : "Description",
  contents: "Table of Contents",
  installation: "Installation",
  usage: "Usage",
  license: "License",
  contributing: "Contributing",
  tests: "Tests",
  questions: "Questions",
}

function generateMarkdown(data) {
  return `${data.title}
  ${data.description}
  ${data.contents}
  ${data.installation}
  ${data.usage}
  ${data.license}
  ${data.contributing}
  ${data.tests}  
  ${data.questions}
`;
}

module.exports = generateMarkdown;
