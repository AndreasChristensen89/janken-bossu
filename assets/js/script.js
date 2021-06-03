document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "play" && document.getElementById('chances').textContent!=="0") {
                displayComputerChoice();
            } 
            else if(this.getAttribute("data-type") === "start") {
                restart();
            }
            else {
                let playerChoice = this.getAttribute("data-type");
                runGame(playerChoice);
            }
            })
    }
})

function restart() {
    document.getElementById('chances').textContent = "5";
    document.getElementById('opponent').textContent = "Daiki";
}

/**
 * When one of the buttons are selected, this function will display the player choice on the page
 */
function runGame(playerChoice) {
    document.getElementById('choice').value = "";

    if(playerChoice === "rock") {
        document.getElementById('choice').textContent = "Rock";
    } else if(playerChoice === "paper") {
        document.getElementById('choice').textContent = "Paper";
    } else if(playerChoice === "scissors") {
        document.getElementById('choice').textContent = "Scissors";
    } else if(playerChoice === "lizard") {
        document.getElementById('choice').textContent = "Lizard";
    } else if(playerChoice === "spock") {
        document.getElementById('choice').textContent = "Spock";;
    } else {
        alert(`Unknown game type: ${playerChoice}`);
        throw `Unknown game type: ${playerChoice}. Aborting!`;
    }
}

function calculatesWinner() {
    let player = document.getElementById('choice').textContent;
    let computer = document.getElementById('computerChoice').textContent;

    let rock = ["Spock", "Paper"];
    let paper = ["Scissors", "Lizard"];
    let scissors = ["Rock", "Spock"];
    let lizard = ["Scissors", "Rock"];
    let spock = ["Paper", "Lizard"];

    if(player===undefined) {
        alert(`Please select a hand`);
        throw `Hand not picked: ${playerChoice}. Aborting!`;
    }
    else if (player===computer) {
        document.getElementById('outcome').textContent = "Draw! No winner!";
    } 
    else if ( player==="Rock" && (computer===rock[0] || computer===rock[1]) ) {
        document.getElementById('outcome').textContent = `${computer} beats ${player} - You lose!`;
    } 
    else if( player==="Paper" && (computer===paper[0] || computer===paper[1]) ) {
        document.getElementById('outcome').textContent = `${computer} beats ${player} - You lose!`;
    } 
    else if( player==="Scissors" && (computer===scissors[0] || computer===scissors[1]) ) {
        document.getElementById('outcome').textContent = `${computer} beats ${player} - You lose!`;
    } 
    else if( player==="Lizard" && (computer===lizard[0] || computer===lizard[1]) ) {
        document.getElementById('outcome').textContent = `${computer} beats ${player} - You lose!`;
    } 
    else if( player==="Spock" && (computer===spock[0] || computer===spock[1]) ) {
        document.getElementById('outcome').textContent = `${computer} beats ${player} - You lose!`;
    } 
    else {
        document.getElementById('outcome').textContent = `${player} beats ${computer} - You win!`;
        nextOpponent();
    }

    if(document.getElementById('outcome').textContent === `${computer} beats ${player} - You lose!`) {
        decreaseChances();
    }

}

function displayComputerChoice() {
    let computerChoices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let randomNumber = Math.floor(Math.random() * 5);
    let result = computerChoices[randomNumber];
    document.getElementById('computerChoice').textContent = result;
    calculatesWinner();
}

function nextOpponent() {
    let opponents = ["Daiki", "Salary Man", "The Manager", "Yakuza Henchman", "Biggu Bossu"];
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

function decreaseChances() {
    let oldScore = parseInt(document.getElementById('chances').innerText);
    document.getElementById('chances').innerText = --oldScore;
    if(oldScore===0) {
        gameOver();
    }
}

function gameOver() {
    document.getElementById('outcome').innerText = "Game over! Press the Start / Restart button to try again"
}

