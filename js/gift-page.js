const giftContainer = document.querySelector(".gift-container");

gifts.forEach((pro) => {
  let proCard = document.createElement("section");
  proCard.classList.add("product");
  let thumb = document.createElement("div");
  thumb.classList.add("image");
  thumb.innerHTML = `<img src="./images/corner.png" alt="" class="corner corner-a">
  <img src="./images/${pro.series}.png" alt="" class="bg">
  <img src="./images/${pro.thumb}.png" alt="" class="hero">
  <img src="./images/corner.png" alt="" class="corner corner-b">`;
  thumb.addEventListener("click", () => {
    saveProductPage = pro;
    localStorage.setItem("savedProduct", JSON.stringify(saveProductPage));
    window.location.href = "./product.html";
  });
  let proInfo = document.createElement("div");
  proInfo.classList.add("info");
  proInfo.innerHTML = `<span class="discount">-${pro.discount}%</span>
  <h1>${pro.name}</h1>
  <p class="details">${pro.detail}</p>
  <span class="price">€${pro.discountPrice}<s>€${pro.price}</s></span>`;
  proInfo.addEventListener("click", (e) => {
    if (!e.target.classList.contains("add-cart")) {
      saveProductPage = pro;
      localStorage.setItem("savedProduct", JSON.stringify(saveProductPage));
      window.location.href = "./product.html";
    }
  });
  let addCart = document.createElement("button");
  addCart.classList.add("add-cart");
  addCart.innerHTML = "ADD TO CART";
  addCart.addEventListener("click", () => {
    addCart.innerHTML = '<i class="fas fa-check"></i>';
    addCart.style = "color: #85af94;";
    cart.style = "transform: translateX(0)";
    document.body.style = "overflow: hidden;";
    overlay.style = "opacity: 1; pointer-events: all;";

    let contain = false;
    for (i = 0; i < basket.length; i++) {
      if (basket[i].name == pro.name) {
        contain = true;
        basket[i].amount++;
      }
    }
    if (contain == false) {
      pro.amount++;
      basket.push(pro);
    }
    updateCart();
  });
  proInfo.appendChild(addCart);
  proCard.appendChild(thumb);
  proCard.appendChild(proInfo);
  giftContainer.appendChild(proCard);
});
