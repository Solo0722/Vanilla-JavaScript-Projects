const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
const audio2 = document.getElementById("myAudio2");

var answer = 0;

function generateEquation() {
    var num1 = Math.floor(Math.random() * 13);
    var num2 = Math.floor(Math.random() * 13);
    var dummyanswer1 = Math.floor(Math.random() * 13);
    var dummyanswer2 = Math.floor(Math.random() * 13);

    var allAnswers = [];
    var switchAnswers = [];

    answer = num1 + num2;
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnswers = [answer, dummyanswer1, dummyanswer2];

    for (i = allAnswers.length; i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];

}

option1.addEventListener("click", function () {
    if (option1.innerHTML == answer) {
        audio2.play()
        generateEquation()
    }
    else {
        audio.play();
    }
});

option2.addEventListener("click", function () {
    if (option2.innerHTML == answer) {
        audio2.play()
        generateEquation()
    }
    else {
        audio.play();
    }
});

option3.addEventListener("click", function () {
    if (option3.innerHTML == answer) {
        audio2.play()
        generateEquation()
    }
    else {
        audio.play();
    }
});


generateEquation();






