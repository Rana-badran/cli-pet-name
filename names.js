import inquirer from 'inquirer';
import petNames from './data/petNames.js';

const questions = [
  {type:"list", name:"petType", message:"What type of pet are you naming?", choices:["cat","dog"]}, 
  {type:"list", name:"gender", message:"What is your pet's gender?", choices:["female","male"]}, 
  {type:"list", name:"nameType", message:"What type of name would you like?", choices:["cutesy","human"]}, 
]

function getRandomFilteredName(petType, gender, nameType) {
  
  const filterPetNames = petNames.filter(pet => {
    return (
    pet.petType === petType &&
    pet.gender.toLowerCase() === gender &&
    pet.nameType === nameType)
})
  if (filterPetNames.length === 0) {
    return "sorry. No matches are found"
  }
const randomPet = Math.floor(Math.random()*filterPetNames.length)
return filterPetNames[randomPet].name;
}

// the value property "name" in the question object becomes the "key" in the answer object 
inquirer
  .prompt(questions).then(answers => {
  const {petType, gender, nameType} = answers
  const randomName = getRandomFilteredName(petType, gender, nameType)
  if (randomName === "sorry. No matches are found") {
    console.log(randomName);
  }
  else {
    console.log(`
      Here is your pet name:  ${randomName}
      `);   
  }
  })

  
  