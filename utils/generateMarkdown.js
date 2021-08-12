// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.name} 
  ${data.shortDes}
  
  ## Description
  ---
  ${data.description}
  
  ## Technologies Used
  ---
  ${data.technologies}
  * HTML
  
  ## Table of Contents 
  ---
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credit](#credit)
  - [Questoins](#questions)
  - [License](#license)
  
  
  ## Installation 
  ---
  
  ${data.install}  
  
  ## Usage
  ---
  
  ${data.usage}  

  ## Credit
  ---
  
  ${data.contribute}  
  
  ## Test
  ---
  
  ${data.test}  
  
  ## Questions
  ---
  
  Get in touch with me on Github: [${data.username}](https://github.com/${data.username})
  
  If you have any additional questions, please contact me: ${data.email}
  
  ## License 
  ---
  
  ${data.licensing}  
  `;
  }


module.exports = generateMarkdown;
