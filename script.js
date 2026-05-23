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