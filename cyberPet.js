class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hunger = 100;
    this.thirst = 100;
    this.happiness = 100;
  };
  stats() {
    console.log(`\n ${this.name}'s stats are now: `);
    console.table(this);
  };
  food() {
    this.hunger += 10;
    this.thirst -= 10;
    this.happiness -= 10;
    console.log(
      `\n ${this.name} settles to eat, decreasing hunger to ${this.hunger}, but increasing thirst to ${this.thirst} which makes ${this.name} unhappy.`
    );
    this.stats();
  };
  drink() {
    this.thirst += 10;
    this.happiness += 10;
    console.log(
      `\n ${this.name} takes a sip of water, decreasing their thirst to ${this.thirst} and increasing their happiness to ${this.happiness}.`
    );
    this.stats();
  };
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
    };
  };
};
class Dog extends Animal {
  constructor(name) {
    super(name);
  };
  fetch() {
    this.health += 10;
    this.hunger -= 15;
    this.happiness += 20;
    console.log(
      `\n You take ${this.name} to the park for a game of fetch, increasing their health to ${this.health} and happiness to ${this.happiness}`
    );
    this.stats();
  };
  wagTail() {
    this.health += 5;
    this.happiness += 5;
    console.log(
      `${this.name} is happy and wags their tail, increasing health & happiness by 5 to ${this.health}, ${this.happiness}.`
    );
    this.stats();
  };
};
class Cat extends Animal {
  constructor(name) {
    super(name);
  };
  play() {
    this.health += 5;
    this.hunger -= 15;
    this.happiness += 20;
    console.log(`${this.name} play dialogue`);
    this.stats();
  };
  sleep() {
    this.health += 20;
    this.hunger -= 20;
    this.thirst -= 20;
    console.log(
      `${this.name} is tired and curls up to sleep increasing health by 20 to ${this.health}, but also increasing hunger and thirst to ${this.hunger}, ${this.thirst}.`
    );
    this.stats();
  }
};

module.exports = {Dog, Cat};