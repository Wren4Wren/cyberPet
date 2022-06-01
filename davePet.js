const inquirer = require("inquirer");

const {Cat} = require(`./animals/cat.js`);
const { Dog } = require(`./animals/dog.js`);

let myPet = "";
const start = async () => {
  const typeOfPet = await inquirer.prompt({
    name: "typeOfPet",
    type: "list",
    message: "What would you like your type of pet to be?\n",
    choices: ["Cat", "Dog"],
  });
  if (typeOfPet === "Cat") myPet = new Cat(petName);
  else if (typeOfPet === "Dog") myPet = new Dog(petName);

  const petName = await inquirer.prompt({
    type: "input",
    name: "petName",
    message: "What will you name your pet?\n",
  });

  const wants_food = await inquirer
    .prompt([
      {
        name: "wants_food",
        type: "confirm",
        message: "Do you want food?",
      },
    ])
    .then((answer) => {
      const foodAnswer = answer.wants_food;
      console.log(foodAnswer);
    });

  const wants_walks = await inquirer
    .prompt([
      {
        name: "wants_walks",
        type: "confirm",
        message: "Do you want to go for a walk?",
      },
    ])
    .then((answer) => {
      const walksAnswer = answer.wants_walks;
      console.log(walksAnswer);
    });
};

console.log(start());
