let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById("message");
let results = document.getElementById("results");
let code = document.getElementById("code");
let guessingDiv = document.getElementById("guessing-div");
let replayDiv = document.getElementById("replay-div");

function guess() {
  let input = document.getElementById('user-guess');
  //add functionality to guess function here
  if (!validateInput(input.value)) {
    return;
  } else {
    attempt += 1;
  }

  if (!getResults(input.value) && attempt >= 10) {
    setMessage("You Lose! :(");
    showAnswer(false);
    showReplay();
  } else {
    setMessage("You Win! :)");
    showAnswer(true);
    showReplay();
  }
};

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
    for (var i = 0; i <= param.length; i++) {
      if param.charAt(i) === answer.charAt(i) {
        text += '<span class = "glyphicon glyphicon-ok" > </span>';
      } else if param.charat(i).indexOf(answer) {
        '<span class = "glyphicon glyphicon-transfer"> </span>';
      } else {
        '<span class = "glyphicon glyphicon-remove" > </span>';
      }
    }
    '</div>'

    if (param === answer) {
      return true;
    } else {
      return false;
    }
  };

  function showAnswer(param) {
    code.innerHTML = answer.value;
    if (param === true){
      code.className = "success";
    }else {
      code.className = "failure";
    }
  };

  function showReplay(){
    guessingDiv.style.display = "none";
    replayDiv.style.display = "block";
  };
