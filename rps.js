// 0: rock
// 1: paper
// 2: scissors

var humanScore = 0;
var computerScore = 0;

const rockbtn = document.createElement("button");
const paperbtn = document.createElement("button");
const scissorsbtn = document.createElement("button");

rockbtn.addEventListener("click", () => play(0));
paperbtn.addEventListener("click", () => play(1));
scissorsbtn.addEventListener("click", () => play(2));

rockbtn.textContent = "ROCK";
paperbtn.textContent = "PAPER";
scissorsbtn.textContent = "SCISSORS";

const scoreDiv = document.createElement("div");

const header = document.createElement("h1");
header.textContent = "Score Board:"
const score = document.createElement("p");
score.textContent = `Your score: ${humanScore}, CPU score: ${computerScore}.`;

let result = document.createElement("p");
result.textContent = "Click a button to start!";

scoreDiv.appendChild(header);
scoreDiv.appendChild(score);
scoreDiv.appendChild(result);

const body = document.querySelector("body");
body.appendChild(scoreDiv);
body.appendChild(rockbtn);
body.appendChild(paperbtn);
body.appendChild(scissorsbtn);

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function play(selection) {
    let human = selection;
    let cpu = getComputerChoice();

    if (human === cpu) {
        result.textContent = "TIE";
    }

    if (human > cpu) {
        if (human === 2 && cpu === 0) {
            computerScore++;
            result.textContent = "YOU LOSE";
        }
        else {
            humanScore++;
            result.textContent = "YOU WIN";
        }
    } else if (cpu > human) {
        if (cpu === 2 && human === 0) {
            humanScore++;
            result.textContent = "YOU WIN";
        }
        else {
            computerScore++;
            result.textContent = "YOU LOSE"
        }
    }
    score.textContent = `Your score: ${humanScore}, CPU score: ${computerScore}.`;
}


