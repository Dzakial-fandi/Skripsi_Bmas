// login.js
document.addEventListener('DOMContentLoaded', function () {
  const inputFields = document.querySelectorAll("input[type='text'], input[type='password']");
  const submitButton = document.getElementById('submit');

  // Tambahkan efek animasi pada input saat difokuskan
  inputFields.forEach((input) => {
    input.addEventListener('focus', function () {
      input.style.transition = 'all 0.3s ease-in-out';
      input.style.transform = 'scale(1.05)';
      input.style.boxShadow = '0 0 5px rgba(81, 203, 238, 1)';
    });

    input.addEventListener('blur', function () {
      input.style.transform = 'scale(1)';
      input.style.boxShadow = 'none';
    });
  });

  // Animasi untuk tombol submit ketika diklik
  submitButton.addEventListener('click', function () {
    submitButton.style.transition = 'all 0.2s ease-in-out';
    submitButton.style.transform = 'scale(0.95)';
    setTimeout(function () {
      submitButton.style.transform = 'scale(1)';
    }, 200);
  });
});

// Fungsi untuk toggle password visibility
function togglePassword() {
  const passwordInput = document.getElementById('password');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}

function togglePassword() {
  var passwordInput = document.getElementById('password');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}
