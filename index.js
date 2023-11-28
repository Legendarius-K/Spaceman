
window.addEventListener("load", function () { //I still don't know what this does, but it made the page load properly, so it stays =D

let wordBank = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto", "comet", "moon", "eclipse", "supernova", "star", "sun",];

const randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

let userLetter;

const userGuess = () => {
    let userLetter = prompt(`Guess a letter! \n\n ${wordUnderscore.join("  ")} \n\n You have ${lives} lives left`)
}

letterArray = randomWord.split("");

let wordUnderscore = Array(randomWord.length).fill("_");

let lives;

let letterCounter = 0;

randomWord.length < 5 ? lives = 13 
    : randomWord.length < 7 ? lives = 15
    : lives = 17;



alert(`Welcome to SPACEMAN! \n \nThe spaceman is lost in outer space. Help him plot his course back to his solar system by finding a landmark to follow.`)
alert(`The word you are looking for is ${randomWord.length} letters long. \n ${wordUnderscore.join("  ")}`);



while (lives > 0) {

    let correct = false;
    userGuess()

    if (userLetter === null) {
        prompt(`Do you really want to abandon the Spaceman?`)
        if (userLetter === null) {
            userGuess()
        } else {
            prompt(`Okay then, you'll have to live with that, you monster.`)
        }
    }

    for (i = 0; i <= randomWord.length; i++) {
        
        if (userLetter === randomWord[i]) {
            wordUnderscore[i] = userLetter;
            letterCounter++;
            correct = true;
        }    
    }

    if (correct) {
        alert(`CONGRATULATIONS! You guessed correctly! \n ${wordUnderscore.join("  ")}`);   
    } else {
        alert(`That was WRONG! You lose 1 life`);
        lives -= 1;
    }

    if (letterCounter === randomWord.length) {
        alert(`GOOD JOOB! The spaceman found earth!`);
        break;
    } 

}



if (lives === 0) {
    let tryAgain = prompt(`GAME OVER!\n\nDo you want to try again?\n\nType "yes" or "no"`).toLowerCase();

    if (tryAgain === "yes") {
        location.reload();
    } else {
        alert(`Too bad! The spaceman will float around in the infinite void for eternity...`)
    }
}














});