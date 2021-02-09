let numOfPro = 0;
const showCart = () => {
  document.querySelector(".cart-products").innerHTML = "";
  numOfPro = 0;
  let total = 0;

  basket.forEach((pro) => {
    let addedPrice = pro.price * pro.amount;
    let addedDiscountPrice = pro.discountPrice * pro.amount;
    total = total + addedDiscountPrice;
    numOfPro = numOfPro + pro.amount;
    let prod = document.createElement("div");
    prod.classList.add("product");

    let cartImg = document.createElement("img");
    cartImg.src = `./images/${pro.thumb}.png`;
    cartImg.addEventListener("click", () => {
      saveProductPage = pro;
      localStorage.setItem("savedProduct", JSON.stringify(saveProductPage));
      window.location.href = "./product.html";
    });
    prod.appendChild(cartImg);
    let cartName = document.createElement("h4");
    cartName.innerHTML = pro.name;
    cartName.addEventListener("click", () => {
      saveProductPage = pro;
      localStorage.setItem("savedProduct", JSON.stringify(saveProductPage));
      window.location.href = "./product.html";
    });
    prod.appendChild(cartName);
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
    deleteBtn.addEventListener("click", () => {
      removeFromArray(basket, pro);
      updateCart();
      showCart();
    });
    prod.appendChild(deleteBtn);
    let amount = document.createElement("div");
    amount.classList.add("amount");
    let min = document.createElement("div");
    min.innerHTML = "-";
    min.classList.add("min");
    min.addEventListener("click", () => {
      pro.amount--;
      if (pro.amount == 0) {
        removeFromArray(basket, pro);
      }
      updateCart();
      showCart();
    });
    amount.appendChild(min);
    let counter = document.createElement("div");
    counter.innerHTML = pro.amount;
    counter.classList.add("counter");
    amount.appendChild(counter);
    let plus = document.createElement("div");
    plus.classList.add("plus");
    plus.innerHTML = "+";
    plus.addEventListener("click", () => {
      pro.amount++;
      updateCart();
      showCart();
    });
    amount.appendChild(plus);
    prod.appendChild(amount);
    let priceTag = document.createElement("div");
    priceTag.classList.add("price");
    priceTag.innerHTML = `€${addedDiscountPrice.toFixed(
      2
    )}<s>€${addedPrice.toFixed(2)}</s>`;
    prod.appendChild(priceTag);
    document.querySelector(".cart-products").appendChild(prod);
  });
  if (numOfPro == 0) {
    document.querySelector(".cart-products").innerHTML =
      "<h4 class='empty-cart'>Oh no, there is nothing in your cart.</h4>";
  }
  document.querySelector(".num-pro").innerHTML = `${numOfPro} products`;

  let totalPlus = total + 2.9;
  document.querySelector(
    ".checkout"
  ).innerHTML = `<div class="subtotal">SUBTOTAL <span>€${total.toFixed(
    2
  )}</span></div>
      <p>Delivery 1-3 days.</p>
      <p>Shipping Cost <span>€2,90</span></p>
      <h3>Total <span>€${totalPlus.toFixed(2)}</span></h3>
      <button onclick="checkOut()">ORDER</button>`;
};

const checkOut = () => {
  if (numOfPro > 0) {
    if (activeUser != null) {
      console.log(activeUser);
      activeUser.orders.unshift(basket);
      localStorage.setItem("active", JSON.stringify(activeUser));
      for (i = 0; i < users.length; i++) {
        if (
          users[i].name == activeUser.name &&
          users[i].email == activeUser.email
        ) {
          users[i].orders.unshift(basket);
          localStorage.setItem("users", JSON.stringify(users));
        }
      }
    }
    basket = [];
    updateCart();
    showCart();
    document.querySelector(".cart-page").innerHTML =
      "<section class='ordered'><h1>Thank You!</h1><p>Your order was completed succesfully.</p><div><i class='far fa-envelope'></i>An email receipt including the details about your order has been sent to the email adress provided. Please keep it for your records.</div><div>Your package will be delivered to your home within 1-3 working days. If you're a BONSAI Member, check your account to see what you ordered.<i class='fas fa-shipping-fast'></i></div></section>";
    window.scrollTo(0, 0);
  }
};

showCart();
