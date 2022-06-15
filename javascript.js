console.log("Challenge the computer to a best of 5, rock paper scissor game!")


/*
input: player selection
output each round: point count & winner
output final: final winner

add event listener to each button 


*/


let playerCounter = 0;
let computerCounter = 0;

const buttons = document.querySelectorAll('button');
const yourScore = document.querySelector('#your-score');
const computerScore = document.querySelector('#computer-score');
const finalResult = document.querySelector('#final-result');



buttons.forEach((button) => {
    button.addEventListener('click', newRound);
})





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

function newRound (playerSelection) {
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
    let computerSelection = computerPlay();

    switch (this.id) {
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

    if (playerCounter <5 && computerCounter <5) {
        switch (result) {
            case 1:
            case -2:
                computerCounter ++;
                computerScore.textContent = `Computer score: ${computerCounter}`;
                finalResult.textContent = `${computerSelection} beats ${this.id}! Computer wins!`;
                break;
            case 0:
                finalResult.textContent = `It's a draw!`;
                break;
            case 2:
            case -1:
                playerCounter ++;
                yourScore.textContent = `Your score: ${playerCounter}`;
                finalResult.textContent = `${computerSelection} loses to ${this.id} ! You win!`;
                break;
        }
    }
    else {
        computerScore = 5 ? finalResult.textContent = "Computer scored 5 points. Computer victory!" : 
                finalResult.textContent = "You scored 5 points, Your victory!";
    }



}





/*

function game() {
    //pseudocode:
    //loop
        //call newRound, return result, counter + 1 if won
    //loop ends after 5 iteration
    //at the end, reports score and winner

    let counter = 0;

    for (let i = 0; i < 5; i++) {
        
        let playerSelection = prompt("What's your hand?", "Rock, Paper or Scissor?");
        
        let result = newRound(computerPlay(), playerSelection);

        console.log(result[0]);

        if (result[1] === (-1 || 2)) {
            counter ++;
        }
        console.log(counter);
     
    }

    return (counter >= 3 ? `You beat the computer! Your final score is ${counter}` : `You lost to the computer! Your final score is ${counter}`);

}

*/