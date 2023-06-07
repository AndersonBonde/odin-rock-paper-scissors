const WIN = "win";
const LOSE = "lose";
const DRAW = "draw";
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

// Determine the computer choice of rock, paper or scissors;
function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 3));
    let choice;

    switch(randomNum) {
        case 0:
            choice = ROCK;
            break;
        case 1:
            choice = PAPER;
            break;
        case 2:
            choice = SCISSORS;
            break;
    }

    return choice;
}
getComputerChoice();

// Play a single round, comparing the choices to determine the round winner;
function playRound() {
    let playerChoice = prompt("Rock, Paper or Scissors?", "");
    let computerChoice = getComputerChoice();

    switch(playerChoice.toLowerCase()) {
        case ROCK:
            if(computerChoice === ROCK) {
                return {message: "It`s a Draw", result: DRAW};
            } else if(computerChoice === PAPER) {
                return {message: "You Lose! Paper beats Rock", result: LOSE};
            } else {
                return {message: "You Win! Rock beats Scissors", result: WIN};
            }
        case PAPER:
            if(computerChoice === ROCK) {
                return {message: "You Win! Paper beats Rock", result: WIN};
            } else if(computerChoice === PAPER) {
                return {message: "It`s a Draw", result: DRAW};
            } else {
                return {message: "You Lose! Rock beats Paper", result: LOSE};
            }
        case SCISSORS:
            if(computerChoice === ROCK) {
                return {message: "You Lose! Rock beats Scissors", result: LOSE};
            } else if(computerChoice === PAPER) {
                return {message: "You Win! Scissors beats Paper", result: WIN};
            } else {
                return {message: "It`s a Draw", result: DRAW};
            }
    }
}

// Simulate 5 game rounds and keep scores;
function game() {
    let [playerScore, computerScore] = [0, 0];

    for(let i = 0; i < 5; i++) {
        let roundResult = playRound();

        switch(roundResult.result) {
            case WIN:
                playerScore++;
                break;
            case LOSE:
                computerScore++;
                break;   
        }

        console.log(`${roundResult.message} Score: ${playerScore} - ${computerScore}`);
    }
}
game();