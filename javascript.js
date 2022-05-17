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

console.log("Hello World");