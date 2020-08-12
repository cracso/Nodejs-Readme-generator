// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **${data.title}**

  ${data.description}

  ## Table of contents
  
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)
* [Test](#Test)
* [Questions](#Questions)

  ## Installation
  ${data.installation}

   ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributors
  ${data.contributing}

  ## Test
  ${data.test}

  ## Questions
  ${data.questions}  

`;
}

module.exports = generateMarkdown;
