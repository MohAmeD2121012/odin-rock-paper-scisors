/*
Adding a ui to to Rock Paper Scissors.
*/

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    if(randomNum === 0){
        return "rock";
    }else if (randomNum === 1){
        return "paper";
    }else{
        return "scissors";
    } 
}
 

let playerScore = 0;
let computerScore = 0;


function playRound(playerChoice) {
    if (playerScore === 5 || computerScore ===5){
        return;
    }
    let computerChoice = getComputerChoice();
    if(playerChoice === computerChoice){
        
    }
    if (playerChoice === "rock"){
        if(computerChoice === "paper"){
            computerScore++;
           
        }else if(computerChoice === "scissors"){
            playerScore++;
            
        }
    
    }else if (playerChoice === "paper"){
        if (computerChoice === "rock"){
            playerScore++;
            
        }else if(computerChoice === "scissors"){
            computerScore++
            
        }
    }else if (playerChoice === "scissors"){
        if (computerChoice === "rock"){
            computerScore++;
           
        }else if(computerChoice === "paper"){
            playerScore++;
            
        }
    }
    score.textContent = `player: ${playerScore} computer: ${computerScore}`;
    choices.textContent = `player: ${playerChoice} computer: ${computerChoice}`;

    //check if there is a winner
    if (playerScore === 5){
        result.textContent = 'You win!';
    }
    if (computerScore === 5){
        result.textContent = 'You lost!';
    }
}



const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", function(){
    playRound("rock");
});
paper.addEventListener("click", function(){
    playRound("paper");
});
scissors.addEventListener("click", function(){
    playRound("scissors");
});

const result = document.querySelector("#result");
const choice = document.querySelector("#choices")


