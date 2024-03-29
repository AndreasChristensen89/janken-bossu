document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("play-button").addEventListener('click', play);
});

// ==================================== functions to shorten /simplify code ==============================================

/**
 * Creates element with id and inserts it.
 * Takes four parameters; type of element, id name, the id of element to appendChild, and innerHTML
 */
function createElement(type, id, append, html) {
    let newElement = document.createElement(type);
    newElement.setAttribute("id", id);
    document.getElementById(append).appendChild(newElement);
    newElement.innerHTML = html;
}

/**
 * Creates element with id and inserts it before another element.
 * Takes three parameters; type of element, id name, and id of target to insertBefore
 */
function createElementTarget(type, id, target) {
    let newElement = document.createElement(type);
    newElement.setAttribute("id", id);
    let targetInsert = document.getElementById(target);
    targetInsert.parentNode.insertBefore(newElement, targetInsert);
}

/**
 * Creates and inserts the five hand-buttons for playing. Adds background pics to each from buttonPics[i] array.
 * Adds eventlisteners to activate choice(), passes data-type from element as parameter
 */
function addButtons() {
    let rock = document.createElement('button');
    let paper = document.createElement('button');
    let scissors = document.createElement('button');
    let lizard = document.createElement('button');
    let spock = document.createElement('button');

    let buttons = [rock, paper, scissors, lizard, spock];
    let dataType = ["rock", "paper", "scissors", "lizard", "spock"];
    let buttonPics = ["url(assets/images/game-pictures/rock.webp)", "url(assets/images/game-pictures/paper.webp)", "url(assets/images/game-pictures/scissors.webp)", "url(assets/images/game-pictures/lizard.webp)", "url(assets/images/game-pictures/spock.webp)"];

    // Runs throught the buttons from the button-array and sets the datatype, class, and background image.
    // Each button gets a different picture from the buttonPics array and a different dataType from the dataType array
    // Buttons are inserted in the button-area
    // Each button is given an eventlistener that calls a function + calls another function and passes their datatype and aria-label as a parameter
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("data-type", dataType[i]);
        buttons[i].setAttribute("class", "button");
        buttons[i].setAttribute("aria-label", addAriaLabelButton(i));
        buttons[i].style.backgroundImage = buttonPics[i];
        document.getElementById('button-area').appendChild(buttons[i]);
        buttons[i].addEventListener('click', function () {
            let playerChoiceData = this.getAttribute("data-type");
            choice(playerChoiceData);
        });
    }
}

/**
 * Removes all class="buttons" on the screen.
 */
function removeButtons() {
    let numOfButtons = document.getElementsByClassName('button');

    for (let i = numOfButtons.length - 1; i >= 0; i--) {
        numOfButtons[i].remove();
    }
}

/**
 * Adds aria-labels to use for buttons
 * Checks if parameter is number - if not then returns the value that contains parameter - if yes then uses the number as index for return value
 */
function addAriaLabelButton(number) {
    let ariaLabelsHand = ["Button to choose rock", "Button to choose paper", "Button to choose scissors", "Button to choose lizard", "Button to choose spock"];

    return ariaLabelsHand[number];
}

/**
 * Adds an aria-label to pictures via span element
 * Removes span element in case users have pressed another button beforehand
 * Creates span element, sets the attributes for aria-label, finds the right label and adds to span
 * Inserts element into div element from parameter
 */
function addAriaLabelPicture(dataType, id) {
    let container = document.getElementById(id);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let ariaPics = ["Cartoon hand forming rock", "Cartoon hand forming paper", "Cartoon hand forming scissors", "Cartoon hand forming lizard", "Cartoon hand forming spock"];

    let addSpan = document.createElement("span");
    addSpan.setAttribute("role", "img");
    let ariaToAdd;

    for (let i = 0; i < ariaPics.length; i++) {
        if (ariaPics[i].includes(dataType)) {
            ariaToAdd = ariaPics[i];
        }
    }
    addSpan.setAttribute("aria-label", ariaToAdd);
    let elementChild = document.getElementById(id);
    elementChild.appendChild(addSpan);
}

/**
 * Gives opponent picture an arial label in a span
 * Removes span element from previous span add
 * Creates span element, sets the attributes for aria-label, add the right label via number from parameter
 * Inserts element into id element from parameter
 */
function addAriaLabelOpponent(id, number) {
    let opponentPic = document.getElementById(id);
    while (opponentPic.firstChild) {
        opponentPic.removeChild(opponentPic.firstChild);
    }

    let ariaOpponents = ["Cartoon man with black hair, shirt, and tie", "Cartoon man with suit, tie, and a suitcase", "Cartoon serious-looking elderly man in suit and tie with arms crossed", "Cartoon serious-looking muscular man wearing wife-beater and with tattoos on arms", "Cartoon elderly serious-looking shirtless muscular man sitting on platform"];

    let addSpan = document.createElement("span");
    addSpan.setAttribute("role", "img");
    addSpan.setAttribute("aria-label", ariaOpponents[number]);
    opponentPic.appendChild(addSpan);
}

/**
 * Adds link to css animation for all hand-buttons
 */
function animateButtons() {
    let buttons = document.getElementsByClassName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.animationName = "element-signal";
    }
}

/**
 * Adds draw animation to both hands. Takes id and pixes(move y-direction) parameters.
 */
function animateDraw(id, pixels) {
    document.getElementById(id).animate([{
            transform: 'translateY(0px)'
        },
        {
            transform: "translateY(" + pixels + ")"
        },
        {
            transform: 'translateY(0px)'
        }
    ], {
        duration: 500,
        iterations: 2
    });
}

// =============================================== game progression functions =================================================


/**
 * Removes elements from start screen. Adds intro-text and start button
 */
function play() {
    createElement("div", "intro-text", "button-area", "<p>To play simply pick a hand and press the GO button.<br> Opponents' hit-power will increase for each round, so watch your health bar. <br>You only need to beat each opponent once to advance to the next level.</p>");

    createElement("button", "start-button", "button-area", "START");
    document.getElementById("start-button").setAttribute("data-type", "start");
    document.getElementById('start-button').addEventListener('click', start);

    document.getElementById('play-button').remove();

    let mainIntro = document.getElementById('main-intro');
    mainIntro.innerHTML = "";
    mainIntro.style.height = "unset";
}

/**
 * Removes elements from introduction screen. Adds hand-buttons, opponent picture+title, health bar, and restart button
 */
function start() {
    document.getElementById('start-button').remove();
    document.getElementById('main-intro').remove();
    document.getElementById('intro-text').remove();

    createElement("div", "opponent", "button-area", "The Intern");

    createElement("div", "health", "button-area", "100");

    addButtons();

    createElementTarget("div", "opponent-pic", "player-choice");
    addAriaLabelOpponent("opponent-pic", 0);

    createElementTarget("button", "head-restart", "opponent");
    document.getElementById('head-restart').innerHTML = '<i class="fas fa-sync-alt"></i>';
    document.getElementById('head-restart').addEventListener('click', restart);
    document.getElementById('head-restart').setAttribute("aria-label", "button to restart game");
}

/**
 * Inserts picture of chosen hand via parameter, which matches a file name, and styles it. Checks for go-button to clear content from a draw/loss.
 * Adds aria label via span element
 * Reinserts animation link to player choice if animation was stopped (after draw/loss)
 * Stops button animation
 */
function choice(playerChoiceData) {
    let chosenPic = document.getElementById('player-choice');
    let chosenPicStyles = {
        "background-image": "url(assets/images/game-pictures/" + playerChoiceData + ".webp)",
        "background-size": "contain",
        "background-repeat": "no-repeat",
    };
    Object.assign(chosenPic.style, chosenPicStyles);
    chosenPic.setAttribute("data-type", playerChoiceData);
    addAriaLabelPicture(playerChoiceData, "player-choice");

    document.getElementById('comp-choice').textContent = "";
    document.getElementById('outcome').textContent = "";

    let goArea = document.getElementById("go-button-area");
    let button = document.getElementById("go-button");

    if (!goArea.contains(button)) {
        createElement("button", "go-button", "go-button-area", "GO");
        document.getElementById("go-button").addEventListener('click', generateComputerChoice);
    }

    if (chosenPic.style.animationName === "none") {
        chosenPic.style.animationName = "chosen-hand";
    }

    let buttons = document.getElementsByClassName("button");
    for (button of buttons) {
        button.style.animationName = "";
    }

}

/**
 * Uses a random number to generate a computer-choice from array -> value is used to generate background picture, basic style is given to picture.
 * Removes go-button, aria-label added via span element 
 * Calls calculateWinner() and passes dataType of computer choice as parameter
 */
function generateComputerChoice() {
    var dataType = ["rock", "paper", "scissors", "lizard", "spock"];
    let randomNumber = Math.floor(Math.random() * 5);
    let compResult = dataType[randomNumber];

    createElement("div", "comp-hand", "comp-choice", "");
    let compChoice = document.getElementById('comp-hand');
    let compChoiceStyle = {
        "background-image": "url(assets/images/game-pictures/" + compResult + ".webp)",
        "background-size": "contain",
        "background-repeat": "no-repeat",
    };
    Object.assign(compChoice.style, compChoiceStyle);
    addAriaLabelPicture(compResult, "comp-hand");

    document.getElementById('go-button').remove();

    calculateWinner(compResult);
}

/**
 * Uses array with fail-values for each hand to test player-choice. 
 * Draw adds animation to both hands + adds message.
 * Loss animates computer hand and healthbar (if > 0) + adds message + calls decreaseScore().
 * Win calls beatOpponent()
 */
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

    // loop that matches the outcomes with fail criteria - draw, loss, and win outcome.
    // Draw sets text in outcome field, animates the two hands via a function, and calls another function to animate hands-buttons.
    // Loss randomly selects phrase to insert before target value. Stops button animation, animates comp winning hand, drops hp with animation.
    // Win calls function with three parameters: the currentopponent and dataType of chosen hand and computer hand
    for (let i = 0; i < failEvents.length; i++) {
        if (playerChoice === compResult) {
            document.getElementById('outcome').textContent = "Draw! Try again";

            animateDraw("player-choice", "20px");
            animateDraw("comp-hand", "-20px");
            animateButtons();
            document.getElementById('player-choice').style.animationName = "none";

        } else if (playerChoice === failEvents[i].value) {
            let currentOpponent = document.getElementById('opponent').innerText;
            if (compResult === failEvents[i].failOne || compResult === failEvents[i].failTwo) {
                let tryAgainMessages = [
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
                loseMessage.innerText = tryAgainMessages[randomNum];
                loseMessage.setAttribute("id", "lose-message");
                let target = document.getElementById('comp-hand');
                target.parentNode.insertBefore(loseMessage, target);
                decreaseScore(currentOpponent);

                if (document.getElementById('player-choice') !== null) {
                    document.getElementById('player-choice').style.animationName = "none";
                }

                animateButtons();

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
                beatOpponent(currentOpponent, playerChoice, compResult);
            }
        }
    }
}

/**
 * Uses array with objects of opponents and their damage values.
 * Current opponent is checked to calculate how much health is subtracted. Color is changed according to value after decrease.
 * If value>20 (min damage possible) gameOver() is called
 */
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

    // gets the integer value of hp, matches opponent to value, subtracts the points connected to value from hp into a variable
    // If/else if statement that checks which range of numbers the new score is in, changes background color accordingly
    let health = parseInt(document.getElementById('health').innerText);
    for (let i = 0; i < damage.length; i++) {
        if (currentOpponent === damage[i].value) {
            let newScore = health - damage[i].points;
            document.getElementById('health').innerHTML = newScore;
            if (newScore < 75 && newScore >= 50) {
                document.getElementById('health').style.backgroundColor = "#ea8426"; //orange
            } else if (newScore < 50 && newScore >= 25) {
                document.getElementById('health').style.backgroundColor = "#c7be33"; //yellow
            } else if (newScore < 25 && newScore >= 20) {
                document.getElementById('health').style.backgroundColor = "#d01414"; //red
            } else if (newScore < 20) {
                gameOver();
            }
        }
    }
}

/**
 * Reloads page
 */
function restart() {
    location.reload();
}

/**
 * Player choice style values are set to 0 to ease other styling, aria-label spans are removed + opponent is animated to dissapear. Game content is removed. Computer and player choice pictures are 
 * copied to new elements with loss animation. Text is generated, using current opponent and playerchoice, to highlight defeated opponent 
 * and fetch name of the next. Aria labels are added. Next button is added, calls nextOpponent().
 * If current opponent is last boss beatGame() is called.
 */
function beatOpponent(currentOpponent, playerChoice, compResult) {
    document.getElementById('player-choice').style.height = "0";
    document.getElementById('player-choice').style.width = "0";
    document.getElementById('player-choice').style.margin = "0";
    document.getElementById('outcome').style.margin = "0";

    let containerPlayer = document.getElementById("player-choice");
    let containerOpponent = document.getElementById("opponent-pic");
    let containerBossu = document.getElementById("biggu-bossu");
    if (containerPlayer !== null && containerOpponent !== null) {
        while (containerPlayer.firstChild && containerOpponent.firstChild) {
            containerPlayer.removeChild(containerPlayer.firstChild);
            containerOpponent.removeChild(containerOpponent.firstChild);
        }
    } else {
        containerBossu.removeChild(containerBossu.firstChild);
    }

    let backgroudImg = document.getElementById('comp-hand').style.backgroundImage;
    document.getElementById('comp-hand').remove();

    createElementTarget("div", "player-pick", "outcome");
    let playerPick = document.getElementById('player-pick');
    let pickStyle = {
        "background-image": "url(assets/images/game-pictures/" + playerChoice + ".webp)",
        "background-size": "contain",
        "background-repeat": "no-repeat",
    };
    Object.assign(playerPick.style, pickStyle);
    addAriaLabelPicture(playerChoice, "player-pick");

    createElementTarget("div", "comp-lose", "outcome");
    let compLose = document.getElementById('comp-lose');
    let compStyle = {
        "background-image": backgroudImg,
        "background-size": "contain",
        "background-repeat": "no-repeat",
    };
    Object.assign(compLose.style, compStyle);
    addAriaLabelPicture(compResult, "comp-lose");

    let opponents = ["The Intern", "The Salary Man", "The Manager", "The Yakuza Henchman", "The Biggu Bossu"];
    let nextIndex = opponents.indexOf(currentOpponent);
    document.getElementById('result-area').innerHTML = "<p>You beat " + currentOpponent + ".<br> Gear up for the next opponent,<br> " + opponents[nextIndex + 1] + "!</p>";

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


/**
 * Removes all content from beatOpponent screen. Inserts all content from game, health bar is set to full and green color. 
 * Current opponent is checked and updated accordingly (normal or boss) + opponent ID is confirmed and animated to appear.
 */
function nextOpponent() {
    document.getElementById('player-choice').style = "";
    document.getElementById('outcome').style = "";
    document.getElementById('player-pick').remove();
    document.getElementById('comp-lose').remove();
    document.getElementById('next-button').remove();
    document.getElementById('result-area').innerText = "";
    document.getElementById('comp-choice').innerText = "";
    document.getElementById('outcome').innerText = "";

    let backgrounds = ["url(assets/images/game-pictures/intern.webp)", "url(assets/images/game-pictures/salaryman.webp)", "url(assets/images/game-pictures/manager.webp)", "url(assets/images/game-pictures/yakuza.webp)", "url(assets/images/game-pictures/biggu-bossu.webp)"];

    let currentOpponent = document.getElementById('opponent').innerText;
    let opponents = ["The Intern", "The Salary Man", "The Manager", "The Yakuza Henchman", "The Biggu Bossu"];
    if (currentOpponent === opponents[3]) {
        document.getElementById('opponent-pic').setAttribute("id", "biggu-bossu");
        document.getElementById('biggu-bossu').style.backgroundImage = backgrounds[4];
        addAriaLabelOpponent("biggu-bossu", 4);
        document.getElementById('opponent').textContent = opponents[4];
        document.getElementById('health').textContent = 100;
    }

    for (let i = 0; i < 3; i++) {
        if (currentOpponent === opponents[i]) {
            document.getElementById('opponent').textContent = opponents[i + 1];
            document.getElementById('health').textContent = 100;
            document.getElementById('opponent-pic').style.backgroundImage = backgrounds[i + 1];
            addAriaLabelOpponent("opponent-pic", i + 1);
        }
    }

    addButtons();

    document.getElementById('health').style.backgroundColor = "#079607";

    let compCome;
    if (document.getElementById('opponent-pic') !== null) {
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

/**
 * Removes all content from game. Inserts winning text and adds restart button that calls restart().
 */
function beatGame() {
    document.getElementById('button-area').innerHTML = "";
    document.getElementById('game-area').innerHTML = "";
    document.getElementById('result-area').innerHTML = "";

    createElement("h1", "win-message", "button-area", "You Win!");

    createElement("h2", "win-text", "game-area", "You managed to rise through the coorporate ladder to claim your place on top");

    createElement("button", "restart-button", "game-area", "Restart");
    document.getElementById("restart-button").addEventListener('click', restart);
}

/**
 * Button and game areas content are removed to clear screen of game.
 * Gameover text and restart button are inserted. Button calls restart()
 */
function gameOver() {
    document.getElementById('button-area').innerHTML = "";
    document.getElementById('game-area').innerHTML = "";

    createElement("h1", "over-message", "button-area", "Game Over!");

    createElement("p", "gameover-text", "button-area", "Looks like the odds were against you. Have another go and see if you can reach the top of the coorporate ladder!");

    createElement("button", "restart-button", "game-area", "Try Again");

    document.getElementById("restart-button").addEventListener('click', restart);
}