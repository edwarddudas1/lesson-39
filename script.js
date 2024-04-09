// Hm1
const worldButton = document.querySelector('.helloButton');

function helloButton(){
    console.log('hello world!')
}

// HM2

const guessFieldInput = document.getElementById('guessField')
const guessResultText = document.getElementById('guessResult');
function getRandomNumber() {
    return Math.floor(Math.random() * 100) +1;
}
function checkGuess() {
    const getValue = Number(guessFieldInput.value);
    console.log(getRandomNumber())
    console.log(getValue);
    if (getValue === getRandomNumber()) {
        console.log("Ви вгадали")
        guessResultText.textContent = "You have won!"
    } else {
        console.log('Try again');
        guessResultText.textContent = "Try again"
    }
    guessFieldInput.value = ' ';
}