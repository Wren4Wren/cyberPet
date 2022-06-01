const inquirer = require("inquirer");

// const {Cat} = require(`./animals/cat.js`);
// const { Dog } = require(`./animals/dog.js`);

class Animal {
  constructor(name) {
    this.name = name;
    this.health === 100;
    this.hunger === 100;
    this.thirst === 100;
    this.happiness === 100;
  }
  food() {
    this.hunger += 10;
    this.thirst -= 10;
    this.happiness -= 10;
    console.log(`\n ${this.name} settles to eat, decreasing hunger to ${this.hunger}, but increasing thirst to ${this.thirst} which makes ${this.name} unhappy.`);
    this.stats();
  }
  drink() {
    this.thirst += 10;
    this.happiness += 10;
    console.log(`\n ${this.name} takes a sip of water, decreasing their thirst to ${this.thirst} and increasing their happiness to ${this.happiness}.`)
  }
  status() {
    if (this.health <= 0) {
      return false;
    } else if (this.hunger <= 0) {
      return false;
    } else if (this.thirst <= 0) {
      return false;
    } else if (this.happiness <= 0) {
      return false;
    } else {
      return true;
    }
  }
  class Dog extends Animal {
    constructor(name) {
      super(name)
    }
  }




}

// let myPet = "";
// const start = async () => {
//   const typeOfPet = await inquirer.prompt({
//     name: "typeOfPet",
//     type: "list",
//     message: "What would you like your type of pet to be?\n",
//     choices: ["Cat", "Dog"],
//   });
//   if (typeOfPet === "Cat") myPet = new Cat(petName);
//   else if (typeOfPet === "Dog") myPet = new Dog(petName);

//   const petName = await inquirer.prompt({
//     type: "input",
//     name: "petName",
//     message: "What will you name your pet?\n",
//   });

//   const wants_food = await inquirer
//     .prompt([
//       {
//         name: "wants_food",
//         type: "confirm",
//         message: "Do you want food?",
//       },
//     ])
//     .then((answer) => {
//       const foodAnswer = answer.wants_food;
//       console.log(foodAnswer);
//     });

//   const wants_walks = await inquirer
//     .prompt([
//       {
//         name: "wants_walks",
//         type: "confirm",
//         message: `Do you want to take your pet for a walk?`,
//       },
//     ])
//     .then((answer) => {
//       const walksAnswer = answer.wants_walks;
//       console.log(walksAnswer);
//     });
// };

// // console.log(start());
// start();