const WIN = "win";
const LOSE = "lose";
const DRAW = "draw";
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const buttonCards = document.querySelectorAll(".buttonCard");
const resultsDiv = document.querySelector(".results");
const playerScoreCard = document.querySelector(".playerScoreCard");
const computerScoreCard = document.querySelector(".computerScoreCard");

buttonCards.forEach(curr => {
    curr.addEventListener("click", () => {
        let playerChoice = curr.dataset.value;

        playRound(playerChoice);
    })
})

playerScoreCard.addEventListener("transitionend", () => {
    playerScoreCard.classList.remove("playingGreen");
})

computerScoreCard.addEventListener("transitionend", () => {
    computerScoreCard.classList.remove("playingRed");
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

    displayRoundResult(result.message, playerChoice, computerChoice);
    updateScore(result.result);
}

const rockIcon = '<i class="fa-solid fa-hand-back-fist fa-2xl"></i>';
const paperIcon = '<i class="fa-solid fa-hand fa-2xl"></i>';
const scissorsIcon = '<i class="fa-solid fa-hand-scissors fa-2xl"></i>';

// Writes the result of the round in the browser;
function displayRoundResult(message, playerChoice, computerChoice) {
    let newPara = document.createElement("p");
    newPara.textContent = message;

    let playerIcon = parseChoiceIntoIcon(playerChoice);
    let computerIcon = parseChoiceIntoIcon(computerChoice);
    newPara.innerHTML += ` ${playerIcon} : ${computerIcon}`;
    
    resultsDiv.appendChild(newPara);
}

function parseChoiceIntoIcon(text) {
    let result;
    
    switch(text) {
        case ROCK:
            result = rockIcon;
            break;
        case PAPER:
            result = paperIcon;
            break;
        case SCISSORS:
            result = scissorsIcon;
            break;
    }

    return result;
}

let playerScore = 0;
let computerScore = 0;
let maxScore = 5;

// Updates the score shown in the browser;
const playerScoreSpam = document.querySelector(".playerScore");
const computerScoreSpam = document.querySelector(".computerScore");

function updateScore(result) {    
    switch(result) {
        case WIN:
            playerScoreSpam.textContent = `${++playerScore}`;
            flashPlayerScore();
            break;
        case LOSE:
            computerScoreSpam.textContent = `${++computerScore}`;
            flashComputerScore();
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

function flashPlayerScore() {
    playerScoreCard.classList.add("playingGreen");
}

function flashComputerScore() {
    computerScoreCard.classList.add("playingRed");
}