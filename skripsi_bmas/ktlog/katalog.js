// Ambil elemen yang dibutuhkan
const popup = document.getElementById("product-popup");
const closeBtn = document.querySelector(".close-btn");
const productCards = document.querySelectorAll(".product-card");

productCards.forEach((card) => {
  card.addEventListener("click", () => {
    popup.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
