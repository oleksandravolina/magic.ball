const answers = [
"Yes",
"No",
"Very likely",
"Ask later",
"Definitely",
"The stars say yes",
"Uncertain"
];

function getAnswer(){

const answerBox = document.getElementById("answer");

answerBox.style.opacity = 0;
answerBox.innerText = "";

document.querySelector(".container").classList.add("shake");

setTimeout(()=>{

const random = Math.floor(Math.random()*answers.length);

answerBox.innerText = answers[random];
answerBox.style.opacity = 1;

document.querySelector(".container").classList.remove("shake");

},800);

}
