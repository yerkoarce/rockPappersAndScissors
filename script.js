function getComputerChoice () {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else if (num === 2) {
        return "scissors";
    }
}



function playRound(playerSelection , computerSelection) {

    let computerSelection = getComputerChoice();

    if ((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper")){
        return 3; //wins
    } else if ((playerSelection == "paper" && computerSelection == "paper") || (playerSelection == "rock" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "scissors")){
        return 2; //ties
    } else {
        return 1; //lost
    }
    
}

function game(){
    let wins = 0;
    let lose = 0;
    let ties = 0;

    for (i = 0 ; i < 5 ; i++){

        
    
        let playerSelection = prompt("Choose your move: ")

        if (playRound(playerSelection,computerSelection) === 2) {
            ties++
        } else if (playRound(playerSelection,computerSelection) === 1) {
            lose++
        } else if (playRound(playerSelection,computerSelection) === 3) {
            wins++
        }
    }

    console.log(wins)
    console.log(lose)
    console.log(ties)
    /*
    if (wins > lose) {
        return "You win!";
    } else if (wins < lose) {
        return "You lost";
    }
    */
}


game();

