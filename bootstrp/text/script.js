// Simple cart logic
let cartCount = 0;
const cartCountEl = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountEl.textContent = cartCount;

    // Quick feedback
    button.textContent = "✔ Added!";
    button.classList.replace("btn-primary", "btn-success");

    setTimeout(() => {
      button.textContent = "Add to Cart";
      button.classList.replace("btn-success", "btn-primary");
    }, 1500);
  });
});
