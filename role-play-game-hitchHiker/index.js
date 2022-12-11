const readline = require("readline-sync");
const prompt = require("prompt-sync")();
var r = true
var a = true
var isRunning = r;
var isAttacking = a;
var player = { name: playerName, hp: 100, rewards: [] };
var playerStuff = ["shoes", "tent", "water"];
var enemies = ["falling rocks", "floods", "wild animals"];
var playerName = readline.question(
  "Welcome to Hitch Hiker fellow traverller what's your name ? "
);
console.log("Welcome " + playerName + " let's get started");
var question1 = readline.question(`Hello ${playerName} Choose "W" for walk!, Choose "Q" to quit the game `,
  {}
);
var choices = readline.keyIn("Choose 'w' to walk or 'q' to quit. ", {
  limit: "wq",
});
//use a while a loop and call the walking inside of that while loop
//create a variable that will determine if the  condition is true or false

var isPlaying = true;
while (isPlaying === true) {
  //conditional statement
  if (choices === "w") {
    console.log("You chose to walk. ");
    walking();
  } else if (choices === "q") {
    console.log("You chose to quit. ");
    break;
  }
}

//for walking function:
function walking() {
  console.log("You are walking?");
  //use Math.random for walking function.There is a 1/3 or 1/4 chance of being attacked by the enemy.
  var random = Math.random();
  console.log(random, "you now have a chance of being attacked by your enemy");
  //use an if statement stating if the random number is greater than 0.25, no enemies appeared
  if (random <= 0.1) {
    //use keyIn method to get the player to walk if there are no enemies
    const chooseWalk = readline.keyIn(
      "No enemies in sight. Press 'w' to keep walking. ",
      { limit: "w" }
    );
    if (chooseWalk === "w") {
      console.log("You can continue walking");
    }

    //*************************************** I'm tring to get this half of my game to run, but having trouble will reach out to Dev-Lvl 1 for help ************** */

    //you can create an if statement stating if there are 0 enemies left in the enemies' array, the game ends. the game can end by using isPlaying = false
  }
  if (random > 0.10) {
    console.log("Enemies are attacking you. ");
    var question1 = readline.question(
      `Oh no! ${playerName} what would you like to do next, R for run, or A to fight back `,
      {}
    );
    // enemies functions tryig to get *****This half of my code to run*******
    // var isRunning = r
    // var isAttacking = a
    var message = ""
    if (isRunning === r) {
      //conditional statement
     
        message = "Good choice, I would've done the same thing. let's get out of here "
      
    }
      
    } else if (isAttacking === a) {
        message = "You chose to fight"
      // if(isAttacking === null) {
        message = "Good choice, but you don't have any weapons. "
      } else (
        message ='you are now dead'
      )
    } 
  
// }
console.log(isRunning);
console.log(isAttacking);

//end game is no enemy
// } else if (`Hello ${playerStuff} + + is being depleted`) {
// }
//   console.log(`${playerStuff} + +" Has been depleted! "`);

//call enemy appear function

// // const walk = takeAction.bind(actionMove1);
// // const attack = takeAction.bind(actionMove2);
// // const run = takeAction.bind(actionMove3);

// // console.log(`ah....Excellent choice! you choose to ${question1}. `);

// // Have player make a selection W = walk R = run A = attack

// // const name = prompt("choose W for walk, A for attack, or R for run ");
// // choose an option w = walk a = attack r = run

//   // console.log(` Hi  welcome to HitchHiker`);

// // console.log("Are you ready to play enter y for yes,'[]' or n for no '[]'!");

// /*

// rl.question function user_Q1()  {
//   console.log("We're glad to here, let's play!");
// }//user wants to start

// rl.question function user_Q2()  {
//   console.log("We're sorry to see you go! :(");
// }//user wants to stop

// console.log(user_Q1 () || user_Q2());
