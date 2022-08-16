

//function for correcting case of input
function caseCorrector(input){
    return input[0].toUpperCase()+input.slice(1).toLowerCase()
}

//Function to make computer play

function getComputerChoice(){
    let weapons = ["Rock", "Paper", "Scissors"]
    return weapons[Math.floor(Math.random() * weapons.length)]
    }



const computerSelection = getComputerChoice();
const playerInput = prompt("Choose Your Weapon!");
const playerSelection = caseCorrector(playerInput);
console.log('player choses:',playerInput);


console.log('case correction:',playerSelection);
console.log("computer choses:",getComputerChoice());

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