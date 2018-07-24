
const selections = ['rock', 'paper', 'scissors'];
var userChoice = document.getElementById('userChoice').value;
let cpuChoice = '';
let loseText = $('input', function() {
    $(userChoice).css('color', 'red');
});


// get user input
// $('button').click(function doFunction() {
//     return userChoice
// });

// computer answer
let num;
function cpu(){
    num = (Math.floor(Math.random() * 3));
    cpuChoice = (selections[num]);
    return cpuChoice
}
console.log(cpu());


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



