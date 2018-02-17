$(document).ready(function(){

// Set Global Variables

var wins = 0;
var losses = 0;
var gameNumber = 0;
var correctGuesses = 0;
var incorrectGuesses = 0;
var intervalId;
var initialTime = 40;
var userGuess = "";
var clockRunning = false;
var questionAssign = [];

var questionBank = [
    { 
    question: "Who leads SpaceX?",
    answerChoices: ["Elon Musk", "Michael Jackson"],
    userAnswer:0,
    image: "https://cdn.cnn.com/cnnnext/dam/assets/161221145423-cnn-heroes-thumb-elon-musk-full-169.jpg"
    },
    {
    question: "Question 2?",
    answerChoices: ["Elon Musk", "Michael Jackson"],
    userAnswer:0,
    image: "https://cdn.cnn.com/cnnnext/dam/assets/161221145423-cnn-heroes-thumb-elon-musk-full-169.jpg"
    }
];

// Game Code =========================================================================


// On the start button, start the timer and show the user the question(s)
$("#start").on("click",function() {
    $("#start").hide();
    displayQuestion();
    runTimer();
    
    for (var i=0; i< questionBank.length; i++){
        questionAssign.push(questionBank[i]);
    };
});

function runTimer(){
    if (!clockRunning){
        intervalId = setInterval(countDown,1000);
    clockRunning = true;
    };
};

function countDown(){
    $("#time").html("<h3>Time left: " + initialTime + "</h3>");
    initialTime--;
    if (initialTime === 0){
        clockRunning = false;
        clearInterval(intervalId);
        $("#time").html("<h3>Time's up!</h3>");
    };
};

function displayQuestion(){
    var randomqPick = Math.floor(Math.random()*questionBank.length);
    var pick = questionBank[randomqPick];
    $("#questions").html("<h2>" + pick.question + "</h2>");
};

});