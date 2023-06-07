// Determine the computer choice of rock, paper or scissors;
function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 3));
    let choice;

    switch(randomNum) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }

    console.log(choice);
    return choice;
}
getComputerChoice();

// Ask for the player`s choice and store it in a variable
// Write logic to determine the winner or if it`s a draw and display it to the player