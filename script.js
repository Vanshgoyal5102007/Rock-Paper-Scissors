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

    const result = document.createElement('p');

    if (computerChoice == humanChoice){
        result.textContent = "It's a tie!";
    }
    else if((computerChoice == 'rock' && humanChoice == 'paper') || 
            (computerChoice == 'paper' && humanChoice == 'scissors') || 
            (computerChoice == 'scissors' && humanChoice == 'rock')){
        humanScore++;
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        }
    else{
        computerScore++;
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
    }

    score.textContent = `Current Score - You: ${humanScore} Computer: ${computerScore}`;
    
    resultDiv.appendChild(result);

}

// function playGame(){

//     const humanSelection1 = getHumanChoice();
//     const computerSelection1 = getComputerChoice();
//     playRound(humanSelection1, computerSelection1);

//     const humanSelection2 = getHumanChoice();
//     const computerSelection2 = getComputerChoice();
//     playRound(humanSelection2, computerSelection2);

//     const humanSelection3 = getHumanChoice();
//     const computerSelection3 = getComputerChoice();
//     playRound(humanSelection3, computerSelection3);

//     const humanSelection4 = getHumanChoice();
//     const computerSelection4 = getComputerChoice();
//     playRound(humanSelection4, computerSelection4);

//     const humanSelection5 = getHumanChoice();
//     const computerSelection5 = getComputerChoice();
//     playRound(humanSelection5, computerSelection5);

//     console.log(`Your score: ${humanScore} | Computer's Score: ${computerScore}`);
// }

// playGame();

const rock = document.createElement('button');
rock.textContent = 'Rock';
const paper = document.createElement('button');
paper.textContent = 'Paper';
const scissors = document.createElement('button');
scissors.textContent = 'Scissors';

const body = document.querySelector('body');

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

const resultDiv = document.createElement('div');

rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));

const winner = document.createElement('p');
const score = document.createElement('p');

body.appendChild(resultDiv);

body.appendChild(score);