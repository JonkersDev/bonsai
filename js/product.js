const savedProduct = JSON.parse(localStorage.getItem("savedProduct"));

console.log(savedProduct);

document.querySelector("#product-page").innerHTML = `
<div class="return" onClick="goBack()">&lt; return</div>
<img src="./images/${savedProduct.thumb}.png" alt="" class="hero">
<img src="./images/${savedProduct.series}.png" alt="" class="hero-bg">
<div class="product-info">
    <div class="icon">${savedProduct.series}</div>
    <h1>${savedProduct.name}</h1>
    <h5>${savedProduct.detail}</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos obcaecati inventore, id facere porro laudantium sint eveniet dicta assumenda praesentium ab adipisci quis dolorum sapiente corrupti possimus placeat iusto, sunt perferendis reprehenderit provident rerum, ea ipsam! Corporis doloremque dignissimos laudantium.</p>
    <div class="discount">-${savedProduct.discount}%</div>
    <div class="price">€${savedProduct.discountPrice}<s>€${savedProduct.price}</s></div>
    <button onClick="addToCart()">Add to Cart</button>
</div>`;

const goBack = () => {
  window.history.back();
};
