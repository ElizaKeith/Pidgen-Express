function submitRequest() {
  const weightInput = document.querySelector("#weight");
  if (!weightInput.checkValidity()) {
    alert("Please enter a valid weight.");
    return;
  }

  const weight = parseInt(weightInput.value);
  if (weight > 8) {
    alert("Thank you for your business. Your letter will be delivered within 3-5 days!");
  } else {
    alert("Thank you for your business. Your letter will be delivered within 1-2 days!");
  }
}

let button = document.querySelector("#btn");
button.addEventListener("click", function(event) {
  event.preventDefault();
  submitRequest();
});