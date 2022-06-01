const inquirer = require("inquirer");
const { questions } = require("./questions")
const {Animal, Dog, Cat} = require("./cyberPet")


const start = async () => {
    const typeOfPet = await inquirer.prompt({
        type: "list",
        name: "pet",
        message: "Which Pet would you like to adopt?",
        choices: ["cat", "dog",]
    });

    const petName = await inquirer.prompt({
        type: "input",
        name: "name",
        message: `What will you call your new ${typeOfPet.pet}?`
    });

    if (typeOfPet === "cat") {
        myPet = new Cat(petName.name);
        options = [{
            key: "A",
            name: "Give Food",
            value: "food",
        },
        {
            key: "B",
            name: "Give Drink",
            value: "drink",
        },
        {
            key: "C",
            name: "Play",
            value: "play",
        },
        {
            key: "D",
            name: "Sleep",
            value: "sleep",
        }
        ];
    } else if (typeOfPet === "dog") {
        myPet = new Dog(petName.name);
        options = [{
            key: "A",
            name: "Give Food",
            value: "food",
        },
        {
            key: "B",
            name: "Give Drink",
            value: "drink",
            },
            {
                key: "C",
                name: "Fetch",
                value: "fetch",
            },
            {
                key: "D",
                name: "Wag Tail",
                value: "wagTail",
            },
            ]
    }
    const activity = await inquirer.prompt({
        type: "list",
        name: "chosen",
        message: `What do you want to do with ${myPet.name}?`,
        choices: options,
    })

    switch (activity.chosen) {
        case "food":
            myPet.food();
            break;
        case "drink":
            myPet.drink();
            break;
        case "walk":
            myPet.walk();
            break;
    }
};
start()