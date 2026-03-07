const answers = [
"Yes",
"No",
"Very likely",
"Ask later",
"Definitely",
"Uncertain",
"The stars say yes"
];

function getAnswer(){

const random = Math.floor(Math.random()*answers.length);

document.getElementById("answer").innerText = answers[random];

}
