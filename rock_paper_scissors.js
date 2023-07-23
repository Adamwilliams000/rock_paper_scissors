const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error, please type: rock, paper, or scissors.');
    }
  }
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a tie';
    }
   //Rock vs paper:
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won.';
      } else {
        return 'You won!';
      }
    }
    //Paper vs Scissors:
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won.';
      } else{
        return 'You won!';
    }
  }
  
     //Scissors vs rock: 
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won.';
      } else {
        return 'You won!';
      }
    }
  
    //Bomb vs everything:
    if (userChoice === 'bomb') {
      if (computerChoice === 'rock' || 'paper' || 'scissors'){
        return 'You won! The computer exploded!';
      }
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  