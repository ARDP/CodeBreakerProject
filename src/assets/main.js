let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById("message");

function guess() {
  let input = document.getElementById('user-guess');
  //add functionality to guess function here
}

//implement new functions here

function setHiddenFields() {
  if (attempt.toString === "") {
    attempt = 0;
  }

  if (answer.toString === "") {
    answer = Math.floor(Math.random(0, 9999));
  }

  while (answer.toString().length() > 4) {
    answer += "0";
  }
}

function setMessage(param) {

  message.innerHTML = param;

}

function validateInput(param){
if (param.length === 4)
return true;
else {
  setMessage("Guesses must be exactly 4 characters long.");
  return false;
}
}
