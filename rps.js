let playerwin = 0;
let computerwin = 0;
function getComputerChoice(){
    let a = Math.floor(Math.random() * 3) + 1;
    let choice;
    if (a===1){
        choice = "rock";
    }
    else if (a===2){
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;
}
function round(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection;
    if ((player === "rock" && computer === "paper")){
        resetMessage();
        computerwin++;
        displayComputerChoice(computer);
        displayLoseRound();
        displayComputer(computerwin);
    }
    else if (player === "rock" && computer === "scissors"){
        resetMessage();
        playerwin++;
        displayComputerChoice(computer);
        displayWinRound();
        displayPlayer(playerwin);
    }
    else if (player === "paper" && computer === "rock"){
        resetMessage();
        playerwin++;
        displayComputerChoice(computer);
        displayWinRound();
        displayPlayer(playerwin);
    }
    else if (player === "paper" && computer === "scissors"){
        resetMessage();
        computerwin++;
        displayComputerChoice(computer);
        displayLoseRound();
        displayComputer(computerwin);
    }
    else if (player === "scissors" && computer === "paper"){
        resetMessage();
        playerwin++;
        displayComputerChoice(computer);
        displayWinRound();
        displayPlayer(playerwin);
    }
    else if (player === "scissors" && computer === "rock"){
        resetMessage();
        computerwin++;
        displayComputerChoice(computer);
        displayLoseRound();
        displayComputer(computerwin);
        
    }
    else {
        resetMessage();
        displayComputerChoice(computer);
        displayTieRound();
    }
    if (playerwin === 5 || computerwin === 5){
        displayMessage();
        playerwin = 0;
        computerwin = 0;
        displayPlayer(0);
        displayComputer(0);
    }

}
function playGame(playerChoice){
        let player = playerChoice;
        let computer = getComputerChoice();
        console.log("Computer chose " + computer)
        let status = round(player, computer);
        console.log(status);
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playGame("rock");
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playGame("paper");
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playGame("scissors");
});

let playerscore = document.querySelector(".playerscore")
let computerscore = document.querySelector(".computerscore")

function displayPlayer(wins) {
    playerscore.innerText = "Player score: " + wins;
}
function displayComputer(wins) {
    computerscore.innerText = "Computer score: " + wins;
}

let result = document.querySelector(".message")
function displayMessage() {
    if (playerwin === 5){
        result.innerText = "YOU WON YESSSIRRRRRR";
    }
    else {
        result.innerText = "You lost to AI written by coding noob gg";
    }
}

let roundMessage = document.querySelector(".round")
function displayWinRound() {
    roundMessage.innerText = "You won the round!"
}
function displayLoseRound() {
    roundMessage.innerText = "You lost the round..."
}
function displayTieRound() {
    roundMessage.innerText = "You tied the computer"
}

let computerChoice = document.querySelector(".computerchoice")
function displayComputerChoice(choice){
    computerChoice.innerText = "Computer chose " + choice;
}

function resetMessage(){
    if (playerwin === 0 && computerwin === 0){
        result.innerText = "";
    }
}