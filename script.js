window.onload = function () {
  let radioButton = document.querySelector("#radio-buttons");

  let label = document.querySelector("#label-hourly-rate");
  let labelInput = document.querySelector("#hourly-rate");

  //check if hiring button is checked or not and update the hidden attribute of 2 elements
  radioButton.addEventListener("click", function () {
    if (document.querySelector("#hiring").checked) {
      label.removeAttribute("hidden");
      labelInput.removeAttribute("hidden");
    } else {
      label.setAttribute("hidden", true);
      labelInput.setAttribute("hidden", true);
    }
  });
};
