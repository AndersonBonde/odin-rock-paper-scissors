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

// Play a single round, comparing the choices to determine a round winner;
function playRound() {
    let playerChoice = prompt("Rock, Paper or Scissors?", "");
    let computerChoice = getComputerChoice();

    switch(playerChoice.toLowerCase()) {
        case "rock":
            if(computerChoice === "rock") {
                return {message: "It`s a Draw", result: "Draw"};
            } else if(computerChoice === "paper") {
                return {message: "You Lose! Paper beats Rock", result: "Lose"};
            } else {
                return {message: "You Win! Rock beats Scissors", result: "Win"};
            }
        case "paper":
            if(computerChoice === "rock") {
                return {message: "You Win! Paper beats Rock", result: "Win"};
            } else if(computerChoice === "paper") {
                return {message: "It`s a Draw", result: "Draw"};
            } else {
                return {message: "You Lose! Rock beats Paper", result: "Lose"};
            }
        case "scissors":
            if(computerChoice === "rock") {
                return {message: "You Lose! Rock beats Scissors", result: "Lose"};
            } else if(computerChoice === "paper") {
                return {message: "You Win! Scissors beats Paper", result: "Win"};
            } else {
                return {message: "It`s a Draw", result: "Draw"};
            }
    }
}


function game() {
    let [playerScore, computerScore] = [0, 0];

    for(let i = 0; i < 5; i++) {
        let roundResult = playRound();

        switch(roundResult.result) {
            case "Win":
                playerScore++;
                break;
            case "Lose":
                computerScore++;
                break;   
        }

        console.log(`${roundResult.message} Score: ${playerScore} - ${computerScore}`);
    }
}
game();