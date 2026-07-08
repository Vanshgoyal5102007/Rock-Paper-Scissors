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

const scoreDisplay = document.createElement("p");
scoreDisplay.classList.add("score-display");
const resultDiv = document.createElement("div");

function playRound(humanChoice, computerChoice){
    if(gameState === "off") return;
    
    const result = document.createElement("p");
    
    if (computerChoice == humanChoice){
        result.textContent = "It's a tie!";
    }
    else if((computerChoice == 'rock' && humanChoice == 'paper') || 
            (computerChoice == 'paper' && humanChoice == 'scissors') || 
            (computerChoice == 'scissors' && humanChoice == 'rock')){
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    }
    else{
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
    }

    resultDiv.appendChild(result);
    gameContainer.appendChild(scoreDisplay);
    scoreDisplay.textContent = `Your score: ${humanScore} | Computer's Score: ${computerScore}`;

    if(humanScore == 5){
        gameState = "off";
        const gameEndPoints = document.createTextNode(` - You win by ${humanScore - computerScore} points!`);
        scoreDisplay.appendChild(gameEndPoints);
        scoreDisplay.style.backgroundColor = "rgb(51, 247, 168)";
        scoreDisplay.style.border = "none";
    }
    
    else if(computerScore == 5){
        gameState = "off";
        const gameEndPoints = document.createTextNode(` - You lost by ${computerScore - humanScore} points!`);
        scoreDisplay.appendChild(gameEndPoints);
        scoreDisplay.style.backgroundColor = "rgb(255, 108, 89)";
        scoreDisplay.style.border = "none";
    }
}

let humanScore = 0;
let computerScore = 0;
//Wether game is running or not
let gameState = "on";
//The Game Container
const gameContainer = document.querySelector(".game-container");
const buttonContainer = document.querySelector(".button-container");
//Buttons

function createButton(txtContent, bgColor){
    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = txtContent;
    button.style.backgroundColor = bgColor;
    return button;
}

const rockButton = createButton("Rock", "grey");
const paperButton = createButton("Paper", "white");
const scissorsButton = createButton("Scissors", "orange");

buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);

gameContainer.appendChild(resultDiv);
//Event Listeners for buttons
rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));