document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("play-button").addEventListener('click', play);
})

// ======================== hamburger nav bar ====================================
var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".xIcon")
var menuIcon = document.querySelector(".menuIcon")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        xIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        xIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
    function (menuLink) {
        menuLink.addEventListener("click", toggleMenu)
    }
)

// ==================================== game area ====================================

function play() {
    let introText = document.createElement('div');
    introText.innerHTML = `<p>Opponents will get stronger for each round, so watch your health bar. <br>You only need to beat each opponent once to advance to the next level.</p>`
    introText.setAttribute("id", "intro-text");

    let startButton = document.createElement('button');
    startButton.innerHTML = `START`;
    startButton.setAttribute("id", "start-button");
    startButton.setAttribute("data-type", "start");

    let playButton = document.getElementById('play-button');

    playButton.remove();
    document.getElementById('button-area').appendChild(introText);
    document.getElementById('button-area').appendChild(startButton);
    document.getElementById('start-button').addEventListener('click', start);

    let mainIntro = document.getElementById('main-intro');
    mainIntro.innerHTML = ``;
    mainIntro.style.height = "unset";
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
    let dataType = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let buttonPics = ["url(assets/images/rock.webp)", "url(assets/images/paper.webp)", "url(assets/images/scissors.webp)", "url(assets/images/lizard.webp)", "url(assets/images/spock.webp)"];

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("data-type", dataType[i].toLowerCase());
        buttons[i].setAttribute("class", "button");
        buttons[i].style.backgroundImage = `${buttonPics[i]}`;
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
    document.getElementById('player-choice').innerHTML = `<p id="player-value">${playerChoice}</p>`;
    let goArea = document.getElementById("go-button-area");
    let button = document.getElementById("go-button");


    // if (document.getElementById('result-area').innerHTML !== null) {
    //     document.getElementById('result-area').innerHTML = ``;
    // }

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
    document.getElementById('comp-choice').innerHTML = `Computer picked:`;

    let compChoice = document.createElement('div');
    compChoice.style.backgroundImage = `url(assets/images/${compResult.toLowerCase()}.webp)`;
    compChoice.style.height = '110px';
    compChoice.style.width = '110px';
    compChoice.style.backgroundSize = "contain";
    compChoice.style.backgroundRepeat = "no-repeat";
    compChoice.style.margin = "34px auto";
    document.getElementById('comp-choice').appendChild(compChoice);

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
                document.getElementById("health").animate([{
                        color: "black"
                    },
                    {
                        color: 'red'
                    },
                    {
                        color: 'black'
                    }
                ], {
                    duration: 500,
                    iterations: 1
                });
            } else {
                beatOpponent(currentOpponent, playerChoice);
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

    for (let i = 0; i < damage.length; i++) {
        if (currentOpponent === damage[i].value) {
            newScore = health - damage[i].points;
            document.getElementById('health').innerHTML = newScore;
            if (newScore < 20) {
                gameOver();
            }
        }
    }
}

function gameOver() {
    document.getElementById('button-area').innerHTML = ``;
    document.getElementById('game-area').innerHTML = ``;

    let lost = document.createElement('h1');
    lost.innerHTML = `Game Over!`;
    lost.setAttribute("id", "overMessage");
    document.getElementById('button-area').appendChild(lost);

    let lostMessage = document.createElement('p');
    lostMessage.innerHTML = `Looks like the odds were against you. Have another go and see if you can reach the top of the coorporate ladder!`;
    lostMessage.setAttribute("id", "gameover-text");
    document.getElementById('button-area').appendChild(lostMessage);

    let restartButton = document.createElement('button');
    restartButton.innerHTML = `Try Again`;
    restartButton.setAttribute("id", "restart-button");
    document.getElementById('game-area').appendChild(restartButton);
    restartButton.addEventListener('click', restart);


}

function restart() {
    location.reload();
}

function beatOpponent(currentOpponent, playerChoice) {

    let opponents = ["The Intern", "The Salary Man", "The Manager", "The Yakuza Henchman", "The Biggu Bossu"];
    let nextIndex = opponents.indexOf(currentOpponent);

    document.getElementById('player-value').value = "";
    document.getElementById('player-choice').value = "";
    document.getElementById('result-area').innerHTML = `<p>Nicely done, you beat ${currentOpponent}.<br> Gear up for the next oppenent, ${opponents[nextIndex+1]}!<br>Good luck!</p>`;

    let nextButton = document.createElement('button');
    nextButton.innerHTML = `Next Opponent`;
    nextButton.setAttribute("id", "next-button");
    document.getElementById('result-area').appendChild(nextButton);
    nextButton.addEventListener('click', nextOpponent);

    displayWinner();

    if (currentOpponent === "The Biggu Bossu") {
        beatGame();
    }
}

function displayWinner() {
    let numOfButtons = document.getElementsByClassName('button');

    for (let i = numOfButtons.length - 1; i >= 0; i--) {
        numOfButtons[i].remove();
    }
}

function nextOpponent() {
    document.getElementById('next-button').remove();
    document.getElementById('result-area').innerText = "";
    document.getElementById('comp-choice').innerText = "";
    document.getElementById('player-choice').innerText = "";
    document.getElementById('outcome').innerText = "";
    let resultArea = document.getElementById('result-area');
    resultArea.style.background = "none";

    let backgrounds = ["url(assets/images/intern.webp)", "url(assets/images/salaryman.webp)", "url(assets/images/manager.webp)", "url(assets/images/yakuza_henchman.webp)", "url(assets/images/biggu-bossu.webp)"];
    let opponents = ["The Intern", "The Salary Man", "The Manager", "The Yakuza Henchman", "The Biggu Bossu"];
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
    document.getElementById('button-area').innerHTML = ``;
    document.getElementById('game-area').innerHTML = ``;
    document.getElementById('result-area').innerHTML = ``;

    let win = document.createElement('h1');
    win.innerHTML = `Congratulations!`;
    win.setAttribute("id", "win-message");
    document.getElementById('button-area').appendChild(win);

    let winText = document.createElement('h2');
    winText.innerHTML = `You managed to rise through the coorporate ladder to claim your place on top`;
    winText.setAttribute("id", "win-text");
    document.getElementById('game-area').appendChild(winText);

    let winTextTwo = document.createElement('p');
    winTextTwo.innerHTML = `Try again and see if you can get a clean run!`;
    winTextTwo.setAttribute("id", "win-text-two");
    document.getElementById('game-area').appendChild(winTextTwo);

    let restartButton = document.createElement('button');
    restartButton.innerHTML = `Try Again`;
    restartButton.setAttribute("id", "restart-button");
    document.getElementById('game-area').appendChild(restartButton);
    restartButton.addEventListener('click', restart);

    document.body.style.backgroundImage = `url(assets/images/background.webp)`;

    document.getElementById("win-message").animate([{
            background: "blue"
        },
        {
            color: 'white'
        },
        {
            color: 'blue'
        }
    ], {
        duration: 500,
        iterations: Infinity
    });
}