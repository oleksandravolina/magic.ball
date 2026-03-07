const answers = [
"images/yes.png",
"images/no.png",
"images/maybe.png",
"images/later.png",
"images/dfyes.png",
"images/defno.png"
];

function getAnswer(){

const random = Math.floor(Math.random()*answers.length);

document.getElementById("answerImage").src = answers[random];

document.getElementById("home").classList.add("hidden");
document.getElementById("result").classList.remove("hidden");

}

function goBack(){

document.getElementById("result").classList.add("hidden");
document.getElementById("home").classList.remove("hidden");

}
