import inquirer from 'inquirer';
import petNames from './data/petNames.js';

const questions = [
  {type:"list", name:"petType", message:"What type of pet are you naming?", choices:["cat","dog"]}, 
  {type:"list", name:"gender", message:"What is your pet's gender?", choices:["female","male"]}, 
  {type:"list", name:"nameType", message:"What type of name would you like?", choices:["cutesy","human"]}, 
]

function getRandomFilteredName(petType, gender, nameType) {
  const filterPetNames = petNames.filter(pet => {
    pet.petType === petType &&
    pet.gender === gender &&
    pet.nameType === nameType
})
  if (filterPetNames.length === 0) {
    return "sorry. No matches are found "
  }
const randomPet = Math.floor(Math.random()*filterPetNames.length)
return filterPetNames[randomPet].name;
}

inquirer
  .prompt(questions).then(answers => {
  const {petType, gender, nameType} = answers
  const randomName = getRandomFilteredName(petType, gender, nameType)
  console.log("Here is your pet name:", randomName);    
  })

  // .catch((error) => {
  //   if (error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else went wrong
  //   }
  // });
  
  