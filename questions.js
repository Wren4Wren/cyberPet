//  this ----------------

const questions = {
  

  choice: {
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: [
      {
        key: "a",
        name: "Feed your pet",
        value: "feed",
      },
      {
        key: "b",
        name: "Give your pet a drink",
        value: "drink",
      },
      {
        key: "c",
        name: "Walk your pet",
        value: "walk",
      },
      {
        key: "d",
        name: "Quit the game",
        value: "quit",
      },
    ],
  },

  drink: {
    type: "list",
    name: "drink",
    message: `${this.name}, would you like a drink?`,
    choices: [
      {
        key: "a",
        name: "yes thirst +10",
        value: "yes",
      },
      {
        key: "b",
        name: "No",
        value: "no",
      },
    ],
  },

  walk: {
    type: "list",
    name: "walks",
    message: `${this.name}, would you like to go for a walk?`,
    choices: [
      {
        key: "a",
        name: "yes happines +10 health +5",
        value: "yes",
      },
      {
        key: "b",
        name: "No",
        value: "no",
      },
    ],
  },

  catOptions: {
    type: "list",
    message: `${this.name}, would you like to do?`,
    choice: [
      {
        key: "A",
        name: "Give Food",
        value: "feed",
      },
      {
        key: "B",
        name: "Give Water",
        value: "water",
      },
      {
        key: "C",
        name: "Play with Wool",
        value: "playWool",
      },
      {
        key: "D",
        name: "Let Sleep",
        value: "sleep",
      },
    ],
  },

  dogOptions: {
    type: "list",
    message: `${this.name}, would you like to do?`,
    choices: [
      {
        key: "A",
        name: "Give Food",
        value: "feed",
      },
      {
        key: "B",
        name: "Give Water",
        value: "water",
      },
      {
        key: "C",
        name: "Play fetch",
        value: "playWool",
      },
      {
        key: "D",
        name: "Wag tail",
        value: "sleep",
      },
    ],
  },
};

module.exports = { questions };
