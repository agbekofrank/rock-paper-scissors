const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
  return userInput
  }else{
      console.log('Pick one of paper, rock or scissors')
    }
  } 
  // getUserChoice('paer');
  const getComputerChoice = () => Math.floor(Math.random()*3);
  // console.log(getComputerChoice())
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === 'bomb'){
      return 'User won'
    }else if(userChoice === computerChoice){
      return 'Tie'
    }else if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer won'
      }else{
        return 'User won'
      }
    }else if(userChoice === 'paper'){
      if(computerChoice === 'rock'){
        return 'User won'
      }else{
        return 'Computer won'
      }
    }else if(userChoice === 'scissors'){
      if(computerChoice === 'paper'){
        return 'Computer won'
      }else{
        return 'User won'
      }
    }
  }
  const playGame = () =>{
      const userChoice = getUserChoice('bomb');
      console.log(userChoice);
      const computerChoice = getComputerChoice();
      console.log(computerChoice);
      console.log(determineWinner(userChoice, computerChoice))
  
  }
  playGame();
  
  // console.log(determineWinner('rock', 'rock'))