// ================= SIDEBAR =================
const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");

allSideMenu.forEach((item) => {
  const li = item.parentElement;

  item.addEventListener("click", function () {
    allSideMenu.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector("#content nav .bx.bx-menu");
const sidebar = document.getElementById("sidebar");

menuBar.addEventListener("click", function () {
  sidebar.classList.toggle("hide");
});

// ================= SEARCH =================
const searchButton = document.querySelector(
  "#content nav form .form-input button"
);
const searchButtonIcon = document.querySelector(
  "#content nav form .form-input button .bx"
);
const searchForm = document.querySelector("#content nav form");

searchButton?.addEventListener("click", function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault();
    searchForm.classList.toggle("show");
    if (searchForm.classList.contains("show")) {
      searchButtonIcon.classList.replace("bx-search", "bx-x");
    } else {
      searchButtonIcon.classList.replace("bx-x", "bx-search");
    }
  }
});

if (window.innerWidth < 768) {
  sidebar.classList.add("hide");
} else if (window.innerWidth > 576) {
  searchButtonIcon?.classList.replace("bx-x", "bx-search");
  searchForm?.classList.remove("show");
}

window.addEventListener("resize", function () {
  if (this.innerWidth > 576) {
    searchButtonIcon?.classList.replace("bx-x", "bx-search");
    searchForm?.classList.remove("show");
  }
});

// ================= DARK MODE =================
const switchMode = document.getElementById("switch-mode");

switchMode?.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

// ================= MODAL =================

// --- Update Modal ---
const updateModal = document.getElementById("editModal"); // pakai ID biar konsisten

function openUpdateModal() {
  updateModal.classList.add("active"); // tambah class
}

function closeModal() {
  updateModal.classList.remove("active"); // hapus class
}

// Tutup modal kalau klik area luar
window.addEventListener("click", function (event) {
  if (event.target === updateModal) {
    closeModal();
  }
});

// Tutup modal kalau klik tombol X
document
  .querySelector("#editModal .close-btn")
  ?.addEventListener("click", closeModal);

// ================= SAVE CHANGES =================
function saveChanges() {
  // Tambahin logika update kalau perlu
  closeModal();
}

// uuuupp modal
// ambil elemen modal
const upmodal = document.getElementById("upmodal");

// fungsi untuk buka modal
function openUpModal() {
  upmodal.classList.add("active");
}

// fungsi untuk tutup modal
function closeUpModal() {
  upmodal.classList.remove("active");
}

// kalau klik area luar modal -> tutup
window.addEventListener("click", function (e) {
  if (e.target === upmodal) {
    closeUpModal();
  }
});
