let compScore = 0;
let playScore = 0;
let round = 1;
game();

function game() {
  function computerPlay() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomChoice = Math.floor(Math.random() * choices.length);
    let picked = choices[randomChoice];
    console.log(picked);
    return picked;
  }

  function startGame(playerSelection, computerSelection) {

    do {
      if ((playerSelection === 'ROCK') && (computerSelection === 'PAPER')) {
        compScore++;
        return "You Lose!";
      } else if ((playerSelection === 'PAPER') && (computerSelection === 'ROCK')) {
        playScore++;
        return "You Won";
      } else if ((playerSelection === 'PAPER') && (computerSelection === 'SCISSORS')) {
        compScore++;
        return "You Lose!";
      } else if ((playerSelection === 'SCISSORS') && (computerSelection === 'PAPER')) {
        playScore++;
        return "You Won!";
      } else if ((playerSelection === 'SCISSORS') && (computerSelection === 'ROCK')) {
        compScore++;
        return "You Lose!";
      } else if ((playerSelection === 'ROCK') && (computerSelection === 'SCISSORS')) {
        playScore++;
        return "You Won!";
      } else if (playerSelection === computerSelection) {
        return "Same Choice! Pick Another One";
      }
    } while (playerSelection != computerSelection);
  }

  function checkWinner() {
    if (playScore > compScore) {
      return "Player Win!"
    } else if (playScore == compScore) {
      return "Draw!"
    } else if (compScore > playScore) {
      return "Computer Win!"
    }
  }

  while (round <= 5) {
    const playerSelection = prompt('Choice Either Rock ,Paper, or Scissors:').toUpperCase();
    const computerSelection = computerPlay();
    console.log(startGame(playerSelection, computerSelection));
    console.log('Player-Score: ' + playScore);
    console.log('Computer-Score: ' + compScore);
    round++;
  }
  console.log(checkWinner());
}
