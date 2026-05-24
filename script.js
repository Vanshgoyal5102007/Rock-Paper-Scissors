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
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }

}

function playGame(){

    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();
    playRound(humanSelection1, computerSelection1);

    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    playRound(humanSelection2, computerSelection2);

    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    playRound(humanSelection3, computerSelection3);

    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    playRound(humanSelection4, computerSelection4);

    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    playRound(humanSelection5, computerSelection5);

    console.log(`Your score: ${humanScore} | Computer's Score: ${computerScore}`);
}

playGame();