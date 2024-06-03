async function startAdventure() {
    let command = "start";
    let question = "Welcome to the simple text adventure game!";
    let answers = [];
    let userInput;
    console.log(question);
    
        while (true) {
            switch (command) {
                case "start":
                    console.log("You find yourself in a dark forest. You can go 'left' or 'right'.");
                    question = "What do you do?"
                    answers = ["left", "right"];
                    userInput = await askQuestion(question, answers)
    
                    if (userInput === "left") {
                        command = "left";
                    } else {
                        command = "right";
                    }
                    break;
                case "right":
                    console.log("You find a treasure chest! You can 'open' it or 'leave' it.");
                    question = "What do you do?"
                    answers = ["open", "leave"];
                    userInput = await askQuestion(question, answers)
    
                    if (userInput === "open") {
                       console.log("You open the chest and find a treasure! You win!");
                    } else {
                        console.log("You leave the chest and go back to the start.");
                    }
                    command = "ending";
                    break;
    
                case "left":
    
                    console.log("You encounter a wild animal! You can 'fight' or 'run'");
                    question = "What do you do?"
                    answers = ["fight", "run"];
                    userInput = await askQuestion(question, answers)
    
                    if (userInput === "fight") {
                        console.log("You bravely fight the animal and win!");
                    } else {
                        console.log("You run away safely.");
                    }
                    command = "ending"
                    break;

                case "ending":
                    question = "Do you want to play again?";
                    answers = ["yes", "no"];
                    userInput = await askQuestion(question, answers);
    
                    if (userInput === "yes") {
                        command = "start";
    
                    } else {
                        console.log("Thank you for playing!");
                        return;
                    }
                    break;
            }
            
        }
    
    
}

function askQuestion (question, answers) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            let message = `${question}\n ${answers[0]}\n ${answers[1]}`
        let userInput = prompt(message);
        resolve(userInput)
        }, 2000)
    })
}