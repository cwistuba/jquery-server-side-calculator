let operator;

$(document).ready(init);

function init() {
  console.log("DOM is ready");

  //   getCalculations();
  $(".js-btn-equals").on("click", submitInput);
  $(".js-btn-mathOperator").on("click", function(event) {
    operator = event.target.innerHTML;
    console.log(operator);
  });
}

//
//EVENT HANDLERS
// -------------

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
    })
    .catch(err => {
      console.log("err");
      alert("There was an error!!");
    });
}

// function getCalculations() {
//   $.ajax({
//     method: "GET",
//     url: "/numberhistory"
//   })
//     .then(response => {
//       render(response);
//     })
//     .catch(err => {
//       console.log("err");
//       alert("There was an error finding.");
//     });
// }

//
// RENDER
// -------

function render(equationList) {
  console.log("RENDER INVENTORY");
  $(".js-equationList").empty();

  for (let i = 0; i < equationList.length; i++) {
    const calculationItem = equationList[i];
  }
}
