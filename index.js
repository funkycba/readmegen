// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
// TODO: Create an array of questions for user input
const questions = [{
  name: "title",
  type: "input",
  message: "Create a title",
  
},
{
  type: 'input',
  name:'description',
  message:'Enter your description:',
},
{
  type: 'input',
  name:'install',
  message:'Enter instructions on how to install:',
},
{
  type: 'input',
  name:'usage',
  message:'Explain the usage:',
},
{
  type: 'input',
  name:'contrib',
  message:'Enter guidelines',
},
{
  type: 'input',
  name:'test',
  message:'Enter instructions:',
},
  {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation?',
  },
  {
    type: 'input',
    name: 'Why',
    message: 'What made you want to build this project?',
  },
  {
    type: 'input',
    name: 'solution',
    message: 'What problem does this solve?',
  },
  {
    type: 'input',
    name: 'Learning',
    message: 'What did you learn?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  },
  {
    type: 'input',
    name:'email',
    message:'What is your email?',
  },
  {
  name: "license",
  type: "list",
  message: "Choose your license",
  choices: ["Thin Crust", "Stuffed Crust", "Pan"],
  },
];

// TODO: Create a function to write README file

const generateMD = ({ title, description, install, usage, contrib, test, motivation, Why, solution, Learning, github, linkedin, email, license }) =>
`![](https://img.shields.io/badge/license-${license}MIT-red)
# ${title}
Table of Contents:
1. [ Description ] (#desc)
2. [ Usage ] (#usge)
3. [ Questions ] (#Qs)
4. [ Tests ] (#tests)
5. [ Contributing ] (#contrib)
6. [ License ] (#license)
7. [ Installation ] (#install)

<a name="desc"></a>
## 1. Description
${description}

<a name="usge"></a>
## 2. 
${usage}
<a name="Qs"></a>
## 3. Questions
    So your motivation is to ${motivation}
    You are doing this because${Why}.
    The problem you are trying to solve is ${solution}
    What you have learned is ${Learning}
    Username:[ ${github}](https://github.com/${github})
    Email address: ${email}
    <a name="tests"></a>
    ## 4. Tests
    ${test}
    <a name="contrib"></a>
   ## 5. Contributing
    ${contrib}
   <a name="license"></a>
   ## 6. License
    ${license}
   <a name="install"></a>
   ## 7. Installation
   ${install}
`;


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) // this should run the inquirer prompt.
    .then((answers) => writeFile('README.md', generateMD(answers)))
    .then(()=> console.log('Successfully wrote'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
