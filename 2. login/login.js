const USUARIOS_KEY = "usuarios";
const USUARIOS_ACTIVO_KEY = "usuario-activo";

const obtenerUsuarios = () => {
  const usuarios = localStorage.getItem(USUARIOS_KEY);

  if (!usuarios) {
    return [];
  }
  return JSON.parse(usuarios);
};

const login = (correo, contraseña) => {
  const usuarios = obtenerUsuarios();
  for (const usuario of usuarios) {
    if (usuario.correo === correo && usuario.contraseña === contraseña) {
      localStorage.setItem(USUARIOS_ACTIVO_KEY, usuario.id);
      return usuario;
    }
  }

  throw new Error("Usuario y/o contraseña incorrectos");
};

const render = () => {
  const loginForm = document.querySelector("#login");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const correo = e.target.correo.value;
    const contraseña = e.target.contraseña.value;

    try {
      login(correo, contraseña);
      //ahora nos redirigimos a la main
      window.location.href = "../4. Main/main.html";
    } catch (error) {
      alert(error.message);
    }
  });
};

document.addEventListener("DOMContentLoaded", render);
