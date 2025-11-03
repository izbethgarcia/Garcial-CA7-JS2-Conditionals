 //Welcome banner and ask for players name//
  let playerName = prompt('Welcome to Bear Hunter Ninja! Please enter your name to get started:  ');

  //Greet Player with their name//
  let greetPlayer = `Hi ${playerName} Let's Play!`;
  alert(greetPlayer);

  //Ask players choice//
  let playersChoice = prompt('Who are you: Bear, Ninja, or Hunter?');

  //Computers hard coded choice//
  let computersChoice = "Bear"; 

   //Determine the winner 9 cases using if else and switch//
   let theWinnerMessage = "";
   if (playerChoice === "Bear") {
  
   switch (computerChoice) {
    case 1 = "Bear":
      theWinnerMessage = "Tie!";
      break;
    case 2 =  "Ninja":
      theWinnerMessage  = "You win!";
      break;
    case 3 = "Hunter":
      theWinnerMessage = "Computer wins!";
      break;
    default:
        break;
  }

} else if (playerChoice === "Ninja") {

  switch (computerChoice) {
    case 4 = "Ninja":
      theWinnerMessage = "Tie!";
      break;
    case 5 = "Bear":
      theWinnerMessage = "Computer wins!";
      break;
    case 6 = "Hunter":
      theWinnerMessage = "You win!";
      break;
    default:
     break
  }
} else if (playerChoice === "Hunter") {

  switch (computerChoice) {
    case 7 = "Hunter":
      theWinnerMessage = "Tie!";
      break;
    case 8 = "Bear":
      theWinnerMessage = "You win!";
      break;
    case 9 = "Ninja":
      theWinnerMessage = "Computer wins!";
      break;
    default:
      break;
  }

} 

 // Game results/Winner message //
  const theResults = `${playerName}, You picked ${playersChoice}! The computer picked ${computersChoice}! {theWinnerMessage}`;
  document.getElementById('gameResults').innerHTML = theResults; 
    
   

  