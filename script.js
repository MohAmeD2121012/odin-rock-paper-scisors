/*
This is My first attempt to code the infamous game : rock paper scissors.
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
 
function getHumanChoice(){
    let userChoice = prompt("choose rock, paper or scissors:");
    userChoice = userChoice.toLowerCase().trim()
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
        return userChoice;
    }
    return userChoice;
}



 

function playGame(){
    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {
        if(humanChoice === computerChoice){
            return "It's a tie.";
        }
        if (humanChoice === "rock"){
            if(computerChoice === "paper"){
                computerScore++;
                return `You lost! ${computerChoice} beats ${humanChoice}.`;
            }else if(computerChoice === "scissors"){
                humanScore++;
                return `You win! ${humanChoice} beats ${computerChoice
                }.`;
            }
        
        }
        if (humanChoice === "paper"){
            if (computerChoice === "rock"){
                humanScore++;
                return `You Win!, ${humanChoice}beats ${computerChoice}.`;
            }else if(computerChoice === "scissors"){
                computerScore++
                return `You Lost! ${computerChoice} beats ${humanChoice}.`
            }
        }
        if (humanChoice === "scissors"){
            if (computerChoice === "rock"){
                computerScore++;
                return `You Lost! ${computerChoice} beats ${humanChoice}.`;
            }else if(computerChoice === "paper"){
                humanScore++;
                return `You Win!, ${humanChoice}beats ${computerChoice}.`;
            }
        }
    }


    let human, comp, result ;
    //Round 1
    human = getHumanChoice();
    comp = getComputerChoice(); 
    console.log(`Round 1 , You: ${human} | Computer: ${comp} `);
    result = playRound(human,comp);
    console.log(result);

    //Round 2
    human = getHumanChoice();
    comp = getComputerChoice(); 
    console.log(`Round 2 , You: ${human} | Computer: ${comp} `);
    result = playRound(human,comp);
    console.log(result);

    //Round 3
    human = getHumanChoice();
    comp = getComputerChoice(); 
    console.log(`Round 3 , You: ${human} | Computer: ${comp} `);
    result = playRound(human,comp);
    console.log(result);

    //Round 4
    human = getHumanChoice();
    comp = getComputerChoice(); 
    console.log(`Round 4 , You: ${human} | Computer: ${comp} `);
    result = playRound(human,comp);
    console.log(result);

    //Round 5
    human = getHumanChoice();
    comp = getComputerChoice();
    console.log(`Round 5 , You: ${human} | Computer: ${comp} `);
    result = playRound(human,comp);
    console.log(result);

    //Final result
    console.log(`===== Final Score =====`);
    console.log(`You: ${humanScore} | Computer: ${computerScore}`);
    if (humanScore > computerScore) console.log("You win the game!");
    else if (humanScore < computerScore) console.log("You Lost!");
    else console.log("It's a tie!");

}
// Start the game
playGame();