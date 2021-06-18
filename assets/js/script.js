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
    introText.innerHTML = `<p>To play simply pick a hand and press the GO button.<br> Opponents' hit-power will increase for each round, so watch your health bar. <br>You only need to beat each opponent once to advance to the next level.</p>`
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
    document.getElementById('main-intro').remove();
    document.getElementById('intro-text').remove();

    let newDiv = document.createElement('div');
    newDiv.innerHTML = `The Intern`;
    newDiv.setAttribute("id", "opponent");

    let newDivTwo = document.createElement('div');
    newDivTwo.innerHTML = `100`;
    newDivTwo.setAttribute("id", "health");

    document.getElementById('button-area').appendChild(newDiv);
    document.getElementById('button-area').appendChild(newDivTwo);

    let rock = document.createElement('button');
    let paper = document.createElement('button');
    let scissors = document.createElement('button');
    let lizard = document.createElement('button');
    let spock = document.createElement('button');

    let startButton = document.getElementById('start-button');
    startButton.remove();

    let buttons = [rock, paper, scissors, lizard, spock];
    let dataType = ["rock", "paper", "scissors", "lizard", "spock"];
    let buttonPics = ["url(assets/images/rock.webp)", "url(assets/images/paper.webp)", "url(assets/images/scissors.webp)", "url(assets/images/lizard.webp)", "url(assets/images/spock.webp)"];

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("data-type", dataType[i].toLowerCase());
        buttons[i].setAttribute("class", "button");
        buttons[i].style.backgroundImage = `${buttonPics[i]}`;
        document.getElementById('button-area').appendChild(buttons[i]);
        buttons[i].addEventListener('click', function () {
            let playerChoice = this.getAttribute("data-type");
            choice(playerChoice);
        });
    }

    let OpponentPic = document.createElement('div');
    OpponentPic.setAttribute("id", "opponent-pic");
    let target = document.getElementById('player-choice');
    target.parentNode.insertBefore(OpponentPic, target);

    let HeadRestartButton = document.createElement('button');
    HeadRestartButton.setAttribute("id", "head-restart");
    HeadRestartButton.innerHTML = `<i class="fas fa-sync-alt"></i>`;
    HeadRestartButton.addEventListener('click', restart);
    let targetTwo = document.getElementById('opponent');
    targetTwo.parentNode.insertBefore(HeadRestartButton, targetTwo);
}

function choice(playerChoice) {
    let chosenPic = document.getElementById('player-choice');
    let chosenPicStyles = {
        "background-image": `url(assets/images/${playerChoice}.webp)`,
        "height": "100px",
        "width": "100px",
        "background-size": "contain",
        "background-repeat": "no-repeat"
    };
    Object.assign(chosenPic.style, chosenPicStyles);
    chosenPic.setAttribute("data-type", `${playerChoice}`)
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
    let compResult = computerOptions[randomNumber].toLowerCase();

    document.getElementById('go-button').remove();

    let compChoice = document.createElement('div');
    let compChoiceStyle = {
        "background-image": `url(assets/images/${compResult}.webp)`,
        "height": "100px",
        "width": "100px",
        "background-size": "contain",
        "background-repeat": "no-repeat",
    };
    Object.assign(compChoice.style, compChoiceStyle);
    compChoice.setAttribute("id", "comp-lose");
    document.getElementById('comp-choice').appendChild(compChoice);

    calculateWinner(compResult);
}

function calculateWinner(compResult) {
    let playerChoice = document.getElementById('player-choice').getAttribute("data-type");
    let failEvents = [{
            "value": "rock",
            "failOne": "spock",
            "failTwo": "paper"
        },
        {
            "value": "paper",
            "failOne": "scissors",
            "failTwo": "lizard"
        },
        {
            "value": "scissors",
            "failOne": "rock",
            "failTwo": "spock"
        },
        {
            "value": "lizard",
            "failOne": "scissors",
            "failTwo": "rock"
        },
        {
            "value": "spock",
            "failOne": "paper",
            "failTwo": "lizard"
        },
    ];

    for (let i = 0; i < failEvents.length; i++) {
        if (playerChoice === compResult) {
            document.getElementById('outcome').textContent = "Draw! Try again";
            document.getElementById('player-choice').animate([{
                    transform: 'translateY(0px)'
                },
                {
                    transform: 'translateY(25px)'
                },
                {
                    transform: 'translateY(0px)'
                }
            ], {
                duration: 500,
                iterations: 3
            });
            document.getElementById('comp-lose').animate([{
                    transform: 'translateY(0px)'
                },
                {
                    transform: 'translateY(-25px)'
                },
                {
                    transform: 'translateY(0px)'
                }
            ], {
                duration: 500,
                iterations: 3
            });
            let buttons = document.querySelectorAll('.button');
            for (let i = 0; i < buttons.length; i++) {
                let button = buttons[i];

                button.animate([{
                        transform: 'scale(1.0)'
                    },
                    {
                        transform: 'scale(1.2)'
                    },
                    {
                        transform: 'scale(1.0)'
                    }
                ], {
                    delay: 1500,
                    duration: 1000,
                    iterations: 3
                });
            }
        } else if (playerChoice === failEvents[i].value) {
            let currentOpponent = document.getElementById('opponent').innerText;
            if (compResult === failEvents[i].failOne || compResult === failEvents[i].failTwo) {
                let tryAgain = [
                    "Don't worry, you're not dead yet. Try again",
                    "Ouch! Have another go",
                    "It's not over yet! Pick another hand and try again.",
                    "Looks like he got lucky. Try again",
                    "You'll get him in the next try. Go go go!",
                    "Your HP is dropping. Nothing to worry about. Try again!",
                    "A tiny bit of HP drop is nothing to worry about. Try again!"
                ];
                let randomNum = Math.floor(Math.random() * 5);
                let loseMessage = document.createElement('p');
                loseMessage.innerText = `${tryAgain[randomNum]}`;
                loseMessage.setAttribute("id", "lose-message");
                let target = document.getElementById('comp-lose');
                target.parentNode.insertBefore(loseMessage, target);
                decreaseScore(currentOpponent);

                if (document.getElementById('health') !== null) {
                    let compHand = document.getElementById('comp-lose');
                    compHand.animate([{
                            transform: 'translateY(-100px)'

                        },
                        {
                            transform: 'scale(5.0)'

                        },
                        {
                            transform: 'scale(1.0)'

                        },
                        {
                            transform: 'translateY(0px)'
                        },

                    ], {
                        duration: 1500,
                        iterations: 1
                    });

                    var buttons = document.querySelectorAll('.button');

                    for (let i = 0; i < buttons.length; i++) {
                        let button = buttons[i];

                        button.animate([{
                                transform: 'scale(1.0)'
                            },
                            {
                                transform: 'scale(1.2)'
                            },
                            {
                                transform: 'scale(1.0)'
                            }
                        ], {
                            delay: 2500,
                            duration: 1000,
                            iterations: 3
                        });
                    }

                    document.getElementById("health").animate([{
                            backgroundColor: 'black'
                        },
                        {
                            backgroundColor: 'red'
                        },
                        {
                            backgroundColor: 'black'
                        }
                    ], {

                        duration: 500,
                        iterations: 3
                    });
                }

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
            if (newScore < 75 && newScore >= 50) {
                document.getElementById('health').style.backgroundColor = "#ea8426"; // #ea8426 orange
            } else if (newScore < 50 && newScore >= 25) {
                document.getElementById('health').style.backgroundColor = "#c7be33"; // #c7be33 yellow
            } else if (newScore < 25 && newScore >= 20) {
                document.getElementById('health').style.backgroundColor = "#d01414"; // #d01414 red
            } else if (newScore < 20) {
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
    lost.setAttribute("id", "over-message");
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

    let styleComp = {
        "float": "left",
        "width": "30%",
        "margin": "0",
        "padding": "0",
        "position": "unset"
    };
    let compChoice = document.getElementById('comp-lose');
    Object.assign(compChoice.style, styleComp);

    let pickStyle = {
        "background-image": `url(assets/images/${playerChoice.toLowerCase()}.webp)`,
        "height": "70px",
        "background-size": "contain",
        "background-repeat": "no-repeat",
        "float": "left",
    };
    let playerPick = document.createElement('div');
    Object.assign(playerPick.style, pickStyle);
    playerPick.setAttribute("id", "player-pick");
    let target = document.getElementById('comp-lose');
    target.parentNode.insertBefore(playerPick, target);

    let opponents = ["The Intern", "The Salary Man", "The Manager", "The Yakuza Henchman", "The Biggu Bossu"];
    let nextIndex = opponents.indexOf(currentOpponent);

    document.getElementById('player-choice').style.removeProperty("width");
    document.getElementById('player-choice').style.removeProperty("height");
    document.getElementById('result-area').innerHTML = `<p>You beat ${currentOpponent}.<br> Gear up for the next opponent,<br> ${opponents[nextIndex+1]}!</p>`;

    let nextButton = document.createElement('button');
    nextButton.innerHTML = `Next Opponent`;
    nextButton.setAttribute("id", "next-button");
    document.getElementById('result-area').appendChild(nextButton);
    nextButton.addEventListener('click', nextOpponent);

    displayWinner();

    if (currentOpponent === "The Biggu Bossu") {
        beatGame();
    } else {
        let compLeave = document.getElementById('opponent-pic');
        compLeave.animate([{
            transform: 'translateY(0px)'

        },
        {
            transform: 'translateY(500px)'

        }

    ], {
        duration: 800,
        iterations: 1,
        fill: "forwards"
    });
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
    document.getElementById('outcome').innerText = "";

    let backgrounds = ["url(assets/images/intern-div.webp)", "url(assets/images/salaryman-div.webp)", "url(assets/images/manager-div.webp)", "url(assets/images/yakuza-div.webp)", "url(assets/images/biggu-bossu-div.webp)"];
    let opponents = ["The Intern", "The Salary Man", "The Manager", "The Yakuza Henchman", "The Biggu Bossu"];
    let currentOpponent = document.getElementById('opponent').innerText;

    if (currentOpponent === opponents[3]) {
        document.getElementById('opponent-pic').setAttribute("id", "biggu-bossu");
        document.getElementById('biggu-bossu').style.backgroundImage = backgrounds[4];
        document.getElementById('opponent').textContent = opponents[4];
        document.getElementById('health').textContent = 100;
    }

    for (let i = 0; i < 3; i++) {
        if (currentOpponent === opponents[4]) {
            beatGame();
            break;
        } else if (currentOpponent === opponents[i]) {
            document.getElementById('opponent').textContent = opponents[i + 1];
            document.getElementById('health').textContent = 100;
            document.getElementById('opponent-pic').style.backgroundImage = backgrounds[i + 1];
        }
    }

    let rock = document.createElement('button');
    let paper = document.createElement('button');
    let scissors = document.createElement('button');
    let lizard = document.createElement('button');
    let spock = document.createElement('button');

    let buttons = [rock, paper, scissors, lizard, spock];
    let dataType = ["rock", "paper", "scissors", "lizard", "spock"];
    let buttonPics = ["url(assets/images/rock.webp)", "url(assets/images/paper.webp)", "url(assets/images/scissors.webp)", "url(assets/images/lizard.webp)", "url(assets/images/spock.webp)"];

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("data-type", dataType[i]);
        buttons[i].setAttribute("class", "button");
        buttons[i].style.backgroundImage = `${buttonPics[i]}`;
        document.getElementById('button-area').appendChild(buttons[i]);
        buttons[i].addEventListener('click', function () {
            let playerChoice = this.getAttribute("data-type");
            choice(playerChoice);
        });
    }
    document.getElementById('health').style.backgroundColor = "#079607";

    let compCome;
    if(document.getElementById('opponent-pic') != null) {
        compCome = document.getElementById('opponent-pic');
    } else {
        compCome = document.getElementById('biggu-bossu');
    }
    compCome.animate([{
            transform: 'translateY(500px)'

        },
        {
            transform: 'translateY(0px)'

        }

    ], {
        duration: 800,
        iterations: 1,
        fill: "forwards"
    });
}

function beatGame() {
    document.getElementById('button-area').innerHTML = ``;
    document.getElementById('game-area').innerHTML = ``;
    document.getElementById('result-area').innerHTML = ``;

    let win = document.createElement('h1');
    win.innerHTML = `You Win!`;
    win.setAttribute("id", "win-message");
    document.getElementById('button-area').appendChild(win);

    let winText = document.createElement('h2');
    winText.innerHTML = `You managed to rise through the coorporate ladder to claim your place on top`;
    winText.setAttribute("id", "win-text");
    document.getElementById('game-area').appendChild(winText);

    // let winTextTwo = document.createElement('p');
    // winTextTwo.innerHTML = `Try again and see if you can get a clean run!`;
    // winTextTwo.setAttribute("id", "win-text-two");
    // document.getElementById('game-area').appendChild(winTextTwo);

    let restartButton = document.createElement('button');
    restartButton.innerHTML = `Try Again`;
    restartButton.setAttribute("id", "restart-button");
    document.getElementById('game-area').appendChild(restartButton);
    restartButton.addEventListener('click', restart);

    document.body.style.backgroundImage = `url(assets/images/background.webp)`;

    document.getElementById("win-message").animate([{
            transform: "scale(1.0)"
        },
        {
            transform: "scale(1.2)"
        }
    ], {
        duration: 800,
        iterations: Infinity,
        direction: "alternate-reverse"
    });
}