/**
    Javascript For: Quiz
    Author: Anojini
*/

var questions = [{
    "question": "1)Who played 'Beast' in the film adapation of the fairy tale 'Beauty and the Beast'?",
    "option1": "Leonardo DiCaprio",
    "option2": "Dan Stevens",
    "option3": "Tom Cruise",
    "option4": "Christian Bale",
    "answer": "2"
}, {
    "question": "2)What is the name of the character played by Hugh Jackman in nine of the ten X-Men movie franchise films?",
    "option1": "Joker",
    "option2": "Tarzan",
    "option3": "Darth Vader",
    "option4": "Logan",
    "answer": "4"
}, {
    "question": "3)What best describes Paul Newman's Oscar-winning role in 'The Color of Money'?",
    "option1": " Race Car Driver",
    "option2": " Alcoholic Lawyer",
    "option3": "Bank Robber",
    "option4": "Pool Shark",
    "answer": "4"
}, {
    "question": "4)Who is the director of Kong: Skull Island?",
    "option1": "Patty Jenkins",
    "option2" : "Jordan Vogt-Roberts",
    "option3": "Matt Reeves",
    "option4": "Zack Snyder",
    "answer": "2"
}, {
    "question": "5)Which of Wonder Woman's accessories allows her to breathe in outer space?",
    "option1": "Her Earrings",
    "option2": "Her Tiara",
    "option3": "Her Bracelets",
    "option4": "Her Magic Lasso",
    "answer": "1"
}, {
    "question": "6)For which movie did Morgan Freeman receive his very first Oscar nomination?",
    "option1": "Street Smart",
    "option2": "Driving Miss Daisy",
    "option3": "Million Dollar Baby",
    "option4": "The Shawshank Redemption",
    "answer": "1"
}, {
    "question": "7)when did Spider-Man: Homecoming release?",
    "option1": "May 15, 2017",
    "option2": "march 29, 2017",
    "option3": "June 28, 2017",
    "option4": "May 27, 2017",
    "answer": "3"
}, {
    "question": "8)Which film beat out The Wizard of Oz for Best Picture of 1939?",
    "option1": "Wuthering Heights",
    "option2": "Stagecoach",
    "option3": "Gone With the Wind",
    "option4": "Mr. Smith Goes to Washington",
    "answer": "3"
}, {
    "question": "9)Which Disney movie does the Cheshire Cat appear in?",
    "option1": "Frozen",
    "option2": "Alice in Wonderland",
    "option3": "Tangled",
    "option4": "Moana",
    "answer": "2"
}, {
    "question": "10)Which Smurf falls over a lot and accidentally breaks things?",
    "option1": "Clumsy Smurf",
    "option2": "Grouchy Smurf",
    "option3": "Jokey Smurf",
    "option4": "Tracker Smurf",
    "answer": "1"

}];


var currentQuestion=0;
var score=0;
var start;
var end;
var timetaken;
var correctAns=0;
var greetings;

function startQuiz(){
    start = new Date().getTime();
 
  document.getElementById("question").innerHTML=(questions[currentQuestion].question);
   document.getElementById("opt1").innerHTML= (questions[currentQuestion]).option1;
   document.getElementById("opt2").innerHTML= (questions[currentQuestion]).option2;
   document.getElementById("opt3").innerHTML= (questions[currentQuestion]).option3;
   document.getElementById("opt4").innerHTML= (questions[currentQuestion]).option4;
currentQuestion++;
}

function loadNextQuestion(){
    
     if(currentQuestion>9){
         end = new Date().getTime();
         timeTaken = end - start;
         var min = Math.floor( (timeTaken/1000/60) % 60 );
         var sec = Math.floor( (timeTaken/1000) % 60 );
         congrats();
         document.getElementById("result").innerHTML="Your score is "+score+"<br/>Time taken: "+min+"minutes "+sec+"seconds</br>Answered "+correctAns+" out of 10 correctly</br>"+greetings;
         document.getElementById("result").style.display='';
    
   }
    
    if(currentQuestion==9){
        nextButton.textContent = "Finish";
    }
    
    var selectedOption = document.querySelector('input[type=radio]:checked');
    
    if(selectedOption){

        if(selectedOption.value==(questions[currentQuestion].answer)){
            score+=2;
            correctAns+=1;
        }else{
            score-=1;
        }
        selectedOption.checked=false;
        }else{
            alert("Please select an answer!");
            return;
        }
   document.getElementById("question").innerHTML=(questions[currentQuestion].question);
   document.getElementById("opt1").innerHTML= (questions[currentQuestion]).option1;
   document.getElementById("opt2").innerHTML= (questions[currentQuestion]).option2;
   document.getElementById("opt3").innerHTML= (questions[currentQuestion]).option3;
   document.getElementById("opt4").innerHTML= (questions[currentQuestion]).option4;

   currentQuestion++;
    
    function congrats(){
        if(correctAns==10){
            greetings="Welldone!!! You got the highest score";
        }else{
            greetings="Good Job! Try Again to get highest score";
        }
    }
}
