const answers = [
"Yes",
"No",
"Maybe",
"Ask later",
"Definitely",
"I don't think so",
"Very likely"
];

function getAnswer() {

const random = Math.floor(Math.random() * answers.length);

document.getElementById("answer").innerText = answers[random];

}
