const inquirer = require("inquirer");
const { Dog, Cat } = require("./cyberPet");

try {
    let myPet = "";
    let options = [];
    
    const start = async (callback) => {
        
        const typeOfPet = await inquirer.prompt({
            type: "list",
            name: "typeOfPet",
            message: "Which pet would you like to adopt?",
            choices: ["cat", "dog"],
        });
            
        const nameOfPet = await inquirer.prompt({
            type: "input",
            name: "nameOfPet",
            message: `What will you call your new ${typeOfPet.typeOfPet}?`,
        });
        
        if (typeOfPet.typeOfPet === "cat") {
            myPet = new Cat(nameOfPet.nameOfPet);
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
            },
            ];
        } else if (typeOfPet === "dog") {
            myPet = new Dog(nameOfPet.nameOfPet);
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
            }
            ];
        }

        callback(game)     
            
    }


    const game = async(callback) => {
        const activity = await inquirer.prompt({
            type: "list",
            name: "chosen",
            message: `What do you want to do with ${myPet.name}?`,
            choices: options,
        });
            
        switch (activity.chosen) {
            case "food":
                myPet.food();
                break;
            case "drink":
                myPet.drink();
                break;
            case "fetch":
                myPet.fetch();
                break;
            case "wagTail":
                myPet.wagTail();
                break;
        }
                    
        callback(game)
    }

    start(game);

} catch (error){
    console.log("Error Fecth", error)
}
