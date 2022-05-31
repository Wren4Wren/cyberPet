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
  
