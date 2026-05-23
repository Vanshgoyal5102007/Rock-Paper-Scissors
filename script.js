function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice(){
    const randomNum = getRandomNumber(1,3);
    let choiceComp;
    switch (randomNum){
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors";
    }
}