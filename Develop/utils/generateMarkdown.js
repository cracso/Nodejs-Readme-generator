// function to generate markdown for README
function generateMarkdown(data, gitInfo) {
  return `
  # **${data.title}**


  ${data.description}
  
  ##license
  
  ${data.license}

  <img src = "https://img.shields.io/static/v1?label=license&message=${data.license}&color=blue">


  ## Table of contents

  [Description](#Description)
  [Installation](#Installation)
  [Usage](#Usage)
  [License](#License)
  [Contributors](#Contributors)
  [Test](#Test)
  [Questions](#Questions)

  ## Installation
  ${data.installation}

   ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
      
  ${gitInfo.name}
  
  
  Link to GitHub: ${gitInfo.profile}

  ## Test
  ${data.test}

  ## Questions
  
  Email address: ${data.questions}
  
`;
}

module.exports = generateMarkdown;
