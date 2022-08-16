//Input from player
function playerChoice(){
    let playerInput = prompt("enter your choice");
    return playerInput[0].toUpperCase() + playerInput.slice(1).toLowerCase();
}

//input from comp
function getComputerChoice(){
    let weapons = ["Rock", "Paper", "Scissors"]
    return weapons[Math.floor(Math.random() * weapons.length)]
    }

    //assigning actual values
let player=playerChoice();
let comp= getComputerChoice();

//call1

//arguments to be called by playRound function 
let playerSelection = player;
let computerSelection = comp;


//call this function to update for new round
function updateScores(){
    player=playerChoice();
    comp= getComputerChoice();
    playerSelection = player;
    computerSelection = comp;

}


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

//console for pr

//game function
let computerScore = 0;
let playerScore=0;

function game(){
    
    
    while(playerScore !== 5 && computerScore !== 5){
        updateScores();
        console.log("player chooses: "+player + ". Comp chooses: "+comp);
        console.log(playRound(playerSelection,computerSelection));

        playRound(playerSelection,computerSelection);
        if (playRound(playerSelection,computerSelection) === "You win! Rock beats Scissors" || playRound(playerSelection,computerSelection) === "You win! Scissors beats Paper" || playRound(playerSelection,computerSelection) === "You win! Paper beats Rock"){
            playerScore++;
        }
        else if (playRound(playerSelection,computerSelection) === "You lose! Rock beats Scissors" || playRound(playerSelection,computerSelection) === "You lose! Paper beats Rock" || playRound(playerSelection,computerSelection) === "You lose! Scissors beats Paper"){
            computerScore++;
        }
        else {
            playerScore+=0;
            computerScore+=0;

        }
        console.log("Playerscore: "+playerScore +"  & Computerscore: "+computerScore);
    }
    if (playerScore == 5)
    console.log("Player Wins!");
    else if (computerScore == 5);
    console.log("Comp Wins!");
}

game();






