let playerScore = 0
let computerScore = 0
let roundNumber = 1

let randomThrow = () => {
    let randomIndex = Math.floor(Math.random() * 3)
    return ['rock', 'paper', 'scissors'][randomIndex]
}

let playRound = (playerThrow) => {
    let result;
    let computerThrow = randomThrow()

    console.log(`Player throw: ${playerThrow} and Computer throw: ${computerThrow}`) 

    if(playerThrow == computerThrow) {
        result = "TIE"
   } else if ((playerThrow == 'rock' && computerThrow == 'scissors') || 
             (playerThrow == 'paper' && computerThrow == 'rock') || 
            (playerThrow == 'scissors' && computerThrow == 'paper')) {
                result = "PLAYER WIN!"
                playerScore++
    } else {
        result = "COMPUTER WIN!"
        computerScore++
    }




// UPDATE SCORE
$('#playerScore').text(playerScore)
$('#computerScore').text(computerScore)

// UPDATE GAMELOG
let description = `Player throw: ${playerThrow} and Computer throw: ${computerThrow}`

$('tbody').prepend(`<tr><td>${roundNumber}</td><td>${description}</td><td>${result}</td><td>${playerScore} - ${computerScore}</td></tr>`)
    roundNumber++
}

$('#rock').click (function() {
    playRound('rock')
})

$('#paper').click (function() {
    playRound('paper')
})

$('#scissors').click (function() {
    playRound('scissors')
})





