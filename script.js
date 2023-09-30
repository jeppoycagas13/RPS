let computer = '';
let scoreLimit = 5;
let username = "";
let playerscore ="";
let computerscore ="";
const score = JSON.parse(localStorage.getItem('score')) || {  
    wins: 0,
    losses: 0,
    ties: 0,
    totalGame: 0
}
function login() {
    username = document.getElementById("username").value;
    if (username) {
        document.getElementById("loginSection").classList.add("d-none");
        document.getElementById("gameSection").classList.remove("d-none");
        document.getElementById("playerName").innerText = username;
    }
}



function playGame(playerMove) {

    const randomNumber = Math.random();
    console.log(randomNumber);

    if (randomNumber <= 0.33) {
        computer = 'Rock';
    } else if (randomNumber > 0.33 && randomNumber > 0.66) {
        computer = 'Paper';
    } else {
        computer = 'Scissor';
    }
    console.log(computer);
    
    
    if (playerMove === 'Rock') {

        if (computer === 'Paper') {
            result = 'You Lose!'
        } else if (computer === 'Scissor') {
            result = 'You Win!'
        } else {
            result = 'Tie!'
        }

    }

    if (playerMove === 'Paper') {

        if (computer === 'Rock') {
            result = 'You Win!'
        } else if (computer === 'Scissor') {
            result = 'You Lose!'
        } else {
            result = 'Tie!'
        }

    }

    if (playerMove === 'Scissor') {

        if (computer === 'Paper') {
            result = 'You Win!'
        } else if (computer === 'Rock') {
            result = 'You Lose!'
        } else {
            result = 'Tie!'
        }

    }

    if (result === 'You Win!') {
        score.wins += 1;
        score.totalGame +=1;
    } else if (result === 'You Lose!') {
        score.totalGame +=1;
        score.losses += 1;
    } else if (result === 'Tie!') {
        score.totalGame +=1;
        score.ties += 1;
    }
    
    let yourMove = '';

    if (playerMove === 'Rock') {
        yourMove = '<i class="fa-solid fa-hand-fist"></i>'
    } else if (playerMove === 'Paper') {
        yourMove = '<i class="fa-solid fa-hand"></i>'
    } else if (playerMove === 'Scissor') {
        yourMove = '<i class="fa-solid fa-hand-peace"></i>'
    }

    let computerMove = '';

    if (computer === 'Rock') {
        computerMove = '<i class="fa-solid fa-hand-fist"></i>'
    } else if (computer === 'Paper') {
        computerMove = '<i class="fa-solid fa-hand"></i>'
    } else if (computer === 'Scissor') {
        computerMove = '<i class="fa-solid fa-hand-peace"></i>'
    }
    if (result === scoreLimit || result === scoreLimit) {
        document.getElementById("resetBtn").classList.remove("d-none");
        document.querySelector('.btn-group').classList.add("d-none");
        document.getElementById("resetBtn").removeAttribute('disabled');
    }
    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        drawScore = 0;
    
        document.getElementById("playerScore").innerText = playerScore;
        document.getElementById("computerScore").innerText = computerScore;
        document.getElementById("drawScore").innerText = drawScore;
    
        document.getElementById("game").classList.add("d-none");
        document.getElementById("username").value = "";
        document.getElementById("username").removeAttribute("readonly");
        document.querySelector('button').removeAttribute('disabled');
        document.getElementById("resetBtn").classList.add("d-none");
        document.querySelector('.btn-group').classList.remove("d-none");
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.button-result1').innerHTML = yourMove;
    document.querySelector('.button-result2').innerHTML = computerMove;

    document.querySelector('.result').innerHTML = result;
    document.querySelector('.score').innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    document.querySelector('.total-game').innerHTML = `Total Games: ${score.totalGame}`;


    
}
