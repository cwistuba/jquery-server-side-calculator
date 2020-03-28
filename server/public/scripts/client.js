$(document).ready(init);

function init() {
  console.log("DOM is ready");

  //   getCalculations();
}

//
//EVENT HANDLERS
// -------------

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
