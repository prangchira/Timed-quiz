var HighScore = document.querySelector("#highscores");
var clearHighscoreBtn = document.querySelector("#clear");
var HiScoreLi;
var SortHighScore = [];

ShowHighScore();

JSON.parse(localStorage.getItem('StoredHighScore'))


function ShowHighScore(){
    SortHighScore = JSON.parse(localStorage.getItem('StoredHighScore'));    //Get StordHighScore from localStorage
    SortHighScore.sort(function (a, b) {                                    //Sort Time score in decending order
        return b.Time - a.Time;
    });
    for (var i =0;i<SortHighScore.length;i++){                              //For loop to create li according to length of SortHighScore and display textContent and append
        HiScoreLi = document.createElement("li");
        HiScoreLi.textContent=SortHighScore[i].Initial+ ' - '+SortHighScore[i].Time;    
        HighScore.appendChild(HiScoreLi);
    }

}


clearHighscoreBtn.addEventListener("click", function (){                    //if Click clear high score button, clear local storage and delete the li in html
    HighScore.innerHTML="";
    localStorage.clear()
});


