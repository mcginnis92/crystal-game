//Define global variables
var currentScore = 0;
var winCounter = 0;
var lossCounter = 0;
var targetScore = 0;
var buttonValues = [];
var crystalBtn = $('.crystalButton');

//Play Game Function
var playGame = function(){

    currentScore = currentScore + (Number($(this).attr('value')));
    $('#scoreBox').text(currentScore);

}

//Start Game Function
function startGame (){
    //Generate random target score between 50-150.
    targetScore = Math.floor(Math.random() * (150 - 50 + 1) ) + 50;
      console.log("target score is", targetScore);

    //Fill array with 4 random numbers between 1-20.
    for (var i = 1, t = 5; i < t; i++) {
        buttonValues.push(Math.round(Math.random() * 20))
        console.log(buttonValues);
    }

    //Assign data attribute of each button to be value of array - FIX THIS
    for (var i = 0; i < buttonValues.length; i++){
        crystalBtn.attr('value', buttonValues[i]);
        crystalBtn.text(buttonValues[i]);//remove this line once everything is working
    }

    //Set up event listener for each button
    $('.crystalButton').on('click', playGame);

}


startGame();

