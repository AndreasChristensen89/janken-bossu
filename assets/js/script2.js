document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("play-button").addEventListener('click', play);
})

function play() {
    let introText = document.createElement('div');
    introText.innerHTML = `<p>For each opponent you will have a limited numbers of attempts. <br>You only need to beat the opponent once to advance to the next level.</p>`
    introText.setAttribute("id", "intro-text");

    let startButton = document.createElement('button');
    startButton.innerHTML = `Start`;
    startButton.setAttribute("id", "start-button");
    startButton.setAttribute("data-type", "start");

    let playButton = document.getElementById('play-button');

    playButton.remove();
    document.getElementById('button-area').appendChild(introText);
    document.getElementById('button-area').appendChild(startButton);
    document.getElementById('start-button').addEventListener('click', start);
}

function start() {
    document.body.style.backgroundImage = "url(assets/images/intern.webp)";
    document.getElementById('main-intro').remove();
    document.getElementById('intro-text').remove();

    let newSpan = document.createElement('span');
    newSpan.innerHTML = `The Intern`;
    newSpan.setAttribute("id", "opponent");

    let newSpanTwo = document.createElement('span');
    newSpanTwo.innerHTML = `100`;
    newSpanTwo.setAttribute("id", "health");

    document.getElementById('button-area').appendChild(newSpan);
    document.getElementById('button-area').appendChild(newSpanTwo);

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


    if (document.getElementById('result-area').innerHTML !== null) {
        document.getElementById('result-area').innerHTML = ``;
    }

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

    let failEvents = [{
            "value": "Rock",
            "failOne": "Spock",
            "failTwo": "Paper"
        },
        {
            "value": "Paper",
            "failOne": "Scissors",
            "failTwo": "Lizard"
        },
        {
            "value": "Scissors",
            "failOne": "Rock",
            "failTwo": "Spock"
        },
        {
            "value": "Lizard",
            "failOne": "Scissors",
            "failTwo": "Rock"
        },
        {
            "value": "Spock",
            "failOne": "Paper",
            "failTwo": "Lizard"
        },
    ];

    for (let i = 0; i < failEvents.length; i++) {
        if (playerChoice === compResult) {
            document.getElementById('outcome').textContent = "Draw! No winner! Try again";
        } else if (playerChoice === failEvents[i].value) {
            let currentOpponent = document.getElementById('opponent').innerText;
            if (compResult === failEvents[i].failOne || compResult === failEvents[i].failTwo) {
                document.getElementById('outcome').textContent = `${compResult} beats ${playerChoice} - You lose! Try again!`;
                decreaseScore(currentOpponent);
            } else {
                beatOpponent(currentOpponent);
            }
        }
    }
}

function decreaseScore(currentOpponent) {
        let damage = [{
            "value": "The Intern",
            "points": 20
        },
        {
            "value": "The Salary Man",
            "points": 25
        },
        {
            "value": "The Manager",
            "points": 33
        },
        {
            "value": "The Yakuza Henchman",
            "points": 50
        },
        {
            "value": "The Biggu Bossu",
            "points": 100
        }
    ];
    
    
    let health = parseInt(document.getElementById('health').innerText);

        for(let i = 0; i < damage.length; i++) {
            if(currentOpponent === damage[i].value) {
                newScore = health-damage[i].points;
                document.getElementById('health').innerHTML = newScore;
                if (newScore < 20) {
                    gameOver();
                    }    
                }
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

function beatOpponent(currentOpponent) {
    if (currentOpponent === "The Biggu Bossu") {
        beatGame();
    }

    let opponents = ["The Intern", "The Salary Man", "The Manager", "The Yakuza Henchman", "The Biggu Bossu"];
    let nextIndex = opponents.indexOf(currentOpponent);

    document.getElementById('player-value').value = "";
    document.getElementById('player-choice').value = "";
    document.getElementById('result-area').innerHTML = `Nicely done, you beat the ${currentOpponent}.<br> Gear up for the next oppenent, the ${opponents[nextIndex+1]}!<br> You will start with one less attempt. Good luck!<br>`;

    let nextButton = document.createElement('button');
    nextButton.innerHTML = `Next Opponent`;
    nextButton.setAttribute("id", "next-button");
    document.getElementById('result-area').appendChild(nextButton);
    nextButton.addEventListener('click', nextOpponent);

    let numOfButtons = document.getElementsByClassName('button');

    for (let i = 0; i < numOfButtons.length; i++) {
        numOfButtons[i].disabled = true;
    }
}

function nextOpponent() {
    document.getElementById('next-button').remove();
    document.getElementById('result-area').innerText = "";
    document.getElementById('comp-choice').innerText = "";
    document.getElementById('player-choice').innerText = "";
    document.getElementById('outcome').innerText = "";

    let backgrounds = ["url(assets/images/intern.webp)", "url(assets/images/salaryman.webp)", "url(assets/images/manager.webp)", "url(assets/images/yakuza_henchman.webp)", "url(assets/images/biggu-bossu.webp)"];
    let opponents = ["The Intern", "The Salary Man", "The Manager", "The Yakuza Henchman", "The Biggu Bossu"];
    // let attempts = [5, 4, 3, 2, 1];
    let currentOpponent = document.getElementById('opponent').innerText;

    for (let i = 0; i < opponents.length; i++) {
        if (currentOpponent === opponents[4]) {
            beatGame();
            break;
        } else if (currentOpponent === opponents[i]) {
            document.getElementById('opponent').textContent = opponents[i + 1];
            document.getElementById('health').textContent = 100;
            document.body.style.backgroundImage = backgrounds[i + 1];
        }
    }

    let numOfButtons = document.getElementsByClassName('button');

    for (let i = 0; i < numOfButtons.length; i++) {
        numOfButtons[i].disabled = false;
    }
}

function beatGame() {
    document.write("<h1>Congratulation!</h1>");
    document.write("<h2>You managed to beat the entire bunch!</h2>");
    document.write("<h2>Try again and see if you can get a clean run!</h2>");
    document.write("<button id='restart-button'>Restart</button>");
    document.getElementById('restart-button').addEventListener('click', restart);
}