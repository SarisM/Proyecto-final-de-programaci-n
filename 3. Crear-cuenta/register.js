import { registrar } from "./session.js";

const render = () => {
  const registro = document.querySelector("#registro");

  registro.addEventListener("submit", (e) => {
    e.preventDefault();
    //Obtiener los valores de los campos del formulario
    const name = e.target.name.value;
    const lastName = e.target.lastName.value;
    const correo = e.target.correo.value;
    const contraseña = e.target.contraseña.value;
    const confirmarContraseña = e.target.confirmarContraseña.value;

    try {
      registrar(name, lastName, correo, contraseña, confirmarContraseña);
      alert("Usuario registrado exitosamente");
      //ahora nos redirigimos al login
      window.location.href = "../2. login/login.html";
    } catch (error) {
      alert(error.message);
    }
  });
};

document.addEventListener("DOMContentLoaded", render);
