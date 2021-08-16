const licenses = [
  { name:'Apache 2.0 License',
    badgeLink:'[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  },
  { name:'Boost Software License 1.0',
    badgeLink:'[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
  },
  { name:'BSD 3-Clause License',
    badgeLink:'[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  },
  { name:'Eclipse Public License 1.0',
  badgeLink:'[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
  },
  { name:'GNU GPL v3',
  badgeLink:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  },
  { name:'IBM Public License Version 1.0',
  badgeLink:'[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
  },
  { name:'The MIT License',
  badgeLink:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  },
  { name:'Mozilla Public License 2.0',
  badgeLink:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  },
  { name:'Attribution License (BY)',
  badgeLink:'[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)',
  },
  { name:'--no license--',
  badgeLink:''
  },
]
// TODO: Create a function that returns a license badge-link based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeLink(license) {
  myLicense= licenses.find(element => element.name===license);
  return myLicense.badgeLink;
}
// a function to generate Technologies Used section / if no technologies selected exclude this section from README
function createTechnologies(techList){
  techString='';
  if (techList.length>0){
    techString='## Technologies Used\n ';
  techString+='---\n ';
    for (i=0;i<techList.length;i++){
      techString= techString+ '* ' + techList[i] +'\n ';
  }
  return techString;
    }
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.name} ${renderLicenseBadgeLink(data.license)}

  ${data.shortDes}
  
  ## Description
  ---
  ${data.description}
  

  ${createTechnologies(data.technologies)}
  
  ## Table of Contents 
  ---
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributed](#contributed)
  - [Questoins](#questions)
  
  ## Installation 
  ---
  
  ${data.install}  
  
  ## Usage
  ---
  
  ${data.usage}  

  ## License 
  ---
  
  ${data.license} ${renderLicenseBadgeLink(data.license)}

  ## Contributed
  ---
  
  ${data.contributed}  
  
  ## Test
  ---
  
  ${data.test}  
  
  ## Questions
  ---
  If you hane any questions:
  
  Get in touch with me on Github [${data.username}](https://github.com/${data.username})
  
  Email me ${data.email}
  
  `;
  }


module.exports = {generateMarkdown, licenses}
