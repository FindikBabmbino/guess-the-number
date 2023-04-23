
let foundTheNumber = false;
let randomNumber = undefined;
let guessNumber = generateRandomNumber();

document.getElementById("guess-submit").onclick = function(){
    seeIfGuessCorrect();
} 
document.getElementById("reset-submit").onclick =  function () {
    randomNumber = generateRandomNumber();
    foundTheNumber = false;
    document.getElementById("guess-label").innerHTML = "Guess A Number Between 1-10.";
}
  

function seeIfGuessCorrect()
{
    if(foundTheNumber){
        document.getElementById("guess-label").innerHTML = "You already found the number. Press reset game to generate a new number.";
        return;
    }


    if(randomNumber === undefined){
        randomNumber = generateRandomNumber();
    }

    guessNumber = document.getElementById("guess-input").value;

    guessNumber = Number(guessNumber);

    
    if(guessNumber == randomNumber){
        document.getElementById("guess-label").innerHTML = "Congrats! You got the number!";
        foundTheNumber = true;
    }

    else if(guessNumber < randomNumber){
        document.getElementById("guess-label").innerHTML = "Guess Higher!";
    }

    else{
        document.getElementById("guess-label").innerHTML = "Guess Lower!";
    }

}

function generateRandomNumber(){
    randomNumber = Math.floor((Math.random() * 10)+1);
    randomNumber = Number(randomNumber);
    return randomNumber;
}