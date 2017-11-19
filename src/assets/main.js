let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById("message");
let results = document.getElementById("results");
let code = document.getElementById("code");
let guessingDiv = document.getElementById("guessing-div");
let replayDiv = document.getElementById("replay-div");

function guess() {
  let input = document.getElementById('user-guess');
  if ((answer.value.length === 0) || (attempt === 0)) {
    setHiddenFields();
  }
  //add functionality to guess function here
  if (!validateInput(input.value)) {
    return;
  } else {
    attempt += 1;
  }
  var result = getResults(input.value);
  if (!result && attempt >= 10) {
    setMessage("You Lose! :(");
    showAnswer(false);
    showReplay();
  }  else if(!result)
    {
        setMessage("Incorrect, try again.");
    }
   else {
    setMessage("You Win! :)");
    showAnswer(true);
    showReplay();
  }
};

//implement new functions here

function setHiddenFields() {
  if (attempt.value.length === 0) {
    attempt = 0;
  }
  if (answer.value.length === 0) {
    answer.value = Math.floor(Math.random() * 10000);
  }
  while (answer.value.toString().length > 4) {
    answer.value += "0";
  }
};

function setMessage(param) {
  message.innerHTML = param;
};

function validateInput(param) {
  if (param.length === 4)
    return true;
  else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
};

function getResults(param) {
  var win = false;
  var text = '<div class="row"><span class="col-md-6">' + param + '</span><div class="col-md-6">';
  for (var i = 0; i < param.length; i++) {
    if (param.charAt(i) === answer.value.charAt(i)) {
      text += '<span class = "glyphicon glyphicon-ok" > </span>';
    } else if (param.charAt(i).indexOf(answer.value) === true) {
      text +='<span class = "glyphicon glyphicon-transfer"> </span>';
    } else {
     text+=  '<span class = "glyphicon glyphicon-remove" > </span>';
    }
  }
  '</div>'

results.innerHTML += text;
  if (param === answer.value) {
    return true;
  } else {
    return false;
  }
};

function showAnswer(param) {
  code.innerHTML = answer.value;
  if (param === true) {
    code.className = "success";
  } else {
    code.className = "failure";
  }
};

function showReplay() {
  guessingDiv.style.display = "none";
  replayDiv.style.display = "block";
};
