let operator;

$(document).ready(init);

function init() {
  console.log("DOM is ready");

  //   getCalculations();
  $(".js-btn-equals").on("click", submitInput);
  $(".js-btn-mathOperator").on("click", function(event) {
    operator = event.target.innerHTML;
    console.log(operator);
    //  let oper = event.target.innerHTML;
    //  handleOperator(oper)
  });
}

//
//EVENT HANDLERS
// -------------

// function handleOperator(oper){
//     operator = oper;
// }

function submitInput() {
  console.log("clicked!");

  // const newItem = {
  //   num1: $(".js-input-firstNumber").val(),
  //   num2: $(".js-input-secondNumber").val(),
  //   operator: operator,
  //   output: ""
  // };
}

//
// API INTERACTIONS / AJAX CALLS
// -----------------------------

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
