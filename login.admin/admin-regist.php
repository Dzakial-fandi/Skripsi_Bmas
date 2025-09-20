<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/admin-regist.css" />
    <!-- icon -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
  </head>
  <body>
    <div class="container">
      <div class="form">
        <div class="title">
          <img src="img/logosmart.jpg" alt="HealthCare Image" class="logo" />
          <span></span>
        </div>
        <h3>Masuk!</h3>
        <form action="" method="" id="loginForm">
          <div class="field">
            <label for="email">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Masukan Username..."
              required
            />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Masukan Email..."
              required
            />
          </div>
          <div class="field">
            <label for="password">Kata Sandi</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Masukan Kata Sandi"
              required
            />
          </div>
          <!-- <div class="field">
            <label for="konfir-sandi">Konfirmasi Kata Sandi</label>
            <input
              type="konfir-sandi"
              name="konfir-sandi"
              id="konfir-sandi"
              placeholder="Masukan Konfirmasi Kata Sandi"
              required
            />
          </div>
          <div class="field">
            <label for="kunci-rahasia">Kunci rahasia Admin</label>
            <input
              type="kunci-rahasia"
              name="kunci-rahasia"
              id="kunci-rahasia"
              placeholder="Masukan Kunci rahasia Admin"
              required
            />
          </div> -->
          <!-- <p class="lainnya">Blablabal? <a href="#">Klik disini</a></p> -->
          <button type="submit" id="submit">Sign</button>
        </form>
      </div>

      <div class="gambar">
        <img src="img/logosmart.jpg" alt="HealthCare Image" class="logo" />
      </div>
    </div>
    <script>
      document
        .getElementById("loginForm")
        .addEventListener("submit", async function (e) {
          e.preventDefault();
          const formData = new FormData(this);

          const response = await fetch("/backend/login.php", {
            method: "POST",
            body: formData,
          });

          const result = await response.json();

          // document.getElementById("pesan").textContent =
          //     result.message;

          console.log(result.message);

          if (result.status === "sukses") {
            // Redirect ke dashboard atau halaman lain
            window.location.href = "/halaman_admin1-update/dashboard.php";
          }
        });
    </script>
  </body>
</html>
