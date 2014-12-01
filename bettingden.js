// Write a single-player betting game that runs in the browser. The player starts off 
// with $100 and is asked to place a bet between $5 and $10. They then enter a number 
// between 1 and 10 in order to guess the correct number. If they get the number 
// exactly, they double their money. If they are only off by 1, they get to keep their 
// bet. Otherwise they lose their bet. The game ends if the player loses all their money.

// Use prompt and alert to communicate with the user.

var player_money = 100;

while(player_money > 0){
  var number = Math.floor(Math.random() * (10 - 1)) + 1;
  var bet = prompt('Place your bet! This must be between $5 and $10');
  var guess = prompt('Now pick your number');
  
  if (guess == number){
    player_money += bet * 2;
    alert('You win!\n The number was '+ number +'. You now have '+ player_money);
  } else if (guess == number - 1 || guess == number + 1) {
    player_money += bet;
    alert('Almost! The number was '+ number +'\n. You now have '+ player_money);
  } else {
    player_money -= bet;
    alert('You lost! The number was '+ number +'\n. You now have '+ player_money);
  }
}
