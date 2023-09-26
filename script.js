const choices = document.querySelectorAll('.choice');
const playerScoreElem = document.querySelector('.player-score');
const computerScoreElem = document.querySelector('.computer-score');
const resultElem = document.querySelector('#result');
const playAgainBtn = document.querySelector('#play-again');
const computerChoiceElem = document.querySelector('#computer-choice');

const weapons = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let timeout;
let isLoggedIn = false;
let username = "";

// log in
function login() {
    username = document.getElementById('username').value;
    if (username.trim() !== "") {
        isLoggedIn = true;
        document.getElementById('welcomeUser').textContent = username;
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('gameContainer').style.display = 'block';
        document.getElementById('scoreContainer').style.display = 'block';
    }
}
function play() {
    if (!isLoggedIn) {
        alert('Please login first!');
        return;
}

}
// display result
function updateScore(playerWeapon, computerWeapon) {
    clearTimeout(timeout);
    if (playerWeapon) {
      computerChoiceElem.innerHTML = `Computer choose: ${computerWeapon}.`;
      if (playerWeapon === computerWeapon) {
        resultElem.innerHTML = "It's a tie!";
      } else if (
        (playerWeapon === 'rock' && computerWeapon === 'scissors') ||
        (playerWeapon === 'paper' && computerWeapon === 'rock') ||
        (playerWeapon === 'scissors' && computerWeapon === 'paper')
      ) {
        resultElem.innerHTML = 'You win!';
        playerScore++;
        playerScoreElem.innerHTML = `Player: ${playerScore}`;
      } else {
        resultElem.innerHTML = 'Computer wins!';
        computerScore++;
        computerScoreElem.innerHTML = `Computer: ${computerScore}`;
      }
    
    } 
  
    if (playerScore === 5) {
      resultElem.textContent = 'You win the game!';
      resultElem.style.color = 'green';
      computerChoiceElem.innerHTML = 'Game Over';
      disableOptions();
     
    }
  
    if (computerScore === 5) {
      resultElem.textContent = 'You lose the game!';
      resultElem.style.color = 'red';
      computerChoiceElem.innerHTML = 'Game Over';
      disableOptions();
      
    }
  }




// player
function selectWeapon() {
  clearTimeout(timeout);

  const playerWeapon = this.id;
  const computerWeapon = computerPlay();
  updateScore(playerWeapon, computerWeapon);
}

// computer play
function computerPlay() {
    const weaponIndex = Math.floor(Math.random() * 3);
    return weapons[weaponIndex];
  }




// rest game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  countdown = 10;
  playerScoreElem.innerHTML = 'Player: 0';
  computerScoreElem.innerHTML = 'Computer: 0';
  resultElem.innerHTML = 'Choose your weapon!';

  resultElem.style.color = '#660033';
  computerChoiceElem.innerHTML = '';
  enableOptions();

}

function disableOptions() {
  choices.forEach((choice) => {
    choice.style.pointerEvents = 'none';
  });
}

function enableOptions() {
  choices.forEach((choice) => {
    choice.style.pointerEvents = 'auto';
  });
}

// Event listeners
choices.forEach((choice) => choice.addEventListener('click', selectWeapon));
playAgainBtn.addEventListener('click', resetGame);

