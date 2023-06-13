const WIN = "win";
const LOSE = "lose";
const DRAW = "draw";
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const buttons = document.querySelectorAll("button");
const resultsDiv = document.querySelector(".results");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let playerChoice = btn.classList.value;

        playRound(playerChoice);
    });
})

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

// Play a single round, comparing the choices to determine the round winner;
function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    let result;

    switch(playerChoice.toLowerCase()) {
        case ROCK:
            if(computerChoice === ROCK) {
                result = {message: "It`s a Draw", result: DRAW};
            } else if(computerChoice === PAPER) {
                result = {message: "You Lose! Paper beats Rock", result: LOSE};
            } else {
                result = {message: "You Win! Rock beats Scissors", result: WIN};
            }
            break;
        case PAPER:
            if(computerChoice === ROCK) {
                result = {message: "You Win! Paper beats Rock", result: WIN};
            } else if(computerChoice === PAPER) {
                result = {message: "It`s a Draw", result: DRAW};
            } else {
                result = {message: "You Lose! Rock beats Paper", result: LOSE};
            }
            break;
        case SCISSORS:
            if(computerChoice === ROCK) {
                result = {message: "You Lose! Rock beats Scissors", result: LOSE};
            } else if(computerChoice === PAPER) {
                result = {message: "You Win! Scissors beats Paper", result: WIN};
            } else {
                result = {message: "It`s a Draw", result: DRAW};
            }
            break;
    }

    displayRoundResult(result.message);
    updateScore(result.result);
}

// Writes the result of the round in the browser;
function displayRoundResult(message) {
    let newPara = document.createElement("p");
    newPara.textContent = message;

    resultsDiv.appendChild(newPara);
}

let playerScore = 0;
let computerScore = 0;
let maxScore = 5;

// Updates the score shown in the browser;
function updateScore(result) {
    const playerSpam = document.querySelector(".playerScore");
    const computerSpam = document.querySelector(".computerScore");
    
    switch(result) {
        case WIN:
            playerSpam.textContent = `Player: ${++playerScore}`;
            break;
        case LOSE:
            computerSpam.textContent = `Computer: ${++computerScore}`;
            break;   
    }

    checkForWinner();
}

function checkForWinner() {
    if(playerScore >= maxScore) {
        const winnerPara = document.createElement("p");
        winnerPara.textContent = "Player wins!";
        winnerPara.style.cssText = "color: green;";
        
        resultsDiv.appendChild(winnerPara);
        disableButtons();
    } else if(computerScore >= maxScore) {
        const winnerPara = document.createElement("p");
        winnerPara.textContent = "Computer wins!";
        winnerPara.style.cssText = "color: red;";
        
        resultsDiv.appendChild(winnerPara);        
        disableButtons();
    }
}

function disableButtons() {
    buttons.forEach(btn => {
        btn.disabled = true;
    })
}