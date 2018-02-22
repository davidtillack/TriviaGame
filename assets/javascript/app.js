$(document).ready(function(){

// Set Global Variables
var correctGuesses = 0;
var incorrectGuesses = 0;
var notAnswered = 0;
var intervalId;
var initialTime = 30;
var userGuess = "";
var clockRunning = false;
var questionAssign = [];
var qPick;
var randomqPick;


// Trivia question bank
var questionBank = [
    { 
        question: "Atlantic City is a popular entertainment destination located in what U.S. state?",
        answerChoices: ["California", "Idaho", "Michigan", "New Jersey"],
        userAnswer:3,
    },
    {
        question: "In what city is the historic Arcade shopping mall, which now houses micro-lofts along with its retail shops?",
        answerChoices: ["Providence", "Charlotte", "Boston", "San Francisco"],
        userAnswer:0,
    },
    {
        question: "How many U.S. states border the Gulf of Mexico?",
        answerChoices: ["One", "Two", "Four", "Five"],
        userAnswer:3,
    },
    {
        question: "Which U.S. state has the longest coastline?",
        answerChoices: ["California", "Alaska", "Oregon", "Texas"],
        userAnswer:1,
    },
    {
        question: "Which is the world's highest mountain?",
        answerChoices: ["Makalu", "K2", "Mount Everest", "Kilimanjaro"],
        userAnswer:2,
    },
    {
        question: "How many Great Lakes are there?",
        answerChoices: ["Seven", "Three", "Six", "Five"],
        userAnswer:3,
    }
];

// Game Code =========================================================================

$("#restart").hide();
$("#nextQ").hide();
// On the start button, start the timer and show the user the question(s)
$("#start").on("click",function() {
    displayQuestion();
    runTimer();
    $("#start").hide();
});

//Timer function
function runTimer(){
    if (!clockRunning){
        intervalId = setInterval(countDown,1000);
        clockRunning = true;
    };
    initialTime = 30;
};

// Count the timer down and set game for when timer reaches zero
function countDown(){
    $("#time").html("<h3>Time left: " + initialTime + "</h3>");
    initialTime--;

    if (initialTime === 0){
        notAnswered++;
        stopTimer();
        $("#time").html("<h3>Time's up!</h3>");
        $("#questions").hide();
        $("#nextQ").hide();
        $("h3").empty();
        $("#questions").empty();
        $("#userChoices").hide();
        $("#userStats").append("<h3> Correct Guesses: " + correctGuesses + "</h3>");
        $("#userStats").append("<h3> Incorrect Guesses: " + incorrectGuesses + "</h3>");
        $("#userStats").append("<h3> Questions Left Blank: " + notAnswered + "</h3>");
        $("#restart").show();

        correctGuesses = 0;
        incorrectGuesses = 0;
        notAnswered = 0;
    };
};

// stopTimer function for when time runs out
function stopTimer (){
    clockRunning = false;
    clearInterval(intervalId);
}

// Display question function which contains the question and answer choices and sets the game logic for 
//correct and incorrect question answering.
function displayQuestion(){
    $("#nextQ").hide();
    $("#userChoices").show();
    randomqPick = Math.floor(Math.random()*questionBank.length);
    console.log("test" + randomqPick);
    qPick = questionBank[randomqPick];
    console.log("testA" + qPick);
    console.log("the answer is: " + qPick.userAnswer);
    
    $("#questions").html("<h2>" + qPick.question + "</h2>");
    $("#userChoices").empty();

    for (var i=0; i < qPick.answerChoices.length; i++){
        var userOptions = $("<button>");
        userOptions.addClass("userChoice");
        userOptions.html(qPick.answerChoices[i]);
        userOptions.attr("guessedValue",i);
        $("#userChoices").append(userOptions);
    };

// Upon selecting an answer choice, tell the user if they're right or wrong and
// add that to their user stats for the end
$(".userChoice").on("click",function(){
    userGuess = parseInt($(this).attr("guessedValue"));
    console.log("This is user's guess: " + userGuess);

    if (userGuess === qPick.userAnswer){
        correctGuesses++;
        userGuess="";
        $("#userChoices").html("<p>Correct! Click Next Question</p>"); // Prevents user from guessing again on the question 
        $("#nextQ").show();

    } else {
        incorrectGuesses++; 
        userGuess="";
        $("#userChoices").html("<p>Incorrect! Click Next Question</p>"); // Prevents user from guessing again on the question
        $("#nextQ").show();
    }
});
}


// Display next question function
$("#nextQ").on("click", function(){
    displayQuestion();
    $("#restart").hide();
    $("#nextQ").hide();
});

// Restart game function
$("#restart").on("click", function() {
    $("#questions").empty();
    $("#userChoices").empty();
    $("#questions").show();
    $("#userStats").empty();
    $("#restart").hide();
    $("#nextQ").hide();
    
    for (var i=0; i < questionBank.length; i++){
        questionAssign.push(questionBank[i]);
    };

    runTimer();
    displayQuestion();
});

});