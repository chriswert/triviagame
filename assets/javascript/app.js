$(document).ready(function() {

var score = 0;

   //create counter for start of game.
   //reset counter at end of game

var seconds = document.getElementById('countdown').textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById('countdown').textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 3000),
});