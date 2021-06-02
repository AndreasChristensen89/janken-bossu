document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "play") {
                displayComputerChoice();
            } else {
                let playerChoice = this.getAttribute("data-type");
                runGame(playerChoice);
            }
            })
    }
})

/**
 * When one of the buttons are selected, this function will display the player choice on the page
 */
function runGame(playerChoice) {
    document.getElementById('choice').value = "";

    if(playerChoice === "rock") {
        displayRock();
    } else if(playerChoice === "paper") {
        displayPaper();
    } else if(playerChoice === "scissors") {
        displayScissors();
    } else if(playerChoice === "lizard") {
        displayLizard();
    } else if(playerChoice === "spock") {
        displaySpock();
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function calculateWinner() {
    let player = document.getElementById('choice').textContent;
    let computer = document.getElementById('computerChoice').textContent;
    let result = document.getElementById('outcome').textContent;
    
    if(player===computer) {
        result = "Draw!";
    }
}

function displayRock() {
    document.getElementById('choice').textContent = "Rock";
}
function displayPaper() {
    document.getElementById('choice').textContent = "Paper";
}
function displayScissors() {
    document.getElementById('choice').textContent = "Scissors";
}
function displayLizard() {
    document.getElementById('choice').textContent = "Lizard";
}
function displaySpock() {
    document.getElementById('choice').textContent = "Spock";
}

function displayComputerChoice() {
    let computerChoices = ["Rock", "Paper", "Scissor", "Lizard", "Spock"];
    let randomNumber = Math.floor(Math.random() * 5);
    let result = computerChoices[randomNumber];
    document.getElementById('computerChoice').textContent = result;
    calculateWinner(result);
}

