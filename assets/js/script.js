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

var dataType = ["rock", "paper", "scissors", "lizard", "spock"];
var buttonPics = ["url(assets/images/rock.webp)", "url(assets/images/paper.webp)", "url(assets/images/scissors.webp)", "url(assets/images/lizard.webp)", "url(assets/images/spock.webp)"];
var opponents = ["The Intern", "The Salary Man", "The Manager", "The Yakuza Henchman", "The Biggu Bossu"];
var backgrounds = ["url(assets/images/intern-div.webp)", "url(assets/images/salaryman-div.webp)", "url(assets/images/manager-div.webp)", "url(assets/images/yakuza-div.webp)", "url(assets/images/biggu-bossu-div.webp)"];
/**
 * Used to shorten down the code when creating elements.
 * Takes four parameters; type of element, id name, the id of element to appendChild, and innerHTML
 */
function createElement(type, id, append, html) {
    let newElement = document.createElement(`${type}`);
    newElement.setAttribute("id", `${id}`);
    document.getElementById(`${append}`).appendChild(newElement);
    newElement.innerHTML = `${html}`;
}

/**
 * Creates and inserts the five hand-buttons for playing
 * No parameters needed
 */
function addButtons() {
    let rock = document.createElement('button');
    let paper = document.createElement('button');
    let scissors = document.createElement('button');
    let lizard = document.createElement('button');
    let spock = document.createElement('button');

    let buttons = [rock, paper, scissors, lizard, spock];

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
}

function removeButtons() {
    let numOfButtons = document.getElementsByClassName('button');

    for (let i = numOfButtons.length - 1; i >= 0; i--) {
        numOfButtons[i].remove();
    }

}

function play() {
    createElement("div", "intro-text", "button-area", "<p>To play simply pick a hand and press the GO button.<br> Opponents' hit-power will increase for each round, so watch your health bar. <br>You only need to beat each opponent once to advance to the next level.</p>")

    createElement("button", "start-button", "button-area", "START");
    document.getElementById("start-button").setAttribute("data-type", "start");
    document.getElementById('start-button').addEventListener('click', start);

    let playButton = document.getElementById('play-button');
    playButton.remove();

    let mainIntro = document.getElementById('main-intro');
    mainIntro.innerHTML = ``;
    mainIntro.style.height = "unset";
}

function start() {
    document.getElementById('start-button').remove();
    document.getElementById('main-intro').remove();
    document.getElementById('intro-text').remove();

    createElement("div", "opponent", "button-area", "The Intern");

    createElement("div", "health", "button-area", "100");

    addButtons();

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
        "background-size": "contain",
        "background-repeat": "no-repeat",
    };
    Object.assign(chosenPic.style, chosenPicStyles);
    chosenPic.setAttribute("data-type", `${playerChoice}`)
    let goArea = document.getElementById("go-button-area");
    let button = document.getElementById("go-button");

    document.getElementById('comp-choice').textContent = "";
    document.getElementById('outcome').textContent = "";

    if (!goArea.contains(button)) {
        createElement("button", "go-button", "go-button-area", "Go");
        document.getElementById("go-button").addEventListener('click', generateComputerChoice);
    }
}

function generateComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 5);
    let compResult = dataType[randomNumber];

    document.getElementById('go-button').remove();

    createElement("div", "comp-hand", "comp-choice", "");
    let compChoice = document.getElementById('comp-hand');
    let compChoiceStyle = {
        "background-image": `url(assets/images/${compResult}.webp)`,
        "background-size": "contain",
        "background-repeat": "no-repeat",
    };
    Object.assign(compChoice.style, compChoiceStyle);

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
                iterations: 2
            });
            document.getElementById('comp-hand').animate([{
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
                iterations: 2
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
                    iterations: 2
                });
            }
        } else if (playerChoice === failEvents[i].value) {
            let currentOpponent = document.getElementById('opponent').innerText;
            if (compResult === failEvents[i].failOne || compResult === failEvents[i].failTwo) {
                let tryAgain = [
                    "Your luck didn't cut it. Try again",
                    "Ouch! Have another go",
                    "It's not over yet! Try again.",
                    "Looks like he got lucky. Try again",
                    "You'll get him in the next try!",
                    "Nothing to worry about. Have another go!",
                    "Nothing but a scratch. Try again!"
                ];
                let randomNum = Math.floor(Math.random() * 5);
                let loseMessage = document.createElement('p');
                loseMessage.innerText = `${tryAgain[randomNum]}`;
                loseMessage.setAttribute("id", "lose-message");
                let target = document.getElementById('comp-hand');
                target.parentNode.insertBefore(loseMessage, target);
                decreaseScore(currentOpponent);

                if (document.getElementById('health') !== null) {
                    let compHand = document.getElementById('comp-hand');
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
                            iterations: 2
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

    createElement("h1", "over-message", "button-area", "Game Over!");

    createElement("p", "gameover-text", "button-area", "Looks like the odds were against you. Have another go and see if you can reach the top of the coorporate ladder!");

    createElement("button", "restart-button", "game-area", "Try Again");

    document.getElementById("restart-button").addEventListener('click', restart);
}

function restart() {
    location.reload();
}

function beatOpponent(currentOpponent, playerChoice) {
    document.getElementById('player-choice').style.height = "0";
    document.getElementById('player-choice').style.width = "0";
    document.getElementById('player-choice').style.margin = "0";
    document.getElementById('outcome').style.margin = "0";

    let backgroudImg = document.getElementById('comp-hand').style.backgroundImage;
    document.getElementById('comp-hand').remove()

    let compLose = document.createElement('div');
    compLose.style.backgroundImage = backgroudImg;
    compLose.setAttribute("id", "comp-lose");
    let compStyle = {
        "background-image": `${backgroudImg}`,
        "background-size": "contain",
        "background-repeat": "no-repeat",
    };
    Object.assign(compLose.style, compStyle);


    let playerPick = document.createElement('div');
    playerPick.setAttribute("id", "player-pick");
    let pickStyle = {
        "background-image": `url(assets/images/${playerChoice.toLowerCase()}.webp)`,
        "background-size": "contain",
        "background-repeat": "no-repeat",
    };
    Object.assign(playerPick.style, pickStyle);

    let target = document.getElementById('outcome');
    target.parentNode.insertBefore(playerPick, target);
    target.parentNode.insertBefore(compLose, target);

    let nextIndex = opponents.indexOf(currentOpponent);

    document.getElementById('result-area').innerHTML = `<p>You beat ${currentOpponent}.<br> Gear up for the next opponent,<br> ${opponents[nextIndex+1]}!</p>`;

    createElement("button", "next-button", "result-area", "Next Opponent");
    document.getElementById("next-button").addEventListener('click', nextOpponent);

    removeButtons();

    if (currentOpponent === "The Biggu Bossu") {
        beatGame();
    } else {
        let compLeave = document.getElementById('opponent-pic');
        compLeave.animate([{
                opacity: '1.0'

            },
            {
                opacity: '0.0'

            }

        ], {
            duration: 800,
            iterations: 1,
            fill: "forwards"
        });
    }
}

function nextOpponent() {
    document.getElementById('player-choice').style = ``;
    document.getElementById('outcome').style = ``;
    document.getElementById('player-pick').remove();
    document.getElementById('comp-lose').remove();
    document.getElementById('next-button').remove();
    document.getElementById('result-area').innerText = "";
    document.getElementById('comp-choice').innerText = "";
    document.getElementById('outcome').innerText = "";

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

    addButtons();

    document.getElementById('health').style.backgroundColor = "#079607";

    let compCome;
    if (document.getElementById('opponent-pic') != null) {
        compCome = document.getElementById('opponent-pic');
    } else {
        compCome = document.getElementById('biggu-bossu');
    }
    compCome.animate([{
            opacity: '0.0'

        },
        {
            opacity: '1.0'

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

    createElement("h1", "win-message", "button-area", "You Win!");

    createElement("h2", "win-text", "game-area", "You managed to rise through the coorporate ladder to claim your place on top");

    createElement("button", "restart-button", "game-area", "Try Again!");
    document.getElementById("restart-button").addEventListener('click', restart);

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