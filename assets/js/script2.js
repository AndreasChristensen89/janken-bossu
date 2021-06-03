document.addEventListener('DOMContentLoaded', function() {

document.getElementById("play-button").addEventListener('click', play);
}
)

    // <div class="game-area">
    //     <button data-type="rock" class="button">Rock</button>
    //     <button data-type="paper" class="button">Paper</button>
    //     <button data-type="scissors" class="button">Scissors</button>
    //     <button data-type="lizard" class="button">Lizard</button>
    //     <button data-type="spock" class="button">Spock</button>
    //     <p>Opponent: <span id="opponent"></span></p>
    //     <p>Chances left: <span id="chances">0</span></p>
    //     <p>Your choice: <span id="choice"></span></p>
        
    // </div>

    // <button data-type="play" id="play-button">Play</button>

    // <p>Computer picked: <span id="computerChoice"></span></p>
    
    // <span id="explanation"></span>
    
    // <p>Outcome: <span id="outcome"></span></p>

    // <button data-type="play-again" class="button">Play Again</button>

    //     <div class="how-to-play">
    //     <p>How to play:<br> "Scissors decapitate Lizard, Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, Lizard poisons
    //         Spock, Spock smashes Scissors, Scissors decapitates Lizard, Lizard eats Paper, Paper disproves Spock, Spock
    //         vaporizes Rock, Rock crushes Scissors."</p>
    // </div>


function play() {

    let newSpan = document.createElement('p');
    newSpan.innerHTML = `Opponent: <span id="opponent">Daiki</span>`;

    let newSpanTwo = document.createElement('p');
    newSpanTwo.innerHTML = `Chances: <span id="chances">5</span>`;
    
    let startButton = document.createElement('button');
    startButton.innerHTML = `Start`;
    startButton.setAttribute("id","start-button");
    startButton.setAttribute("data-type","start");

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

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("data-type", innerHtml[i].toLowerCase());
        buttons[i].setAttribute("class", "button");
        buttons[i].innerHTML = innerHtml[i];
        document.getElementById('button-area').appendChild(buttons[i]);
        buttons[i].addEventListener('click', function() {
            let playerChoice = this.getAttribute("data-type");
            choice(playerChoice);
        } );
    }
    startButton.remove();
}

function choice(playerChoice) {
    document.getElementById('player-choice').value = "";
    document.getElementById('player-choice').innerHTML = playerChoice;
    var buttonCheck = document.getElementById("game-area").contains(button);
    
    if(!buttonCheck) {
    let goButton = document.createElement('button');
    goButton.innerHTML = "Go";
    goButton.setAttribute("class", "button");
    document.getElementById('game-area').appendChild(goButton);
    goButton.addEventListener('click', generateComputerChoice);
    }
}

function generateComputerChoice() {
    
}

function calculateWinner() {
    
}

function decreaseScore() {
    
}

function gameOver() {
    
}

function restart() {
    
}

function nextOpponent() {
    
}

function beatGame() {
    
}
