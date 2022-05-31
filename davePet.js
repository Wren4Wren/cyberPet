const inquirer = require("inquirer");

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hunger = 100;
  }
  drinks() {
    this.health += 5;
    return this;
  }

  eats() {
    this.health += 5;
    this.hunger += 10;
    console.log(`${this.name}'s health is ${this.health}`);
    return this;
  }
  stats() {
    return console.table({
      name: this.name,
      health: this.health,
      hunger: this.hunger,
    });
  }
}

class Cat extends Animal {
  constructor(name, content) {
    super(name, content);
    this.content = content;
  }

  playWool() {
    this.health += 10;
    this.hunger -= 10;
    console.log(`${this.name} is happy`);
    return this;
  }
  naps() {
    console.log(
      `${this.name} is taking a lovely nap, they are ${this.content}`
    );
    this.health += 10;
    return this;
  }
}

class Dog extends Animal {
  constructor(name, content) {
    super(name, content);
    this.content = content;
  }

  playBall() {
    this.health += 10;
    this.hunger -= 10;
    console.log(`${this.name} is happy`);
    return this;
  }
  walks() {
    console.log(`Taking ${this.name} for a walk, they are ${this.content}`);
    this.health += 10;
    return this;
  }
}

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

console.log(start())