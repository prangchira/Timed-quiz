//Declare DOM
var Startbutton = document.querySelector("#start");
var StartScreen = document.querySelector("#start-screen");
var Questions = document.querySelector("#questions");
var Qtitle = document.querySelector("#question-title");
var Choices = document.querySelector("#choices");
var Timer = document.querySelector("#time");
var Start = document.querySelector("#button");
var EndScreen = document.querySelector("#end-screen");
var FinalScore = document.querySelector("#final-score");
var Initial = document.querySelector("#initials");
var Submitbutton = document.querySelector("#submit");
var FeedbackScreen = document.querySelector("#feedback");
var T;                  //to declare function T for Timer
var t = 30;             //counter for Timer
var penalty = 2;        //penalty to subtract from Time t if wrong answer is clicked
var QIndex = 0;
var PlayerScore;
var StoredHighScore;

function startTimer(){
    T = setInterval(function () {
        if(t <= 0){
            t=0;                            //if t <=0, set time to 0 to display then get score page up
            Timer.textContent = t;
            clearInterval(T);
            score();
        }
        if(QIndex===Quiz.length){           //If get to the last question, stop the timer
            clearInterval(T);
        }
        Timer.textContent = t;
        t--;
    },1000) 
}


function startQuiz(){                       //When called, start Timer and ask questino
    startTimer();
    StartScreen.classList.add('hide');
    AskQ(QIndex);
}


function AskQ(){
    FeedbackScreen.classList.add('hide');
    if(QIndex===Quiz.length){               //check if get to the last Question, if so then early return
        return;
    }
    Choices.innerHTML="";                   //clear the previous question choices, if any
    Questions.classList.remove('hide');     //Unhide question box
    Qtitle.textContent = Quiz[QIndex].Q;    //Display question title base on Question index

    for (var i = 0; i<Quiz[QIndex].ABC.length;i++){             //for loop to create and display choices button for each question
        var ChoiceButton = document.createElement("button");
        ChoiceButton.textContent=Quiz[QIndex].ABC[i];
        Choices.appendChild(ChoiceButton);
    }
}


function CheckAnswer(event){
    var Chosen = event.target.textContent;              //assign the value in button clicked to variable Chosen
    
    if (Chosen !== Quiz[QIndex].A){                     //check if the answer chose is wrong
        FeedbackScreen.textContent = 'Wrong!'
        playInCorrectAudio();                           //call function to play incorrect.wav audio
        t = t-penalty;                                  //take 10 sec out from time, when wrong question is chosen
    }else{
        FeedbackScreen.textContent = 'Correct!'         //Otherwise, display Correct when the answer is correct
        playCorrectAudio();                             //call function to play correct.wav audio
    }
    FeedbackScreen.classList.remove('hide');            //unhide feedback screen to say Correct! or Wrong!
    QIndex++;                                           //increase the Question index to move to the next Q
    if(QIndex===Quiz.length){                           //if get to the last question, display score screen
        setTimeout(function() {                         //SetTimeout to display the feedback for 2sec before the score
            score();                                    //call AskQ to ask the next question
         }, 2000);                                          
        
    }
    setTimeout(function() {                             //SetTimeout to delay the next Question by 2sec to display feedback
       AskQ(QIndex);                                    //call AskQ to ask the next question
    }, 2000);                                      
};

function score(){
    StartScreen.classList.add('hide');                      //hide Startscreen
    FeedbackScreen.classList.add('hide');                   //hide feedback
    Questions.classList.add('hide');                        //hide question
    EndScreen.classList.remove('hide');                     //Unhide the score screen
    FinalScore.textContent = t+1;                           //Show Final score
}

function SaveScore(){                                       //When click, store score and User initial
    if (Initial.value.trim().length>3){                   //Check if Initial value is 3 digit
        alert("Please input up to 3 Characters as your Initials");
    }else if (Initial.value===''){                   //Check if Initial value is 3 digit
        alert("Please input your Initials");
    }else
    {
        PlayerScore = {Initial: Initial.value, Time: t+1}
        StoredHighScore = JSON.parse(localStorage.getItem('StoredHighScore')) || [];    //Get StoredHighScore from localStorgae, if not exist, set to empty array
        StoredHighScore.push(PlayerScore);                                              //Push new PlayerScore to StoredHighScore
        localStorage.setItem('StoredHighScore', JSON.stringify(StoredHighScore));       //save the new StoredHighScore
        
        EndScreen.classList.add('hide');                                //hide the screen after click submit button
    }   
}

function playCorrectAudio(){
    var audio = new Audio('./assets/sfx/correct.wav');
    audio.play();
    }
    
    function playInCorrectAudio(){
        var audio = new Audio('./assets/sfx/incorrect.wav');
        audio.play();
    }

Startbutton.addEventListener("click", startQuiz)        //When Start Quiz button is clicked, the timer start & the first question appears
Choices.addEventListener("click", CheckAnswer);         //When Choices button is clicked, select answer and check the Answer if correct
Submitbutton.addEventListener("click", SaveScore)       //When Submitbutton is cliceked, save the score

