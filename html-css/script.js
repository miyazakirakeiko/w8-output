document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // ページロード時にlocalStorageから値を読み込む
  emailInput.value = localStorage.getItem("email") || "";
  passwordInput.value = localStorage.getItem("password") || "";

  // フォームの送信時にlocalStorageに値を保存する
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // フォームのデフォルト送信を防ぐ
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("password", passwordInput.value);
  });
});
