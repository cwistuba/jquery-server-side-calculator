let operator;
let history;

$(document).ready(init);

function init() {
  console.log("DOM is ready");
  getNumberHistory();

  $(".js-btn-clear").on("click", clearInputs);
  $(".js-btn-equals").on("click", submitInput);
  $(".js-btn-mathOperator").on("click", function(event) {
    operator = event.target.innerHTML;
    console.log(operator);
  });
}

//
//EVENT HANDLERS
// -------------

function clearInputs() {
  console.log("clicked");

  $(".js-input-firstNumber").val("");
  $(".js-input-secondNumber").val("");
}

function submitInput() {
  console.log("clicked!");

  const newItem = {
    num1: $(".js-input-firstNumber").val(),
    num2: $(".js-input-secondNumber").val(),
    operator: operator,
    output: ""
  };

  postInput(newItem);
}

//
// API INTERACTIONS / AJAX CALLS
// -----------------------------
function postInput(inputData) {
  $.ajax({
    method: "POST",
    url: "/numberhistory",
    data: inputData
  })
    .then(response => {
      console.log(response);
      getNumberHistory();
    })
    .catch(err => {
      console.log("err");
      alert("There was an error!!");
    });
}

function getNumberHistory() {
  $.ajax({
    method: "GET",
    url: "/numberhistory"
  })
    .then(response => {
      history = response;
      console.log(history);
      render();
    })
    .catch(err => {
      console.log("err");
    });
}

//
// RENDER
// -------

function render() {
  console.log("RENDER INVENTORY");
  $(".js-equationList").empty();
  for (let i = 0; i < history.length; i++) {
    let result = history[i];
    $(".js-equationList").append(`
    <li>${result.num1}${result.operator}${result.num2}=${result.output}</li>
    `);
  }
  const lastIndex = history[history.length - 1];
  if (lastIndex != undefined) {
    $(".js-result").text(`
    ${lastIndex.output}
  `);
  }
}
