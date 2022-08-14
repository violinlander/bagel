let guessesLeft = 10;
const MAX_GUESSES = 10;
let secretNum = getSecretNum();
var clues = [];

let para = document.createElement('p');
let node;
let element;


// Button to process a guess:
let submitButtonDiv = document.getElementById('submit-button');
submitButtonDiv.addEventListener('click', (e) =>{
    e.preventDefault();
    guess = document.getElementById('guess').value;
    guessesLeft -= 1;
    clues = [];
    getClues(guess, secretNum);
    document.getElementById('num-guesses').innerText = guessesLeft.toString();

    let para = document.createElement('p');
    let node;
    let element;
    guessMessageStr = 'Guess #'+(MAX_GUESSES-guessesLeft).toString()
        + '. You guessed: '+(guess).toString()
        + '. Clues: ' + clues;
    node = document.createTextNode(guessMessageStr);
    para.appendChild(node);
    element = document.getElementById('clue-message');
    element.appendChild(para);
    document.getElementById('guess').value = '';
    if (clues == 'Fermi Fermi Fermi') {
        alert('You won! Press "Reset" to play again.');
    }else if(guessesLeft == 0){
        alert('You lose, you can hit "Reset" or keep going.')
    }



})


function getSecretNum() {
    let num = Math.floor(Math.random()*1000);
    while (true){
        if(num >= 100){
            break;
        }
    }
    return num.toString();
}

// Button to reset the game:
const resetButtonElement = document.getElementById('reset-button');
resetButtonElement.addEventListener('click', (e)=>{
    window.location.reload();
})

function getClues(guess, secretNum) {
    clues = [];
    guess = guess.split('');
    secretNum = secretNum.split('')
    for(let i = 0; i < 3; i++){
        if(guess[i] == secretNum[i]){
            clues.push('Fermi');
        }
        else if(secretNum.includes(guess[i])) {
            clues.push('Pico')
        } 
    }
    if (clues.length == 0){
        clues.push('Bagel');
    }
    clues = clues.join(' ');
}

