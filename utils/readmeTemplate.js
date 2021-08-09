function fillTemplae(answers) {
    return `

# ${data.projectName} 

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

${data.installation}  

## Credit
---

${data.credit}  


## Questions
---

Get in touch with me on Github: [${data.username}](https://github.com/${data.username})

If you have any additional questions, please contact me: ${data.email}

## License 
---

${data.license}  
`;
}

module.exports = fillTemplae;