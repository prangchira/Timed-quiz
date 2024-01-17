//Declare DOM
var Startbutton = document.querySelector("#start");
var StartScreen = document.querySelector("#start-screen");
var Questions = document.querySelector("#questions");
var Qtitle = document.querySelector("#question-title");
var Choices = document.querySelector("#choices");
var Timer = document.querySelector("#time");
var Start = document.querySelector("#button");
var T;                  //declare function T for Timer
var t = 50;              //counter for Timer
var EndScreen = document.querySelector("#end-screen");
var FinalScore = document.querySelector("#final-score");
var Initial = document.querySelector("#initials");
var Submitbutton = document.querySelector("#submit");
var FeedbackScreen = document.querySelector("#feedback");
// var Chosen;

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


async function startQuiz(){
    startTimer();
    StartScreen.classList.add('hide');
    for(var j = 0;j<Quiz.length;j++){
    // for(var j = 0;j<1;j++){
        AskQ(j);
        await CheckAnswer(j);
    }    
    score();
}



function AskQ(j){
    Choices.innerHTML="";
    FeedbackScreen.classList.add('hide');
    Questions.classList.remove('hide');
    Qtitle.textContent = Quiz[j].Q;

    for (var i = 0; i<Quiz[j].ABC.length;i++){
        var ChoiceButton = document.createElement("button");
        ChoiceButton.textContent=Quiz[j].ABC[i];
        Choices.appendChild(ChoiceButton);
    }
}


function CheckAnswer(j){
    return new Promise(resolve => {
    Choices.addEventListener("click", function(e){
    var Chosen = e.target.textContent;
    FeedbackScreen.textContent = ''
    FeedbackScreen.classList.remove('hide');
    if (Chosen === Quiz[j].A){
        console.log('correct')
        FeedbackScreen.textContent = 'Correct!'
        CheckAnswer = true;
    }else{
        console.log('wrong')
        FeedbackScreen.textContent = 'Wrong!'
        t = t-10;
    }
    resolve();
});
});
}


// function feedback(j){
//     FeedbackScreen.textContent = ''
//     FeedbackScreen.classList.remove('hide');
//     console.log(Chosen);
//     console.log(Quiz[j].A);
//     if (Chosen === Quiz[j].A){
//         console.log('correct')
//         FeedbackScreen.textContent = 'Correct!'
//         CheckAnswer = true;
//     }else{
//         console.log('wrong')
//         FeedbackScreen.textContent = 'Wrong!'
//         t = t-10;
//     }
// }





Startbutton.addEventListener("click", startQuiz)

//When answer is clicked, the next question appears
//If the answer clicked was incorrect then subtract time from the clock

//Check if Choice === Answer



function score(){
    StartScreen.classList.add('hide');
    FeedbackScreen.classList.add('hide');
    Questions.classList.add('hide');
    EndScreen.classList.remove('hide');                     //Unhide the score screen
    FinalScore.textContent = t;                             //Show t as Final score
    Submitbutton.addEventListener("click", function(){      //When click, store score and User initial
        localStorage.setItem("Score", t);
        localStorage.setItem("User initials", Initial.value);
        EndScreen.classList.add('hide');                    //hide the screen after click submit button
    })
}


