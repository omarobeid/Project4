// JavaScript source code


//game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//assign ui min max
minNum.textContent = min;
maxNum.textContent = max;
//play again event listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

//listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage('Please enter a number between '+ (min) + ' and '+ (max),'red');
    }
    if (guess === winningNum) {
        gameOver(true, (winningNum) + ' is correct');
    } else {
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            gameOver(false, ' Game over, you lost, the winning nmber was ' + (winningNum));
        } else {
            setMessage((guess) + ' is not correct, ' + (guessesLeft) + ' guesses left', 'red');
            guessInput.style.bordercolor = 'red';
            guessInput.value = '';
        }
    }


});



function gameOver(won, msg) {
    var color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);


    //play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

}


//setMessage
function setMessage(msg,color) {
    message.style.color = color;
    message.textContent = msg;
}

//get winning number
function getRandomNum(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}