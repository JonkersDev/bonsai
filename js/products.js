const products = [
  {
    name: "Anti-Ageing Face Cream",
    detail: "Cherry & Dark Chocolate, 35 ml",
    thumb: "thunder-pot",
    price: "12.50",
    discount: "20",
    discountPrice: 10.05,
    amount: 0,
    type: "cosmetic",
    catagory: "face",
    series: "雷",
  },
  {
    name: "Nourishing Hand Scrub",
    detail: "Cherry & Dark Chocolate, 35 ml",
    thumb: "dark-tube",
    price: "14.95",
    discount: "35",
    discountPrice: 9.75,
    amount: 0,
    type: "cosmetic",
    catagory: "hand",
    series: "暗",
  },
  {
    name: "Nourishing Shower Cream",
    detail: "Honey & Apple, 65 ml",
    thumb: "gold-spray",
    price: "10.95",
    discount: "10",
    discountPrice: 9.85,
    amount: 0,
    type: "cosmetic",
    catagory: "shower",
    series: `金`,
  },
  {
    name: "Soft Face Mask",
    detail: "Raspberry & Lime, 50 ml",
    thumb: "water-pot",
    price: "10.95",
    discount: "10",
    discountPrice: 9.85,
    amount: 0,
    type: "cosmetic",
    catagory: "face",
    series: "冰",
  },
  {
    name: "Anti-Perspirant Spray",
    detail: "Orange & Pine, 50 ml",
    thumb: "earth-spray",
    price: "18.50",
    discount: "50",
    discountPrice: 9.25,
    amount: 0,
    type: "cosmetic",
    catagory: "body",
    series: "泥",
  },
  {
    name: "Shower Oil",
    detail: "Jasmin & Strawberry, 50 ml",
    thumb: "air-tube",
    price: "12.95",
    discount: "25",
    discountPrice: 9.75,
    amount: 0,
    type: "cosmetic",
    catagory: "shower",
    series: "風",
  },
  {
    name: "Hygienic Hand Gel",
    detail: "Lavander & Almond Oil, 50 ml",
    thumb: "silver-tube",
    price: "8.90",
    discount: "20",
    discountPrice: 7.15,
    amount: 0,
    type: "cosmetic",
    catagory: "hand",
    series: "銀",
  },
  {
    name: "Foaming Shower Gel",
    detail: "Cherry & Dark Chocolate, 35 ml",
    thumb: "dark-spray",
    price: "11.95",
    discount: "50",
    discountPrice: 5.95,
    amount: 0,
    type: "cosmetic",
    catagory: "shower",
    series: "暗",
  },
  {
    name: "Peptides Natural Booster",
    detail: "80 ml",
    thumb: "special4",
    price: "19.95",
    discount: "10",
    discountPrice: 17.95,
    amount: 0,
    type: "special",
    catagory: "body",
    series: "水",
  },
  {
    name: "Soft Hand Scrub",
    detail: "Vanilla & Grapefruit, 50 ml",
    thumb: "fire-tube",
    price: "12.95",
    discount: "25",
    discountPrice: 9.75,
    amount: 0,
    type: "cosmetic",
    catagory: "hand",
    series: "火",
  },
  {
    name: "Hair & Body Mist",
    detail: "Cherry & Dark Chocolate, 35 ml",
    thumb: "thunder-spray",
    price: "14.95",
    discount: "10",
    discountPrice: 13.55,
    amount: 0,
    type: "cosmetic",
    catagory: "body",
    series: "雷",
  },
  {
    name: "Soft Hand Palm",
    detail: "Pineapple & Coconut, 50 ml",
    thumb: "light-pot",
    price: "9.50",
    discount: "15",
    discountPrice: 8.15,
    amount: 0,
    type: "cosmetic",
    catagory: "hand",
    series: "光",
  },
  {
    name: "Magnesium Shower Gel",
    detail: "Honey & Apple, 65 ml",
    thumb: "gold-tube",
    price: "10.95",
    discount: "10",
    discountPrice: 9.85,
    amount: 0,
    type: "cosmetic",
    catagory: "shower",
    series: `金`,
  },
  {
    name: "Hyaluronic Natural Booster",
    detail: "80 ml",
    thumb: "special1",
    price: "19.95",
    discount: "10",
    discountPrice: 17.95,
    amount: 0,
    type: "special",
    catagory: "body",
    series: "水",
  },
  {
    name: "Hair & Body Wash",
    detail: "Jasmin & Strawberry, 50 ml",
    thumb: "air-spray",
    price: "17.50",
    discount: "15",
    discountPrice: 14.85,
    amount: 0,
    type: "cosmetic",
    catagory: "shower",
    series: "風",
  },
  {
    name: "Anti-Wrinkel Cream",
    detail: "Orange & Pine, 50 ml",
    thumb: "earth-pot",
    price: "13.95",
    discount: "50",
    discountPrice: 6.95,
    amount: 0,
    type: "cosmetic",
    catagory: "face",
    series: "泥",
  },
  {
    name: "Full-Body Mist",
    detail: "Lavander & Almond Oil, 50 ml",
    thumb: "silver-pot",
    price: "12.95",
    discount: "25",
    discountPrice: 9.75,
    amount: 0,
    type: "cosmetic",
    catagory: "body",
    series: "銀",
  },
  {
    name: "Conditioner",
    detail: "Pineapple & Coconut, 50 ml",
    thumb: "light-spray",
    price: "12.95",
    discount: "15",
    discountPrice: 11.15,
    amount: 0,
    type: "cosmetic",
    catagory: "shower",
    series: "光",
  },
  {
    name: "Niacinamide Natural Booster",
    detail: "80 ml",
    thumb: "special3",
    price: "19.95",
    discount: "10",
    discountPrice: 17.95,
    amount: 0,
    type: "special",
    catagory: "body",
    series: "水",
  },
  {
    name: "Hygiening Hand Cream",
    detail: "Pineapple & Coconut, 50 ml",
    thumb: "light-tube",
    price: "14.95",
    discount: "40",
    discountPrice: 8.95,
    amount: 0,
    type: "cosmetic",
    catagory: "hand",
    series: "光",
  },
  {
    name: "Strong Hair & Body Mist",
    detail: "Vanilla & Grapefruit, 50 ml",
    thumb: "fire-spray",
    price: "16.95",
    discount: "25",
    discountPrice: 12.75,
    amount: 0,
    type: "cosmetic",
    catagory: "body",
    series: "火",
  },
  {
    name: "Fresh Body Scrub",
    detail: "Cherry & Dark Chocolate, 35 ml",
    thumb: "thunder-tube",
    price: "17.50",
    discount: "50",
    discountPrice: 8.75,
    amount: 0,
    type: "cosmetic",
    catagory: "body",
    series: "雷",
  },
  {
    name: "Smooth Body Lotion",
    detail: "Lavander & Almond Oil, 50 ml",
    thumb: "silver-spray",
    price: "12.95",
    discount: "25",
    discountPrice: 9.75,
    amount: 0,
    type: "cosmetic",
    catagory: "body",
    series: "銀",
  },
  {
    name: "Face Scrub",
    detail: "Cherry & Dark Chocolate, 35 ml",
    thumb: "dark-pot",
    price: "17.50",
    discount: "50",
    discountPrice: 8.75,
    amount: 0,
    type: "cosmetic",
    catagory: "face",
    series: "暗",
  },
  {
    name: "Summer Hydrating Mist",
    detail: "Raspberry & Lime, 50 ml",
    thumb: "water-spray",
    price: "19.95",
    discount: "10",
    discountPrice: 17.95,
    amount: 0,
    type: "cosmetic",
    catagory: "body",
    series: "冰",
  },
  {
    name: "Bakuchoil Natural Booster",
    detail: "80 ml",
    thumb: "special2",
    price: "19.95",
    discount: "10",
    discountPrice: 17.95,
    amount: 0,
    type: "special",
    catagory: "body",
    series: "水",
  },
  {
    name: "Hand Balm",
    detail: "Orange & Pine, 50 ml",
    thumb: "earth-tube",
    price: "17.95",
    discount: "15",
    discountPrice: 14.95,
    amount: 0,
    type: "cosmetic",
    catagory: "hand",
    series: "泥",
  },
  {
    name: "Winter Face Mask",
    detail: "Jasmin & Strawberry, 50 ml",
    thumb: "air-pot",
    price: "17.50",
    discount: "15",
    discountPrice: 14.85,
    amount: 0,
    type: "cosmetic",
    catagory: "face",
    series: "風",
  },
  {
    name: "Spring Face Mask",
    detail: "Honey & Apple, 65 ml",
    thumb: "gold-pot",
    price: "10.95",
    discount: "10",
    discountPrice: 9.85,
    amount: 0,
    type: "cosmetic",
    catagory: "face",
    series: `金`,
  },
  {
    name: "Vitamin C Natural Booster",
    detail: "80 ml",
    thumb: "special5",
    price: "19.95",
    discount: "10",
    discountPrice: 17.95,
    amount: 0,
    type: "special",
    catagory: "body",
    series: "水",
  },
  {
    name: "Urban Shower Gel",
    detail: "Raspberry & Lime, 50 ml",
    thumb: "water-tube",
    price: "19.95",
    discount: "10",
    discountPrice: 17.95,
    amount: 0,
    type: "cosmetic",
    catagory: "shower",
    series: "冰",
  },
  {
    name: "Body Cream",
    detail: "Vanilla & Grapefruit, 50 ml",
    thumb: "fire-pot",
    price: "12.95",
    discount: "25",
    discountPrice: 9.75,
    amount: 0,
    type: "cosmetic",
    catagory: "body",
    series: "火",
  },
];

const gifts = [
  {
    name: "火 Fire Gift Pack",
    detail: "Vanilla & Grapefruit",
    thumb: "fire-gift",
    price: "32.50",
    discount: "10",
    discountPrice: "29.25",
    amount: 0,
    type: "gift",
    series: "火",
  },
  {
    name: "銀 Silver Gift Pack",
    detail: "Lavender & Almond Oil",
    thumb: "silver-gift",
    price: "32.50",
    discount: "10",
    discountPrice: "29.25",
    amount: 0,
    type: "gift",
    series: "銀",
  },
  {
    name: "風 Air Gift Pack",
    detail: "Jasmin & Strawberry",
    thumb: "air-gift",
    price: "32.50",
    discount: "10",
    discountPrice: "29.25",
    amount: 0,
    type: "gift",
    series: "風",
  },
  {
    name: "金 Gold Gift Pack",
    detail: "Honey & Green Apple",
    thumb: "gold-gift",
    price: "32.50",
    discount: "10",
    discountPrice: "29.25",
    amount: 0,
    type: "gift",
    series: "金",
  },
  {
    name: "暗 Dark Gift Pack",
    detail: "Cherry & Dark Chocolate",
    thumb: "dark-gift",
    price: "32.50",
    discount: "10",
    discountPrice: "29.25",
    amount: 0,
    type: "gift",
    series: "暗",
  },
  {
    name: "冰 Ice Gift Pack",
    detail: "Raspberry & Lime",
    thumb: "water-gift",
    price: "32.50",
    discount: "10",
    discountPrice: "29.25",
    amount: 0,
    type: "gift",
    series: "冰",
  },
  {
    name: "雷 Thunder Gift Pack",
    detail: "Starfruit & Five-Spies",
    thumb: "thunder-gift",
    price: "32.50",
    discount: "10",
    discountPrice: "29.25",
    amount: 0,
    type: "gift",
    series: "雷",
  },
  {
    name: "泥 Earth Gift Pack",
    detail: "Orange & Pine",
    thumb: "earth-gift",
    price: "32.50",
    discount: "10",
    discountPrice: "29.25",
    amount: 0,
    type: "gift",
    series: "泥",
  },
  {
    name: "光 Light Gift Pack",
    detail: "Pineapple & Coconut",
    thumb: "light-gift",
    price: "32.50",
    discount: "10",
    discountPrice: "29.25",
    amount: 0,
    type: "gift",
    series: "光",
  },
];

let basket = [];

let saveProductPage = "";

const storedCart = JSON.parse(localStorage.getItem("cart"));
if (storedCart != null) {
  basket = storedCart;
}
const updateCart = () => {
  document.querySelector(".cart-container").innerHTML = "";
  if (basket.length == 0) {
    document.querySelector(".cart-container").innerHTML =
      "Oh no, your cart is still empty";
  }

  let totalPro = 0;
  let total = 0;

  basket.forEach((prod) => {
    totalPro = totalPro + prod.amount;
    total = total + prod.discountPrice * prod.amount;
    let addedPrice = prod.price * prod.amount;
    let addedDiscountPrice = prod.discountPrice * prod.amount;

    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `<img src="./images/${prod.thumb}.png" alt="">
        <div class="det">
        <h2>${prod.name}</h2>
        <p>amount: ${prod.amount}</p>
        </div>
        <p>€${addedDiscountPrice.toFixed(2)}<s>€${addedPrice.toFixed(
      2
    )}</s></p>`;
    item.addEventListener("click", (e) => {
      if (!e.target.classList.contains("del-btn")) {
        saveProductPage = prod;
        localStorage.setItem("savedProduct", JSON.stringify(saveProductPage));
        window.location.href = "./product.html";
      }
    });
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("del-btn");
    deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
    deleteBtn.addEventListener("click", () => {
      prod.amount = 0;
      removeFromArray(basket, prod);
      updateCart();
    });
    item.appendChild(deleteBtn);
    document.querySelector(".cart-container").appendChild(item);
  });
  if (totalPro > 0) {
    document.querySelector(
      ".cart"
    ).innerHTML = `<span class="cart-counter">${totalPro}</span>`;
  } else {
    document.querySelector(".cart").innerHTML = "";
  }
  document.querySelector(".total").innerHTML = `€${total.toFixed(2)}`;
  document.querySelector(".product-count").innerHTML = `${totalPro} products`;
  localStorage.setItem("cart", JSON.stringify(basket));
};

const openProduct = (pro) => {
  console.log(pro);
};

const removeFromArray = async (arr, obj) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == obj) {
      arr.splice(i, 1);
    }
  }
};

document.querySelector(".checkout-btn").addEventListener("click", () => {
  window.location.href = "./cart.html";
});

updateCart();
