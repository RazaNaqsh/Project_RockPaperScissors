
//input from comp
function getComputerChoice(){
    let weapons = ["Rock", "Paper", "Scissors"]
    return weapons[Math.floor(Math.random() * weapons.length)]
    }


//arguments to be called by playRound function 
let playerSelection = '';
let computerSelection = '';


//function to play one round of game
function playRound() {
    
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



//set default scores
let computerScore = 0;
let playerScore=0;


//game function
function game(){
    

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
        document.querySelector('.play').textContent = "Player chooses: "+playerSelection + "    |       Comp chooses: "+computerSelection ;
        document.querySelector('.event').textContent =  playRound(playerSelection,computerSelection);
        
        
        //displaying score in page
        scorePlayer.textContent = 'PlayerScore:   '+playerScore;
        scoreComputer.textContent = 'ComputerScore:    '+computerScore;

    if (playerScore == 5)
    {
        scorePlayer.textContent = 'PlayerScore:     '+playerScore;
        result.style.display = "Block";
        result.textContent="Ahoyy! You WIN the GAME";
        document.querySelector("#rock").disabled = true;
        document.querySelector("#paper").disabled = true;
        document.querySelector("#scissors").disabled = true;
        rButton.style.display = "block";
        rButton.addEventListener('click', ()=>{
           restart();
        })
        
    }
    else if (computerScore==5)
    {
        scoreComputer.textContent = 'ComputerScore:     '+computerScore;
        result.textContent="You LOSE! Computer won the GAME.";
        result.style.display = "Block";
        document.querySelector("#rock").disabled = true;
        document.querySelector("#paper").disabled = true;
        document.querySelector("#scissors").disabled = true;
        rButton.style.display = "block";
        rButton.addEventListener('click', ()=>{
            restart();
        })
    }
    
}


//restart button
function restart(){
    playerScore=0;
    computerScore=0;
    document.querySelector('.play').textContent = "Choose Your Weapon!"
document.querySelector('.event').textContent = "First to Score 5 wins.";

    scorePlayer.textContent = 'PlayerScore:     '+playerScore;
    scoreComputer.textContent = 'ComputerScore:     '+computerScore;
    rButton.style.display = "none";
    result.style.display = "none";
    document.querySelector("#rock").disabled = false;
        document.querySelector("#paper").disabled = false;
        document.querySelector("#scissors").disabled = false;

}



// selectors

const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click' , ()=>{
    playerSelection = "Rock";
    computerSelection =getComputerChoice();
    game();
})

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () =>{
    playerSelection = "Paper";
    computerSelection =getComputerChoice();
    game();
})

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', ()=>{
    playerSelection="Scissors"
    computerSelection =getComputerChoice();
    game();
})


const scorePlayer = document.querySelector('.scorePlayer');
const scoreComputer = document.querySelector('.scoreComputer');
scorePlayer.textContent = 'PlayerScore:     '+ "❔";
scoreComputer.textContent = 'ComputerScore:     '+"❔";

document.querySelector('.play').textContent = "Choose Your Weapon!"
document.querySelector('.event').textContent = "First to Score 5 wins.";

const rButton = document.querySelector('#restartBtn')
rButton.style.display = "none";

const result =document.querySelector('.result');
