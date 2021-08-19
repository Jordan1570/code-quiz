var startButton = document.getElementById("startBtn");
var startDiv = document.querySelector(".start");
var questionOne = document.querySelector("#questionOne");
var questionTwo = document.querySelector("#questionTwo");
var questionThree = document.querySelector("#questionThree");
var questionFour = document.querySelector("#questionFour");
var questionFive = document.querySelector("#questionFive");
var questionSix = document.querySelector("#questionSix");
var questionSeven = document.querySelector("#questionSeven");
var answersOne = document.querySelectorAll('.answersOne');
var answersTwo = document.querySelectorAll('.answersTwo');
var answersThree = document.querySelectorAll('.answersThree');
var answersFour = document.querySelectorAll('.answersFour');
var answersFive = document.querySelectorAll('.answersFive');
var answersSix = document.querySelectorAll('.answersSix');
var answersSeven = document.querySelectorAll('.answersSeven');
var scoreList = document.querySelector('#scoreList');
var score = 0;
var initialTime = 50;
var timeElapsed = 0;
var interval =
    console.log(localStorage.getItem('scores'));
var highScores = [];
var timer 
var timerEl = document.querySelector("#timer")

function renderTime() {
    timerEl.textContent = initialTime
    initialTime--
    console.log(initialTime);
    if (initialTime <= 0) {
        console.log('stop timer');
        clearInterval(timer);
    }
}

highScores.push(localStorage.getItem('scores'));
startButton.addEventListener("click", function () {
    startDiv.classList.add("hidden");
    questionOne.classList.remove('hidden');
    timer=setInterval(renderTime, 1000);
})

for (var i = 0; i < answersOne.length; i++) {
    answersOne[i].addEventListener('click', function (event) {
        console.log(event.target.value);
        questionOne.classList.add('hidden');
        questionTwo.classList.remove('hidden');
        if (event.target.value == "correct") {
            score++;
        } else {
            initialTime=initialTime-10;
        }
        //console.log(score);
        document.getElementById('score').innerHTML = score;
    })

}

for (var i = 0; i < answersTwo.length; i++) {
    answersTwo[i].addEventListener('click', function (event) {
        console.log(event.target.value);
        questionTwo.classList.add('hidden');
        questionThree.classList.remove('hidden');
        if (event.target.value == "correct") {
            score++;
        } else {
            initialTime=initialTime-10;
        }
        
        console.log(score);
        document.getElementById('score').innerHTML = score;
    })

}

for (var i = 0; i < answersThree.length; i++) {
    answersThree[i].addEventListener('click', function (event) {
        console.log(event.target.value);
        questionThree.classList.add('hidden');
        questionFour.classList.remove('hidden');
        if (event.target.value == "correct") {
            score++;
        } else {
            initialTime=initialTime-10;
        }
        console.log(score);
        document.getElementById('score').innerHTML = score;
    })

}

for (var i = 0; i < answersFour.length; i++) {
    answersFour[i].addEventListener('click', function (event) {
        console.log(event.target.value);
        questionFour.classList.add('hidden');
        questionFive.classList.remove('hidden');
        if (event.target.value == "correct") {
            score++;
        } else {
            initialTime=initialTime-10;
        }
        console.log(score);
        document.getElementById('score').innerHTML = score;
    })

}

for (var i = 0; i < answersFive.length; i++) {
    answersFive[i].addEventListener('click', function (event) {
        console.log(event.target.value);
        questionFive.classList.add('hidden');
        questionSix.classList.remove('hidden');
        if (event.target.value == "correct") {
            score++;
        } else {
            initialTime=initialTime-10;
        }
        console.log(score);
        document.getElementById('score').innerHTML = score;
    })

}

for (var i = 0; i < answersSix.length; i++) {
    answersSix[i].addEventListener('click', function (event) {
        console.log(event.target.value);
        questionSix.classList.add('hidden');
        questionSeven.classList.remove('hidden');
        if (event.target.value == "correct") {
            score++;
        } else {
            initialTime=initialTime-10;
        }
        console.log(score);
        document.getElementById('score').innerHTML = score;
    })

}

for (var i = 0; i < answersSeven.length; i++) {
    answersSeven[i].addEventListener('click', function (event) {
        console.log(event.target.value);
        questionSeven.classList.add('hidden');
        scoreList.classList.remove('hidden');
        if (event.target.value == "correct") {
            score++;
        } else {
            initialTime=initialTime-10;
        }
        console.log(score);
        document.getElementById('finalScore').innerHTML = score;
    })

}

var saveBtn = document.getElementById('save');
var initials = document.getElementById('initials');
saveBtn.addEventListener('click', function (event) {
    console.log(initials.value);
    highScores.push(`${initials.value} : ${score}`);
    localStorage.setItem('scores', highScores);
})





