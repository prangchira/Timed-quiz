# Timed-quiz
Timed coding quiz with multiple-choice questions

## Features:
In this project, I coded an interactive multiple choice Quiz with the following features:

- User presses button to start quiz, clicks to select answer. 
- Feedback comment and audio are played depending whether the answer was correct or incorrect. 
- If an answer is incorrect, some point are deducted in the form of time left. 
- Quiz finishes when all the questions are answered or when the time runs out. The remaining time is the user's score. 
- User inputs their intials to save their score. 
- User can click to see highscore in decending order and can start over.
- User can clear highscore.


## Animated example:
![Animation of code quiz. User presses button to start quiz, clicks to select answer. Feedback comment and audio are played depending whether the answer was correct or incorrect. Quiz finishes, User inputs their intials and can click to see highscore and start over.](./assets/animation/sample.gif)


## File Structure

### questions.js
The question sets are stored in the "questions.js" file. I setup the Quiz object in such way that User can add more questions and have flexbility over the number answer choices that is not restricted to a fixed number. I think this make it more user friendly. 

### logic.js
This script file controls interactive features for the main index.html page ie the timed feature, display question, take input answer when the user click, check the answer and display feedback and audio as well as the end page where user input their initial to store their score. 

### scores.js
This script file adds interactive features for the highscores.html page ie sort and show the high score and feature to clear high score.

### styles.css
This css file set the styling of the page. 

### highscores.html
This is the page that display high score record. 

### index.html
This is the main landing page where Quiz starts


## Credit:
There were a number of steps I found challenging in this project and I would like to credit and thank Tutor Samuel Cordova and TA Asia who helped me navigate through:
- Manual iteration loop (as the for loop didn't work - well, more accurately I didn't get it to work...) 
- Set and Get data from LocalStorage and sort the data in decending order
- addEventListener to link up interactive features

Finally, the questions in the Example Quiz were written by ChatGPT :)


## Licenses
MIT License

Copyright (c) 2023 prangchira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
