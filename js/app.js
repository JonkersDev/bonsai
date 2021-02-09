const inl = document.querySelectorAll(".inl");
const nav = document.querySelector(".nav-items");

document.querySelector(".burger").addEventListener("click", () => {
  let delay = 200;
  nav.style = "transform: translateY(0)";
  inl.forEach((item) => {
    setTimeout(() => {
      item.style = "transform: translate(0); opacity: 1";
    }, delay);
    delay = delay + 50;
  });
});

document.querySelector(".close-nav").addEventListener("click", () => {
  nav.style = "";
  inl.forEach((item) => {
    item.style = "";
  });
});

const cart = document.querySelector(".full-cart");
const overlay = document.querySelector(".overlay");

document.querySelector(".cart").addEventListener("click", () => {
  cart.style = "transform: translateX(0);";
  document.body.style = "overflow: hidden;";
  overlay.style = "opacity: 1; pointer-events: all";
});

document.querySelector(".close-cart").addEventListener("click", () => {
  cart.style = "";
  document.body.style = "";
  overlay.style = "";
});

document.querySelector(".cont-shop").addEventListener("click", () => {
  cart.style = "";
  document.body.style = "";
  overlay.style = "";
});

overlay.addEventListener("click", () => {
  cart.style = "";
  document.body.style = "";
  overlay.style = "";
});

const addToCart = () => {
  cart.style = "transform: translateX(0)";
  document.body.style = "overflow: hidden;";
  overlay.style = "opacity: 1; pointer-events: all;";
  let contain = false;
  for (i = 0; i < basket.length; i++) {
    if (basket[i].name == savedProduct.name) {
      contain = true;
      basket[i].amount++;
    }
  }
  if (contain == false) {
    savedProduct.amount++;
    basket.push(savedProduct);
  }
  updateCart();
};

const newsBtn = document.querySelector("#news-btn");
const newsInput = document.querySelector("#news-input");

newsBtn.addEventListener("click", () => {
  event.preventDefault();
  if (!newsInput.checkValidity()) {
    newsInput.style.borderColor = "crimson";
  } else {
    newsInput.value = "";
    newsInput.style = "";
    newsBtn.innerHTML = "THANKS FOR SUBSCRIBING!";
    newsBtn.style =
      "background-color: green; color: #efefef; pointer-events: none;";
  }
});

let logIn = localStorage.getItem("logIn");
let users = JSON.parse(localStorage.getItem("users"));
if (users == null) {
  users = [];
}
let activeUser = JSON.parse(localStorage.getItem("active"));

document.querySelector(".account").addEventListener("click", () => {
  if (logIn == "false" || logIn == null) {
    window.location.href = "member.html";
  } else {
    window.location.href = "account.html";
  }
});
