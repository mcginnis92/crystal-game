//Define global variables
var currentScore = 0;
var winCounter = 0;
var lossCounter = 0;
var targetScore = 0;
var crystalBtn = $('.crystalButton');

//Start Game Function
function startGame (){
    currentScore = 0;
    $('#scoreBox').text(currentScore);

    $('#wins').text(winCounter);
    $('#losses').text(lossCounter);

    //Generate random target score between 50-150.
    targetScore = Math.floor(Math.random() * (150 - 50 + 1) ) + 50;
      console.log("target score is", targetScore);
      $('#scoreTarget').text(targetScore);

    //Fill array with 4 random numbers between 1-20.
    var buttonValues = [];
    for (var i = 0; i < 4; i++) {
        buttonValues.push(Math.round(Math.random() * 20))
        console.log(buttonValues);
    }
        $('#button1').attr('value', buttonValues[0]);
        $('#button1').text(buttonValues[0]);

        $('#button2').attr('value', buttonValues[1]);
        $('#button2').text(buttonValues[1]);

        $('#button3').attr('value', buttonValues[2]);
        $('#button3').text(buttonValues[2]);

        $('#button4').attr('value', buttonValues[3]);
        $('#button4').text(buttonValues[3]);
        
}


startGame();

//Play Game Function
var playGame = function(){

    currentScore = currentScore + (Number($(this).attr('value')));
    $('#scoreBox').text(currentScore);

    //check if currentScore = targetScore
    if (currentScore === targetScore){
        alert('you win!');
        winCounter++;
        $('#wins').text(winCounter);
        startGame();
    }
    else if(currentScore < targetScore){
        //play again
    }
    else if(currentScore > targetScore){
        alert('Whoops! Your score exceeded the target. Try again!')
        lossCounter++;
        $('#losses').text(lossCounter);
        startGame();
    }
}

//Set up event listener for each button
$('.crystalButton').on('click', playGame);
