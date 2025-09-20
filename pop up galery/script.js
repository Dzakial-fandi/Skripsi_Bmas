// Ambil elemen yang dibutuhkan
const popup = document.getElementById("product-popup");
const closeBtn = document.querySelector(".close-btn");
const productCards = document.querySelectorAll(".product-card");

// Buka popup saat gambar diklik
productCards.forEach((card) => {
  card.addEventListener("click", () => {
    popup.style.display = "flex";
  });
});

// Tutup popup saat tombol close diklik
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Tutup popup saat klik di luar popup-box
window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
