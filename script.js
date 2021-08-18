var startButton = document.getElementById("startBtn"); 
var startDiv = document.querySelector(".start");
var questionOne = document.querySelector("#questionOne");
var questionTwo = document.querySelector("#questionTwo");
var questionThree = document.querySelector("questionThree")
var questionFour = document.querySelector("questionFour")
var answers = document.querySelectorAll('.answers');
var score=0;

startButton.addEventListener("click", function() {
    startDiv.classList.add("hidden");
    questionOne.classList.remove('hidden');
})

for (var i = 0; i < answers.length; i++) {
    answers[i].addEventListener('click', function(event) {
        console.log(event.target.value);
        questionOne.classList.add('hidden');
        questionTwo.classList.remove('hidden');
        if (event.target.value == "correct") {
            score ++;
        }
        console.log(score);
        document.getElementById('score').innerHTML =score;
    })
      
}



