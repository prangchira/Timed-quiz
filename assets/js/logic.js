//Declare DOM
var Startbutton = document.querySelector("#start");
var StartScreen = document.querySelector("#start-screen");
var Questions = document.querySelector("#questions");
var Qtitle = document.querySelector("#question-title");
var Choices = document.querySelector("#choices");
var Timer = document.querySelector("#time");
var Start = document.querySelector("#button");
var T;                  //declare function T for Timer
var t = 5;              //counter for Timer
var EndScreen = document.querySelector("#end-screen");
var FinalScore = document.querySelector("#final-score");
var Initial = document.querySelector("#initials");
var Submitbutton = document.querySelector("#submit");
var FeedbackScreen = document.querySelector("#feedback");


//clear exisitng localstorage
localStorage.clear();


//When Start Quiz button is click, the timer start
//The first question appears

function startTimer(){
    T = setInterval(function () {
        Timer.textContent = t;
        if(t===0){
            clearInterval(T);
            // loseGame();
        }
        t--;
    },1000) 
}


function startQuiz(){
    
    StartScreen.classList.add('hide');
       AskQ(0);
    }




function AskQ(j){
    Questions.classList.remove('hide');
    Qtitle.textContent = Quiz[j].Q;

    for (var i = 0; i<Quiz[j].ABC.length;i++){
        var ChoiceButton = document.createElement("button");
        ChoiceButton.textContent=Quiz[j].ABC[i];
        Choices.appendChild(ChoiceButton);
    }

}


Startbutton.addEventListener("click", startQuiz)

//When answer is clicked, the next question appears
//If the answer clicked was incorrect then subtract time from the clock

//Check if Choice === Answer

Choices.addEventListener("click", function(e){
    var Chosen = e.target.textContent;
    console.log(Chosen);
    // if (Chosen.textContent === Quiz[0].A){
    //     console.log('correct');         //and to get next Q to pop up
    // }else{
    //     console.log('incorrect');       //and take the time off t
    // }
    
});

function clearChoices() {
    // Remove each created list item from the DOM
    // createdListItems.forEach(function (li) {
    //     Choices.removeChild(li);
    // });

    for (var i = 0; i<Quiz[0].ABC.length;i++){
        Choices.removeChild(ChoiceButton);
    }
}


function score(){
    EndScreen.classList.remove('hide');                     //Unhide the score screen
    FinalScore.textContent = t;                             //Show t as Final score
    Submitbutton.addEventListener("click", function(){      //When click, store score and User initial
        localStorage.setItem("Score", t);
        localStorage.setItem("User initials", Initial.value);
        localStorage.setItem("Gu", Initial.value);
        EndScreen.classList.add('hide');                    //hide the screen after click submit button
    })
}

function feedback(){
    EndScreen.classList.add('hide');

}
