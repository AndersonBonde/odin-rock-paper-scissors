// Determine the computer choice of rock, paper or scissors;
function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 3));
    let choice;

    switch(randomNum) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }

    return choice;
}
getComputerChoice();

function playRound(playerChoice, computerChoice) {
    switch(playerChoice.toLowerCase()) {
        case "rock":
            if(computerChoice === "rock") {
                return "It`s a Draw";
            } else if(computerChoice === "paper") {
                return "You Lose! Paper beats Rock";
            } else {
                return "You Win! Rock beats Scissors";
            }
        case "paper":
            if(computerChoice === "rock") {
                return "You Win! Paper beats Rock";
            } else if(computerChoice === "paper") {
                return "It`s a Draw";
            } else {
                return "You Lose! Rock beats Paper";
            }
        case "scissors":
            if(computerChoice === "rock") {
                return "You Lose! Rock beats Scissors";
            } else if(computerChoice === "paper") {
                return "You Win! Scissors beats Paper";
            } else {
                return "It`s a Draw";
            }
    }
}

let playerChoice = getComputerChoice();
let computerChoice = getComputerChoice();
console.log(`player: ${playerChoice} computer: ${computerChoice} result: ${playRound(playerChoice, computerChoice)}`);