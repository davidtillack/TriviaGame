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

var questionBank = [
    { 
    question: "Atlantic City is a popular entertainment destination located in what U.S. state?",
    answerChoices: ["California", "Idaho", "Michigan", "New Jersey"],
    userAnswer:3,
    image: "https://s7.bluegreenvacations.com/is/image/BGV/cityscapes-atlantic-city-new-jersey-boardwalk-at-night-01?$bgv-gallery-main$"
    },
    {
    question: "In what city is the historic Arcade shopping mall, which now houses micro-lofts along with its retail shops?",
    answerChoices: ["Providence", "Charlotte", "Boston", "San Francisco"],
    userAnswer:0,
    image: "https://media-cdn.tripadvisor.com/media/photo-o/04/18/8b/74/providence-river-boat.jpg"
    },
    {
    question: "How many U.S. states border the Gulf of Mexico?",
    answerChoices: ["One", "Two", "Four", "Five"],
    userAnswer:3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/US_map-Gulf_Coast.svg/1200px-US_map-Gulf_Coast.svg.png"
    },
    {
    question: "Which U.S. state has the longest coastline?",
    answerChoices: ["California", "Alaska", "Oregon", "Texas"],
    userAnswer:1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Alaska_in_United_States_%28US50%29.svg/250px-Alaska_in_United_States_%28US50%29.svg.png"  
    },
    {
    question: "In which state of the United States would you find Fort Knox?",
    answerChoices: ["Tennessee", "Virginia", "Kentucky", "South Carolina"],
    userAnswer:2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJj8HPsjGx4dqMMwUXQtTrNGh25h1vLYodGujs-25FBEtB1DjC"  
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