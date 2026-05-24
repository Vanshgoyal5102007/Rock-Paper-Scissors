function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice(){
    const randomNum = getRandomNumber(1,3);
    switch (randomNum){
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors";
    }
}

function getHumanChoice(){
    return prompt(`Enter "Rock", "Paper" or "Scissors"`).toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    if (computerChoice == humanChoice){
        console.log("It's a tie!");
    }
    else if((computerChoice == 'rock' && humanChoice == 'paper') || 
            (computerChoice == 'paper' && humanChoice == 'scissors') || 
            (computerChoice == 'scissors' && humanChoice == 'rock')){
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
    else{
        console.log("Computer wins!");
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }

}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(`Your score: ${humanScore} | Computer's Score: ${computerScore}`);
