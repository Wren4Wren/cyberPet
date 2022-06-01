class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hunger = 100;
    this.walkies = 100;
  }
  walkies() {
    this.health += 10;
    this.hunger -= 10;
    return this;
  }

  eat() {
    this.health -= 10;
    this.hunger += 10;
    console.log(`${this.name}'s health is ${this.health}`);
    return this;
  }
  stats() {
    return console.table({
      name: this.name,
      health: this.health,
      hunger: this.hunger,
      walkies: this.walkies,
    });
  }
}

class Cat extends Animal {
  constructor(name, content) {
    super(name, content);
    this.content = content;
  }

  eat() {
    this.health -= 10;
    this.hunger += 10;
    console.log(`${this.name} is happy`);
    return this;
  }
  walkies() {
    console.log(`Taking ${this.name} for a walk, they are ${this.content}`);
    this.health += 10;
    this.hunger -= 10;
    return this;
  }
}
module.exports = { Cat };