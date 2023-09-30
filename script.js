let computer = '';
const score = JSON.parse(localStorage.getItem('score')) || {  
    wins: 0,
    losses: 0,
    ties: 0,
    totalGame: 0
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

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.button-result1').innerHTML = yourMove;
    document.querySelector('.button-result2').innerHTML = computerMove;

    document.querySelector('.result').innerHTML = result;
    document.querySelector('.score').innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    document.querySelector('.total-game').innerHTML = `Total Games: ${score.totalGame}`;


    
}
