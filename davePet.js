const inquirer = require("inquirer");

const Cat = require(`./animals/cat`);
const Dog = require(`./animals/dog`);

let myPet = "";
const start = async () => {
  const typeOfPet = await inquirer.prompt({
    name: "typeOfPet",
    type: "list",
    message: "What is your pets name?",
    choices: [
      {
        key: "a",
        name: "Cat",
        value: "cat",
      },
      {
        key: "b",
        name: "Dog",
        value: "dog",
      },
    ],
  });
  const petName = await inquirer.prompt({
    type: `input`,
    name: `petName`,
    message: `What will you name your pet?`,
  });
  if (typeOfPet === `cat`) myPet = new Cat(petName);
  else if (typeOfPet === `dog`) myPet = new Dog(petName);
};

console.log(start());
