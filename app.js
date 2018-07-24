
const selections = ['rock', 'paper', 'scissors'];
let cpuChoice = '';
let loseText = $('input', function() {
    $(userChoice).css('color', 'red');
});


// get user input
function doFunction() {
    let userChoice = document.querySelector('input').value;
    return (userChoice);
};
doFunction();

 
// computer answer
let num;
function cpu(){
    num = (Math.floor(Math.random() * 3));
    return cpuChoice = (selections[num]);
};
// console.log(cpu());


// TIE
function tieGame(userChoice, cpuChoice) {
    if(userChoice === cpuChoice) {
        return 'tie'
    }
}

// Declare winner
function userWin(userChoice, cpuChoice) {
    if((userChoice === 'rock' && cpuChoice === 'scissors') || (userChoice === 'paper' && cpuChoice === 'rock') || 
    (userChoice === 'scissors' && cpuChoice === 'paper')) {
        return 'user win';
    } else {
        return 'cpu win';
    }
};



