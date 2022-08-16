


//Function to make computer play

function getComputerChoice(){
    let weapons = ["Rock", "Paper", "Scissors"]
    return weapons[Math.floor(Math.random() * weapons.length)]
    }





//player input

const playerInput = prompt("Choose Your Weapon!");

console.log('player choses:',playerInput);

//function for correcting case of input
function caseCorrector(input){
    return input[0].toUpperCase()+input.slice(1).toLowerCase()
}


const computerSelection = getComputerChoice();
const playerSelection = caseCorrector(playerInput);



console.log('case correction:',playerSelection);
console.log("computer choses:",computerSelection);

//function to play one round of game

function playRound(playerSelection,computerSelection) {
    
    //player winning scenarios
if (playerSelection==="Rock" && computerSelection==="Scissors")
return "You win! Rock beats Scissors";
else if (playerSelection==="Scissors" && computerSelection==="Paper")
return "You win! Scissors beats Paper";
else if (playerSelection==="Paper" && computerSelection==="Rock")
return "You win! Paper beats Rock"

//Computer winning scenarios

else if (playerSelection==="Scissors" && computerSelection==="Rock")
return "You lose! Rock beats Scissors"
else if (playerSelection==="Rock" && computerSelection==="Paper")
return "You lose! Paper beats Rock"
else if (playerSelection==="Paper" && computerSelection==="Scissors")
return "You lose! Scissors beats Paper"

//tie condition
else if (playerSelection==="Scissors" && computerSelection==="Scissors")
return "Its a Tie!"
else if (playerSelection==="Rock" && computerSelection==="Rock")
return "Its a Tie!"
else if (playerSelection==="Paper" && computerSelection==="Paper")
return "Its a Tie!"
else
return "Wrong input!"


}

console.log(playRound(playerSelection,computerSelection))

//game function
let computerScore = 0;
let playerScore=0;

function game(){
    
    for (let i=0; i<5; i++){
        playRound(playerSelection,computerSelection)
        
        if (playRound(playerSelection,computerSelection) === "You win! Rock beats Scissors" || playRound() === "You win! Scissors beats Paper" || playRound() === "You win! Paper beats Rock"){
            playerScore++;
        }
        else if (playRound(playerSelection,computerSelection) === "You lose! Rock beats Scissors" || playRound() === "You lose! Paper beats Rock" || playRound() === "You lose! Scissors beats Paper"){
            computerScore++;
        }
        else {
            playerScore+=0;
            computerScore+=0;

        }
        playRound();
    }
    return ("Playerscore:" + playerScore+ " ComputerScore:"+ computerScore)
}
console.log(game());