const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");
const roundResult = document.querySelector(".round-result");
const roundCounter = document.querySelector(".round-counter");
const winner = document.querySelector(".winner");

let playerCount = 0;
let computerCount = 0;
let tiedRounds = 0;



buttons.forEach((button) => {
    button.addEventListener("click" , () => {
        let buttonId = button.id;
        let computerSelection = getComputerChoice();
        playRound(buttonId , computerSelection);
    })
})

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

    if ((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper")){
        playerCount++;
        roundResult.textContent = `${playerSelection} beats ${computerSelection}. You won the round!`;
        roundCounter.textContent = `You wins:  ${playerCount}    Computer wins: ${computerCount} Tied rounds: ${tiedRounds}`;
        results.appendChild(roundResult);
        results.appendChild(roundCounter);
        
        
        winnerGame(playerCount, computerCount);
        return 3; //round won

    } else if ((playerSelection == "paper" && computerSelection == "paper") || (playerSelection == "rock" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "scissors")){
        tiedRounds++;
        roundResult.textContent = `${playerSelection} against ${computerSelection}. Tied round!`;
        roundCounter.textContent = `You wins:  ${playerCount}    Computer wins: ${computerCount} Tied rounds: ${tiedRounds}`;
        results.appendChild(roundResult);
        results.appendChild(roundCounter);
        
        winnerGame(playerCount, computerCount);
        return 2; //tied round

    } else {
        computerCount++;
        roundResult.textContent = `${computerSelection} beats ${playerSelection}. You lost the round!`;
        roundCounter.textContent = `You wins:  ${playerCount}    Computer wins: ${computerCount} Tied rounds: ${tiedRounds}`;
        results.appendChild(roundResult);
        results.appendChild(roundCounter);
        
        winnerGame(playerCount, computerCount);
        return 1; //round lost
    }
    
}
/*
    function game(){
        let wins = 0;
        let lost = 0;
        let ties = 0;
    
        for (i = 0; i < 5 ; i++){
            let playerSelection = prompt("Choose your move: ");
            let computerSelection = getComputerChoice();

            let playerSelectionLower = playerSelection.toLowerCase()

            if (playRound(playerSelectionLower, computerSelection) == 1) {
                lost++
            } else if (playRound(playerSelectionLower, computerSelection) == 2){
                ties++
            } else if (playRound(playerSelectionLower, computerSelection) == 3) {
                wins++
            }
            console.log("player: ",playerSelectionLower);
            console.log("computer : ",computerSelection);
        }

        console.log("wins: " , wins);
        console.log("lost: " ,lost);
        console.log("ties: " ,ties);
        
        if (wins < lost) {
            console.log( "I won!");
        } else if (wins > lost) {
            console.log( "You Won!");
        } else if (wins == ties) {
            console.log( "We tied. We play again?");
        }

    }


game();
*/
function winnerGame (player, computer) {
    if (player === 5){
        winner.textContent = "You win the game!";
        results.appendChild(winner);
    } else if (computer === 5){
        winner.textContent = "You lose, Computer wins the game."
        results.appendChild(winner);
    }
}




