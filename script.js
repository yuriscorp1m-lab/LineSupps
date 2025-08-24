function saludar() {
  alert("¡Bienvenido a mi MVP, my friend! 😎");
}

function toggleTema() {
  const b = document.body;
  b.classList.toggle("dark");
}

function login(event) {
  event.preventDefault(); // evita que la página se recargue

  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  if (usuario === "admin" && password === "1234") {
    alert("✅ Login correcto, bienvenido " + usuario);
  } else {
    alert("❌ Usuario o contraseña incorrectos");
  }
}