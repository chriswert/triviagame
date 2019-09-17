$(document).ready(function() {

   var questions = [
       {
       question: "What is the capital of Arizona?",
       answer: "Phoenix"
       },
       {
        question: "What is the capital of Colorado?",
        answer: "Denver"
       }
    ];

    var timerMeaning = 10;

    var score = 0;

    function countdownTimer(seconds){
      
        for (i = seconds; i >= 1; i--){
                setInterval (countdownTimer, 1000);
    }
    };   
  
    countdownTimer(10);




});