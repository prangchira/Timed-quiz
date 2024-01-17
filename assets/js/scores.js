var HighScore = document.querySelector("#highscores");
var clearHighscoreBtn = document.querySelector("#clear");

// HighScore.textContent = localStorage.getItem("User initials") + localStorage.getItem("Score");

var AddHiScore = document.createElement("li");
HighScore.appendChild(AddHiScore);

AddHiScore.textContent = localStorage.getItem("User initials") + " : " + localStorage.getItem("Score");



clearHighscoreBtn.addEventListener("click", function (){
    HighScore.innerHTML="";
});