import inquirer from 'inquirer';
import petNames from './data/petNames'

const questions = [
  {type:"list", name:"petType", message:"What type of pet are you naming?", choices:["cat","dog"]}, 
  {type:"list", name:"petGender", message:"What is your pet's gender?", choices:["female","male"]}, 
  {type:"list", name:"nameType", message:"What type of name would you like?", choices:["cutesy","human"]}, 
]

inquirer
  .prompt(questions).then(answers => {
  console.log(answers);
  
    
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  
  