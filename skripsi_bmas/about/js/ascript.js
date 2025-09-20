document.addEventListener("DOMContentLoaded", function () {
  const routes = {
    "btn-company": "/company.html",
    "btn-product": "/product_ov.html",
    "btn-certification": "/sertifikasi.html",
    "btn-gallery": "/gallery.html",
    "btn-legalitas": "/legalitas.html",
  };

  for (let id in routes) {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener("click", function () {
        window.location.href = routes[id];
      });
    }
  }
});
