document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("play-button").addEventListener('click', play);
})

function play() {

    let newSpan = document.createElement('p');
    newSpan.innerHTML = `Opponent: <span id="opponent">Daiki</span>`;

    let newSpanTwo = document.createElement('p');
    newSpanTwo.innerHTML = `Attempts: <span id="attempts">5</span>`;

    let startButton = document.createElement('button');
    startButton.innerHTML = `Start`;
    startButton.setAttribute("id", "start-button");
    startButton.setAttribute("data-type", "start");

    let playButton = document.getElementById('play-button');

    playButton.remove();
    document.getElementById('button-area').appendChild(newSpan);
    document.getElementById('button-area').appendChild(newSpanTwo);
    document.getElementById('button-area').appendChild(startButton);

    document.getElementById('start-button').addEventListener('click', start);
}

function start() {
    let rock = document.createElement('button');
    let paper = document.createElement('button');
    let scissors = document.createElement('button');
    let lizard = document.createElement('button');
    let spock = document.createElement('button');

    let startButton = document.getElementById('start-button');

    let buttons = [rock, paper, scissors, lizard, spock];
    let innerHtml = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("data-type", innerHtml[i].toLowerCase());
        buttons[i].setAttribute("class", "button");
        buttons[i].innerHTML = innerHtml[i];
        document.getElementById('button-area').appendChild(buttons[i]);
        buttons[i].addEventListener('click', function () {
            let playerChoice = this.getAttribute("data-type").charAt(0).toUpperCase() + this.getAttribute("data-type").slice(1);
            choice(playerChoice);
        });
    }
    startButton.remove();
}

function choice(playerChoice) {
    document.getElementById('player-choice').value = "";
    document.getElementById('player-choice').innerHTML = `Your choice: <p id="player-value">${playerChoice}</p>`;
    let goArea = document.getElementById("go-button-area");
    let button = document.getElementById("go-button");

    document.getElementById('comp-choice').textContent = "";
    document.getElementById('outcome').textContent = "";

    if (!goArea.contains(button)) {
        let goButton = document.createElement('button');
        goButton.innerHTML = `Go`;
        goButton.setAttribute("id", "go-button");
        document.getElementById('go-button-area').appendChild(goButton);
        goButton.addEventListener('click', generateComputerChoice);
    }
}

function generateComputerChoice() {
    let computerOptions = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let randomNumber = Math.floor(Math.random() * 5);
    let compResult = computerOptions[randomNumber];

    document.getElementById('go-button').remove();
    document.getElementById('comp-choice').value = "";
    document.getElementById('comp-choice').innerHTML = `Computer picked: ${compResult}`;

    calculateWinner(compResult);
}

function calculateWinner(compResult) {
    let playerChoice = document.getElementById('player-value').textContent;

    let rock = ["Spock", "Paper"];
    let paper = ["Scissors", "Lizard"];
    let scissors = ["Rock", "Spock"];
    let lizard = ["Scissors", "Rock"];
    let spock = ["Paper", "Lizard"];

    if (playerChoice === compResult) {
        document.getElementById('outcome').textContent = "Draw! No winner!";
    } else if (playerChoice === "Rock" && (compResult === rock[0] || compResult === rock[1])) {
        document.getElementById('outcome').textContent = `${compResult} beats ${playerChoice} - You lose!`;
    } else if (playerChoice === "Paper" && (compResult === paper[0] || compResult === paper[1])) {
        document.getElementById('outcome').textContent = `${compResult} beats ${playerChoice} - You lose!`;
    } else if (playerChoice === "Scissors" && (compResult === scissors[0] || compResult === scissors[1])) {
        document.getElementById('outcome').textContent = `${compResult} beats ${playerChoice} - You lose!`;
    } else if (playerChoice === "Lizard" && (compResult === lizard[0] || compResult === lizard[1])) {
        document.getElementById('outcome').textContent = `${compResult} beats ${playerChoice} - You lose!`;
    } else if (playerChoice === "Spock" && (compResult === spock[0] || compResult === spock[1])) {
        document.getElementById('outcome').textContent = `${compResult} beats ${playerChoice} - You lose!`;
    } else {
        document.getElementById('outcome').textContent = `${playerChoice} beats ${compResult} - You win!`;
        nextOpponent();
    }

    if (document.getElementById('outcome').textContent === `${compResult} beats ${playerChoice} - You lose!`) {
        decreaseScore();
    }

}

function decreaseScore() {
    let oldScore = parseInt(document.getElementById('attempts').innerText);
    document.getElementById('attempts').innerText = --oldScore;
    if (oldScore === 0) {
        gameOver();
    }
}

function gameOver() {
    document.write("<h1>Game Over!</h1>");
    document.write("<p>Better luck next time.</p>");
    document.write("<button id='restart-button'>Restart</button>");
    document.getElementById('restart-button').addEventListener('click', restart);
}

function restart() {
    location.reload();
}

function nextOpponent() {
    let opponents = ["Daiki", "Salary Man", "The Manager", "Yakuza Henchman", "Biggu Bossu"];
    let attempts = [5, 4, 3, 2, 1];
    // document.getElementById('opponent').innerText = "Daiki";
    let curOpponent = document.getElementById('opponent').innerText;
    console.log(curOpponent);

    for (let i = 0; i < opponents.length; i++) {
        if (curOpponent === opponents[4]) {
            beatGame();
        } else if (curOpponent === opponents[i]) {
            document.getElementById('opponent').textContent = opponents[i + 1];
            document.getElementById('attempts').textContent = attempts[i + 1];
        }
    }
}

function beatGame() {
    document.write("<h1>Congratulation!</h1>");
    document.write("<h2>You managed to beat the entire bunch!</h2>");
    document.write("<h2>Try again and see if you can get a clean run!</h2>");
    document.write("<button id='restart-button'>Restart</button>");
    document.getElementById('restart-button').addEventListener('click', restart);
}