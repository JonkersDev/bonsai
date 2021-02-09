document.querySelector("#submit").addEventListener("click", () => {
  event.preventDefault();
  let valid = true;
  document.querySelectorAll(".inp").forEach((input) => {
    input.style = "";
    if (!input.checkValidity()) {
      valid = false;
      input.style.borderTop = "2px solid crimson";
    }
  });
  if (valid == true) {
    document.querySelectorAll(".in").forEach((input) => {
      input.style = "";
      input.value = "";
    });
    document.querySelector(".succes-message").style =
      "opacity: 1; height: 100%;";
  }
  window.scrollTo(0, 300);
});
