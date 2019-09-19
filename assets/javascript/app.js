$(document).ready(function() {

    var score = 0;

   //create counter for start of game.
   //reset counter at end of game

   var seconds = 20, $seconds = document.querySelector('#countdown');
(function countdown() {
    $seconds.textContent = seconds + ' second' + (seconds == 1 ?  '' :  's')
    if(seconds --> 0) setTimeout(countdown, 2000)
})();


 
    //create function to select correct answer from each question.



    //add correct answer totals to the Correct Answer Div.
    var correctCount = function(str) {

        var counter = 0; 
        var correctAnswers = ["#customRadioInline3","#customRadioInline8","#customRadioInline10","#customRadioInline13"];
       
        for (let i = 0; i < str.length; i++) {     
           
          if (correctAnswer.indexOf(str[i]) > -1) { 
           
              counter++; 
          }
            
        }   
        return counter
    
    };
});