// 0: rock
// 1: paper
// 2: scissors

var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    let choice = prompt("Choice: ").toLowerCase()
    let intChoice;
    if (choice === "rock"){
        intChoice = 0;
    } else if (choice === "paper") {
        intChoice = 1;
    } else if (choice === "scissors") {
        intChoice = 2;
    }

    return intChoice
}

function play() {
    let human = getHumanChoice();
    let cpu = getComputerChoice();

    if (human > cpu) {
        if (human === 2 && cpu === 0) {
            computerScore++;
        }
        else {
            humanScore++;
        }
    } else if (cpu > human) {
        if (cpu === 2 && human === 0) {
            humanScore++;
        }
        else {
            computerScore++;
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        play();
    }
    console.log(`Final Score: You: ${humanScore}, Computer: ${computerScore}`)
}

playGame();

