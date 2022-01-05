const getUserChoice = userInput => {
 
   userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb')
    return userInput;
  else
    console.log('Error');
}

function getComputerChoice () {
  
  let randomNumber;
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0)
    return 'rock';
  else if (randomNumber === 1)
    return 'paper';
  else if (randomNumber === 2)
    return 'scissors';
}

function determineWinner (userChoice, computerChoice) {
  
  if (userChoice === 'bomb')
    return 'you won! 💣'
  if (userChoice === computerChoice)
    return 'tie';
  else if (userChoice === 'rock') {
    if (computerChoice === 'paper')
      return 'you lost!';
    else
      return 'you won!'
  }
  else if (userChoice === 'paper') {
    if (computerChoice === 'scissors')
      return 'you lost!';
    else
      return 'you won!';
  }
  else if (userChoice === 'scissors') {
    if (computerChoice === 'rock')
      return 'you lost!';
    else
      return 'you won!';
  }
}

function playGame (userInput) {

  let userChoice = getUserChoice(userInput);
  let computerChoice = getComputerChoice();

  console.log('You: ' + userChoice);
  console.log('Computer: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame('bomb');
