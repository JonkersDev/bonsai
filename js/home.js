document.querySelector(".terms").addEventListener("click", () => {
  document.querySelector(".term").style = "max-height: 200px";
});

let service = 1;
const ays = () => {
  let s = document.querySelectorAll(`.service${service}`);
  s.forEach((el) => {
    el.style = "";
  });
  service++;
  if (service > 3) {
    service = 1;
  }
  let r = document.querySelectorAll(`.service${service}`);
  r.forEach((el) => {
    el.style = "opacity: 1;";
  });
};

document.querySelector(".ays").addEventListener("click", ays);
document.querySelector(".ays").addEventListener("touchend", ays);
setInterval(ays, 8000);

products.forEach((pro) => {
  const prod = document.createElement("div");
  prod.classList.add("product");
  prod.innerHTML = `<img src="./images/${pro.thumb}.png" alt="">
  <p>${pro.name}</p>
  <span>€${pro.price}</span>`;

  prod.addEventListener("click", () => {
    saveProductPage = pro;
    localStorage.setItem("savedProduct", JSON.stringify(saveProductPage));
    window.location.href = "./product.html";
  });

  if (pro.type == "cosmetic") {
    document.querySelector(".cosm-products").appendChild(prod);
  }
  if (pro.type == "special") {
    document.querySelector(".spec-products").appendChild(prod);
  }
});

const shopNow = () => {
  window.location.href = "./products.html";
};

let scrollPro = 0;
document.querySelector(".left-scroll").addEventListener("click", () => {
  if (scrollPro > 0) {
    scrollPro -= 600;
  }
  document.querySelector(".carousel").scrollTo(scrollPro, 0);
});

document.querySelector(".right-scroll").addEventListener("click", () => {
  if (scrollPro < 4800) {
    scrollPro += 600;
  }
  document.querySelector(".carousel").scrollTo(scrollPro, 0);
});
