nmp install inquirer

class Animal {
  constructor(species) {
  this.species = species;
  this.health = 100;
  this.hunger = 100;
  }
  walks() {
  this.health += 10;
  this.hunger -= 10;
  console.log(`${this.species}'s health is ${this.health} and hunger is ${this.hunger}`);
  return this;
  }
  food() {
  this.health += 10;
  this.hunger += 10;
  console.log(`${this.species}'s health is ${this.health} and hunger is ${this.hunger}`);
  return this;
  }
  stats() {
  return console.table({
  species: this.species,
  health: this.health,
  hunger: this.hunger,
  });
}
}