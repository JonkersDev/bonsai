if (logIn == null || logIn == "false") {
  window.location.href = "member.html";
}

let activeOrders = activeUser.orders;

if (activeOrders.length > 0) {
  document.querySelector(".cart-products").innerHTML = "";
}
let orderNum = activeOrders.length + 1;

for (i = 0; i < activeOrders.length; i++) {
  orderNum--;
  let orderThumb = document.createElement("h5");
  orderThumb.innerHTML = `Ordernumber: ${activeUser.bonsaiID}.${orderNum}`;
  orderThumb.style = "font-size: 15pt; padding: 10px;";
  document.querySelector(".cart-products").appendChild(orderThumb);
  activeOrders[i].forEach((pro) => {
    let addedPrice = pro.price * pro.amount;
    let addedDiscountPrice = pro.discountPrice * pro.amount;
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

    let amount = document.createElement("div");
    amount.classList.add("amount");
    let counter = document.createElement("div");
    counter.innerHTML = pro.amount;
    counter.classList.add("counter");
    amount.appendChild(counter);
    prod.appendChild(amount);
    let priceTag = document.createElement("div");
    priceTag.classList.add("price");
    priceTag.innerHTML = `€${addedDiscountPrice.toFixed(
      2
    )}<s>€${addedPrice.toFixed(2)}</s>`;
    prod.appendChild(priceTag);
    document.querySelector(".cart-products").appendChild(prod);
  });
}

document.querySelector(".num-pro").innerHTML = activeUser.name;
document.querySelector(".checkout").innerHTML = `
                <h5>Account-Info</h5>
                <p>Name : ${activeUser.name}</p>
                <p>E-mail : ${activeUser.email}</p>
                <p>Bonsai ID : ${activeUser.bonsaiID}</p>
                <p>Member since : ${activeUser.since}</p>
                <p>Total orders : ${activeOrders.length}</p>
                <button onclick="logOut()">LOG OUT</button>`;

const logOut = () => {
  localStorage.setItem("logIn", false);
  window.location.href = "index.html";
};
