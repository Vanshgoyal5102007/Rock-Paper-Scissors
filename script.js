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

let gameOver = false;

function playRound(humanChoice, computerChoice){
    if (gameOver) return;

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

    if(humanScore === 5){
        winner.textContent = `You won!`;
        gameOver = true;
    }
    else if(computerScore === 5){
        winner.textContent = `You lost!`;
        gameOver = true;
    }

}

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
body.appendChild(winner);