//displaying license badge at the top of readme
//function to display license badge
const generateLicenseBadge = license => {
  //array of badge image urls
  const badgeArrays = {
      'Apache': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      'BSD': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
      'Creative Commons': 'https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg',
      'GNU GPL v3': 'https://img.shields.io/badge/License-GPL-blue.svg',
      'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
  };
  return badgeArrays[License];

};


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${generateLicenseBadge(data.License)}

  ## Description
  ${data.Description}

  ## Table of Contents:
   * [License](#License)
   * [Installation](#Installation)
   * [Usage](#Usage)
   * [Contribute](#Contribute)
   * [Tests](#Tests)
   * [Questions](#Questions)

  ## License
  ${data.License}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}
  
  ## Contribute
  ${data.Contribute}
  
  ## Tests
  ${data.Tests}

  ## Questions
  * [Click to access GitHub](https://www.github.com/${data.GitHub})

  * Feel free to contact me with any questions @: ${data.Email}

`;
}

module.exports = generateMarkdown;