function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Por favor, completa todos los campos para registrarte.");
    return;
  }
  const existingUser = localStorage.getItem(username);
  if (existingUser) {
    alert("El usuario ya está registrado. Intenta iniciar sesión.");
    return;
  }

  localStorage.setItem(username, password);
  alert("Usuario registrado con éxito. Ahora puedes iniciar sesión.");
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Por favor, completa todos los campos para iniciar sesión.");
    return;
  }

  const storedPassword = localStorage.getItem(username);
  if (storedPassword === password) {
    alert("Inicio de sesión exitoso. ¡Bienvenido!");

  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}

