const proContainer = document.querySelector(".product-container");

let filter = "";
let catagory = "";
let am = false;

const showProducts = () => {
  am = false;
  proContainer.innerHTML = "";
  products.forEach((pro) => {
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
    if (filter != "") {
      if (pro.series == filter) {
        if (catagory != "") {
          if (pro.catagory == catagory) {
            proContainer.appendChild(proCard);
            am = true;
          }
        } else {
          proContainer.appendChild(proCard);
          am = true;
        }
      }
    } else if (catagory != "") {
      if (pro.catagory == catagory) {
        proContainer.appendChild(proCard);
        am = true;
      }
    } else {
      proContainer.appendChild(proCard);
      am = true;
    }
  });
  if (am == false) {
    proContainer.innerHTML = "<strong>Oh no, no products found</strong>";
  }
};

document.querySelectorAll(".filt").forEach((option) => {
  option.addEventListener("click", () => {
    filter = option.getAttribute("data-series");
    showProducts();
    document.querySelectorAll(".filt").forEach((fil) => {
      fil.classList.remove("active");
    });
    window.scrollTo(0, 350);
    option.classList.add("active");
  });
});

document.querySelectorAll(".cat").forEach((option) => {
  option.addEventListener("click", () => {
    catagory = option.getAttribute("data-series");
    showProducts();
    document.querySelectorAll(".cat").forEach((fil) => {
      fil.classList.remove("active");
    });
    window.scrollTo(0, 350);
    option.classList.add("active");
  });
});

document.querySelector(".a-z").addEventListener("click", () => {
  products.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }

    return comparison;
  });
  showProducts();
});

document.querySelector(".z-a").addEventListener("click", () => {
  products.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    let comparison = 0;
    if (nameA < nameB) {
      comparison = 1;
    } else if (nameA > nameB) {
      comparison = -1;
    }

    return comparison;
  });
  showProducts();
});

document.querySelector(".low-price").addEventListener("click", () => {
  products.sort((a, b) => {
    let comparison = 0;
    if (a.discountPrice > b.discountPrice) {
      comparison = 1;
    } else if (a.discountPrice < b.discountPrice) {
      comparison = -1;
    }

    return comparison;
  });
  showProducts();
});

document.querySelector(".high-price").addEventListener("click", () => {
  products.sort((a, b) => {
    let comparison = 0;
    if (a.discountPrice < b.discountPrice) {
      comparison = 1;
    } else if (a.discountPrice > b.discountPrice) {
      comparison = -1;
    }

    return comparison;
  });
  showProducts();
});

document.querySelectorAll(".sor").forEach((so) => {
  so.addEventListener("click", () => {
    document.querySelectorAll(".sor").forEach((sorter) => {
      sorter.classList.remove("active");
    });
    window.scrollTo(0, 350);
    so.classList.add("active");
  });
});

showProducts();

if (12.49 > 9.5) {
  console.log("tes");
}
