function computerPlay()
 {
 const computerSelection=Math.floor(Math.random()*3);
 

  if(computerSelection==0){
     return 'rock';
  }
  else if(computerSelection==1)
  {
      return 'scissor';
  }
  else
  {
      return 'paper';
  }

 }

 console.log(computerPlay());

 
 function gamePlay(playerSelection, computerSelection) 
 {
   
    if (playerSelection === computerSelection)
    {
        return 'Draw';
    }

    else if (playerSelection === 'Rock')
    {
        if(computerSelection === 'Paper')
        {
            return 'Computer';
        } 
        else 
         {
            return 'Player';
         }
    }

    else if (playerSelection === 'Paper')
    {
        if (computerSelection === 'Scissors')
        {
            return 'Computer';
        }
         else
        {
            return 'Player';
        }
    }

    else if (playerSelection === 'Scissors')
    {
        if (computerSelection === 'Rock')
        {
            return 'Computer';
        } 
        else 
        {
            return 'Player';
        }
    }
    
}
const playerSelection=prompt('rock paper scissor');
 const computerSelection=computerPlay();
 console.log(gamePlay(playerSelection,computerSelection));
 
