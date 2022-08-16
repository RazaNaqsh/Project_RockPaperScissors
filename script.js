//Function to make computer play

function getComputerChoice(){
    let weapons = ["Rock", "Paper", "Scissors"]
    return weapons[Math.floor(Math.random() * weapons.length)]
    }
console.log(getComputerChoice());

const computerSelection = getComputerChoice();
const playerInput = prompt("Choose Your Weapon!");
console.log(playerInput);

//function for correcting case of input
function caseCorrector(input){
    return input[0].toUpperCase()+input.slice(1).toLowerCase()
}

console.log(caseCorrector(playerInput));