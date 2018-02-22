$(document).ready(function(){

// Set Global Variables

var wins = 0;
var losses = 0;
var gameNumber = 0;
var correctGuesses = 0;
var incorrectGuesses = 0;
var intervalId;
var initialTime = 30;
var userGuess = "";
var clockRunning = false;
var questionAssign = [];
var qPick;
var randomqPick;

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
    question: "In which state of the United States would you find Fort Knox?",
    answerChoices: ["Tennessee", "Virginia", "Kentucky", "South Carolina"],
    userAnswer:2,
    }
];

// Game Code =========================================================================

$("#restart").hide();
// On the start button, start the timer and show the user the question(s)
$("#start").on("click",function() {
    displayQuestion();
    runTimer();
    $("#start").hide();
    $("#restart").show();
});

function runTimer(){
    if (!clockRunning){
        intervalId = setInterval(countDown,1000);
    clockRunning = true;
    };
    initialTime = 30;
};

function countDown(){
    $("#time").html("<h3>Time left: " + initialTime + "</h3>");
    initialTime--;
    if (initialTime === 0){
        clockRunning = false;
        clearInterval(intervalId);
        incorrectGuesses++;
        $("#time").html("<h3>Time's up!</h3>");
        // gameStats();
    };
};

$("#restart").on("click", function() {
    $("#questions").empty();
    $("#userChoices").empty();
    
    for (var i=0; i < questionBank.length; i++){
        questionAssign.push(questionBank[i]);
    };

    runTimer();
    displayQuestion();
});


function displayQuestion(){
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

$(".userChoice").on("click",function(){
    userGuess = parseInt($(this).attr("guessedValue"));
    console.log("This is user's guess: " + userGuess);
    if (userGuess === qPick.userAnswer){
        alert("testR");
        // stop();
        // correctGuesses++;
        // userGuess="";
        // alert("test");
        // $("#userChoices").html("<p>Correct!</p>");
    } else {
        // stop();
        // incorrectGuesses++;
        // userGuess="";
        alert("testW");
        // $("#userChoices").html("<p> Wrong guess. Answer is: " + qPick.answerChoices[qPick.userAnswer] + "</p>");

    };

});

}

// function gameStats(){
//     if (){

//     } else {
//         runTimer();
//         displayQuestion();
//     }
// }

});