function playRound(playerSelection , computerSelection) {

    if ((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper")){
        console.log(3); //wins
    } else if ((playerSelection == "paper" && computerSelection == "paper") || (playerSelection == "rock" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "scissors")){
        console.log(2); //ties
    } else {
        console.log(1); //lost
    }
    
}

console.log(playRound("scissors","rock"))
