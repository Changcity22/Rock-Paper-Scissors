function computerPlay () {
   //goal: the function shall randomly return one of three outcomes:rock, paper or scissors
   //plan: no interface at this time. no input. output: see above.
   //pseudocode:
   //let randomNumber = a number between 0 and 2
   //if number = 1
   //return rock
   //...etc

    let compHandGenerator = Math.floor(Math.random()*3);
    let compHand;

    if (compHandGenerator === 0) {
        compHand = 'Rock';
    }

    else if (compHandGenerator === 1) {
        compHand = 'Paper';
    }

    else {
        compHand = 'Scissor';
    }

    return compHand;
    console.log(compHand);


}

function newRound (computerSelection, playerSelection) {
    //problem: To play a single round of game. A successful round will
    //compare player and computer hand and return the correct winner
    
    //plan: No user interface. Two inputs: player hand and computer hand. 
    //One output: string that declares the correct winner.

    //psueocode:
    //convert both inputs to number, from 1 to 3
    //through subtraction, determine winner
    //i.e. if difference = (1 or -2): return player victory string
    // else: return player loss string

    let playerSelectionNumber; 
    let computerSelectionNumber;


    switch (playerSelection.toLowerCase()) {
        case "scissor":
            playerSelectionNumber = 3;
            break;
        case "paper":
            playerSelectionNumber = 2;
            break;
        case "rock":
            playerSelectionNumber = 1;
            break;
    }
            
    switch (computerSelection) {
        case "Scissor":
            computerSelectionNumber = 3;
            break;
        case "Paper":
            computerSelectionNumber = 2;
            break;
        case "Rock":
            computerSelectionNumber = 1;
            break;
    }

    let result = computerSelectionNumber - playerSelectionNumber;

    switch (result) {
        case (1 || -2):
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        case 0:
            return `It's a draw!`;
        default:
            return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    







}