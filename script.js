function getComputerChoice () {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "Rock";
    } else if (num === 1) {
        return "Paper";
    } else if (num === 2) {
        return "Scissors";
    }
}



function playRound(playerSelection , computerSelection) {
    
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'scissors' && computerSelection == 'Rock' || playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return "You lost!";
    } else {
        return "You win!";
    }
}

function game(){
    let wins = 0;
    let lose = 0;
    let ties = 0;

    for (let i = 1 ; i < 6 ; i++) {
        if (playRound(playerSelection,computerSelection) === "You win!") {
            wins++
        } else if (playRound(playerSelection,computerSelection) === "You lost!") {
            lose++
        } else if (playRound(playerSelection,computerSelection) === "Tie!") {
            ties++
        }
    }
    if (wins > lose) {
        return "You win!";
    } else if (wins < lose) {
        return "You lost";
    }
}
let playerSelection = "paper";
let computerSelection = getComputerChoice();
game();

