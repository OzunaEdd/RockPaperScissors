const button = document.querySelectorAll('.btn');
const player = document.querySelector('#player');
const comp = document.querySelector('#computer');
const winner = document.querySelector('#winner');
const playerPick = document.querySelector('#player-pick');
const computerPick = document.querySelector('#computer-pick');
const nextRound = document.querySelector('#round');
let compScore = 0;
let playScore = 0;
let playerSelection;
let picked;
let round = 0;
let winRound = 1;

function computerPlay() {
  let choices = ['ROCK', 'PAPER', 'SCISSORS'];
  let randomChoice = Math.floor(Math.random() * choices.length);
  picked = choices[randomChoice];
  console.log(picked);
  return picked;
}

function startGame(playerSelection, computerSelection) {

  if ((playerSelection === 'ROCK') && (computerSelection === 'PAPER')) {
    compScore++;
    winRound = 'You Lose!';
    round++;
    return 0;
  } else if ((playerSelection === 'PAPER') && (computerSelection === 'ROCK')) {
    playScore++;
    winRound = "You Won!";
    round++;
    return 0;
  } else if ((playerSelection === 'PAPER') && (computerSelection === 'SCISSORS')) {
    compScore++;
    winRound = "You Lose!";
    round++;
    return 0;
  } else if ((playerSelection === 'SCISSORS') && (computerSelection === 'PAPER')) {
    playScore++;
    winRound = "You Won!";
    round++;
    return 0;
  } else if ((playerSelection === 'SCISSORS') && (computerSelection === 'ROCK')) {
    compScore++;
    winRound = "You Lose!";
    round++;
  } else if ((playerSelection === 'ROCK') && (computerSelection === 'SCISSORS')) {
    playScore++;
    winRound = "You Won!";
    round++;
    return 0;
  } else if (playerSelection === computerSelection) {
    winRound = 'Draw! Choose Again'
    round++;
    return "Same Choice! Pick Another One";
  }

}



button.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerSelection = e.target.innerHTML;
    if (round != 5) {
      startGame(playerSelection, computerPlay());
      player.innerHTML = 'Player-Score: ' + playScore;
      comp.innerHTML = 'Computer-Score: ' + compScore;
      playerPick.innerHTML = 'Player-Choose: ' + e.target.innerHTML;
      computerPick.innerHTML = 'Computer-Choose: ' + picked;
      nextRound.innerHTML = 'Round-' + round + ': ' + winRound;
      if (round == 5) {
        if (compScore > playScore)
          winner.innerHTML = 'Winner: Computer'
        else if (playScore > compScore)
          winner.innerHTML = 'Winner: Player'
        else if (playScore == compScore)
          winner.innerHTML = 'Winner: Draw'
      }
    }
  })
})
