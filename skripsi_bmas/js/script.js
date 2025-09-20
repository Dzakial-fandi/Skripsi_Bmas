// ===================================
// SCRIPT JS UNIVERSAL (Index + Katalog)
// ===================================

// ========== Navbar ==========
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Jalankan hanya jika elemen ada
if (hamburger && navbarNav) {
  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    navbarNav.classList.toggle("active");
  });

  // Klik di luar sidebar untuk menghilangkan nav
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
}

// ========== Highlight Menu Saat Scroll ==========
const sections = document.querySelectorAll("section");
const menuItems = {
  home: document.getElementById("menu-home"),
  about: document.getElementById("menu-about"),
  menu: document.getElementById("menu-menu"),
  referensi: document.getElementById("menu-referensi"),
  contact: document.getElementById("menu-contact"),
};

if (sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        let menu = menuItems[entry.target.id];
        if (menu) {
          if (entry.isIntersecting) {
            menu.classList.add("aktif");
          } else {
            menu.classList.remove("aktif");
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));
}

// ========== Slider Referensi ==========
const slides = document.querySelectorAll(".slidee");
const btns = document.querySelectorAll(".btn");
let currentIndex = 0;

if (slides.length > 0 && btns.length > 0) {
  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === index);
      btns[i].classList.toggle("active", i === index);
    });
    currentIndex = index;
  }

  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => showSlide(i));
  });

  // Slider otomatis
  function autoSlide() {
    setInterval(() => {
      let nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex);
    }, 5000);
  }
  autoSlide();
}

// ========== Tombol WhatsApp Expand ==========
let lastScrollTop = 0;
let scrollThreshold = 200;
const whatsApp = document.querySelector(".WhatsApp");

if (whatsApp) {
  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
      if (scrollTop > lastScrollTop) {
        whatsApp.classList.add("expand"); // Scroll ke bawah
      } else {
        whatsApp.classList.remove("expand"); // Scroll ke atas
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
  });
}

// ========== Loading Screen ==========
window.addEventListener("load", () => {
  const loading = document.querySelector(".loading-screen");
  if (loading) {
    setTimeout(() => {
      loading.style.display = "none";
    }, 200);
  }

  // Jalankan katalog saat halaman sudah siap
  if (document.getElementById("productGrid")) {
    tampilkanProduk();
  }
});

// ========== Filter Gambar (Halaman Utama) ==========
const btnFilter = document.querySelectorAll(".produk-box ul li");
const imgItem = document.querySelectorAll(".produk-list img");

if (btnFilter.length > 0 && imgItem.length > 0) {
  btnFilter.forEach((data) => {
    data.addEventListener("click", () => {
      btnFilter.forEach((d) => d.classList.remove("active"));
      data.classList.add("active");

      const btnText = data.textContent.toLowerCase();
      imgItem.forEach((img) => {
        if (
          btnText === "all produk" ||
          img.getAttribute("data-filter") === btnText
        ) {
          img.style.display = "block";
        } else {
          img.style.display = "none";
        }
      });
    });
  });
}

// ========== Katalog Produk (Halaman katalog.html) ==========
// Data produk
const produk = [
  {
    nama: "Oil Filter 1",
    kode: "OF001",
    kategori: "oil filter",
    img: "img/4.png",
  },
  {
    nama: "Air Filter 1",
    kode: "AF001",
    kategori: "air filter",
    img: "img/6.png",
  },
  {
    nama: "Fuel Filter 1",
    kode: "FF001",
    kategori: "fuel filter",
    img: "img/8.png",
  },
  {
    nama: "Filter Strainer 1",
    kode: "FS001",
    kategori: "filter strainer",
    img: "img/9.png",
  },
];

// Referensi elemen
const productGrid = document.getElementById("productGrid");
const kategoriFilter = document.getElementById("kategoriFilter");
const resetFilter = document.getElementById("resetFilter");

// Fungsi tampilkan produk
function tampilkanProduk(filter = "all") {
  productGrid.innerHTML = "";

  let hasil = produk.filter((p) => filter === "all" || p.kategori === filter);

  if (hasil.length === 0) {
    productGrid.innerHTML = "<p>Tidak ada produk ditemukan.</p>";
    return;
  }

  hasil.forEach((p) => {
    let card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.img}" alt="${p.nama}">
      <h3>${p.nama}</h3>
      <p>Kode: ${p.kode}</p>
      <p>Kategori: ${p.kategori}</p>
    `;

    productGrid.appendChild(card);
  });
}

// Event listener filter
if (kategoriFilter) {
  kategoriFilter.addEventListener("change", (e) => {
    tampilkanProduk(e.target.value);
  });
}

if (resetFilter) {
  resetFilter.addEventListener("click", (e) => {
    e.preventDefault();
    kategoriFilter.value = "all";
    tampilkanProduk("all");
  });
}

// Jalankan pertama kali
if (productGrid) {
  tampilkanProduk();
}
