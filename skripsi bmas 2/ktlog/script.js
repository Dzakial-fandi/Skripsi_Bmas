// script.js
const produk = [
  {
    nama: "Oil Filter",
    kode: "OPL00101",
    kategori: "oil",
    img: "img/4.png",
  },
  {
    nama: "Air Filter",
    kode: "AKC0102",
    kategori: "air",
    img: "img/6.png",
  },
  {
    nama: "Filter Strainer",
    kode: "HVB0201",
    kategori: "filter",
    img: "img/8.png",
  },
  {
    nama: "Air Filter",
    kode: "AKC0104",
    kategori: "air",
    img: "img/9.png",
  },

  {
    nama: "Fuel Filter",
    kode: "FUL0109",
    kategori: "fuel",
    img: "img/8.png",
  },
  {
    nama: "Filter Strainer",
    kode: "AKC0106",
    kategori: "filter",
    img: "img/4.png",
  },
  {
    nama: "Oil Filter",
    kode: "OiL01001",
    kategori: "oil",
    img: "img/6.png",
  },
];

function tampilkanProduk() {
  const kategori = document.getElementById("kategori").value;
  const cari = document.getElementById("search").value.toLowerCase();
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  const hasil = produk.filter(
    (p) =>
      (kategori === "semua" || p.kategori === kategori) &&
      (p.nama.toLowerCase().includes(cari) ||
        p.kode.toLowerCase().includes(cari))
  );

  hasil.forEach((p) => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.img}" alt="${p.nama}" />
        <h3>${p.nama}</h3>
        <p>${p.kode}</p>
        <button>Lihat Detail</button>
      </div>
    `;
  });
}

function resetFilter() {
  document.getElementById("kategori").value = "semua";
  document.getElementById("search").value = "";
  tampilkanProduk();
}

document.getElementById("kategori").addEventListener("change", tampilkanProduk);
document.getElementById("search").addEventListener("input", tampilkanProduk);

window.onload = tampilkanProduk;

