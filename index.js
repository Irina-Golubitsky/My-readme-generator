// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {generateMarkdown, licenses} = require("./utils/generateMarkdown.js");
// array of licenses
const choicesL=licenses.map(x=>x.name);

// An array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your project name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your your project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'shortDes',
        message: 'Describe the whole project in one sentence (Required)',
        validate: shortDes => {
          if (shortDes) {
            return true;
          } else {
            console.log('Please describe the whole project in one sentence!');
            return false;
          }
        }
      },
      {
        type: "checkbox",
        name: "technologies",
        message: "Technologies Used (Check all that apply)",
        choices: ['JavaScript', 'HTML','CSS','PHP','Ruby', 'React', 'Python'],
      },
      {
        type: "input",
        name: "description",
        message: "Please enter your project full description (Required)",
        validate: (descInput) => {
          if(descInput) {
            return true;
          } else {
            console.log("Please enter your project full description!");
            return false;
          }
        },      
      },
      {
        type: "input",
        name: "install",
        message: "How to install this app? (Required)",
        validate: (install) => {
          if(install) {
            return true;
          } else {
            console.log("Please enter installaton insrtuctions!");
            return false;
          }
        },      
      }, 
      {
        type: "input",
        name: "usage",
        message: "Usage. How to use this app? (Required)",
        validate: (usage) => {
          if(usage) {
            return true;
          } else {
            console.log("Please enter how to use this app? !");
            return false;
          }
        },      
      }, 


      { 
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: choicesL,
    },
    {
      type: 'input',
      name: 'contributed',
      message: 'Enter contribution guidelines (Required)',
      validate: contribute=> {
        if (contribute) {
          return true;
        } else {
          console.log('Please enter contribution guidelines!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter test instuctions (Required)',
      validate: test=> {
        if (test) {
          return true;
        } else {
          console.log('Please enter test instuctions!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your github username? (Required)',
      validate: username=> {
        if (username) {
          return true;
        } else {
          console.log('Please enter your github username?!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email? (Required)',
      validate: email=>
        {
            // Regex mail check (return true if valid mail)
            if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)) {
              return true;
            } else{ console.log('Please enter your email!');
            return false;

            
          }
        }
    },
    ]);
  };


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: `File ${fileName} created!`
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() { 
  promptUser()
  .then(answers => {
    return generateMarkdown(answers);  
  })
  .then(readmeFile => {
    fileName= './result/README.md';
      return writeToFile(fileName, readmeFile);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse.message);
  })
  .catch(err => {
  console.log(err);
  });
}

// Function call to initialize app
init();
