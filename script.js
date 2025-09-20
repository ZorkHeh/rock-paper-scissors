function getComputerChoice(){
    
    return Math.floor(Math.random() * 3);
};

function getPlayerChoice(){
    return Number(prompt('1: Rock\n2: Paper\n3: Scissors')) - 1;
};



let playerScore = 0;
let computerScore = 0;

while(playerScore < 3 && computerScore < 3){
    let playerChoice = getPlayerChoice();
    let ComputerChoice = getComputerChoice();

    if (playerChoice < 0 || playerChoice > 2){
        console.log('Error the number is wrong');
        break;
    }
    if (playerChoice === ComputerChoice){
        continue;
    }
    switch (playerChoice){
        case 0:
            if(ComputerChoice == 2){
                playerScore += 1;
            }
            else{
                computerScore += 1;
            }
            break;
        case 1:
            if(ComputerChoice == 0){
                playerScore += 1;
            }
            else{
                computerScore += 1;
            }
            break;
        case 2:
            if(ComputerChoice == 1){
                playerScore += 1;
            }
            else{
                computerScore += 1;
            }
            break;
    }

    console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
}


