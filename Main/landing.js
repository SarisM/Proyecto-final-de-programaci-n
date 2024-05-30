import { obtenerUsuarioEnSesion, logout} from "./session.js";

const render = () => {
   const usuarioActivo = obtenerUsuarioEnSesion();
//importante, si no esta con una cuenta de usuario no deberia poder ver nada
   if(!usuarioActivo) {
    window.location.href = "./index.html";
    return
   }

   const usuarioActivoNombre = document.querySelector("body");
   usuarioActivoNombre.innerHTML = "bienvenido" + usuarioActivo.correo;

   const cerrarSesion = document.querySelector("#cerrarSesion");
   cerrarSesion.addEventListener("click", ()=> {
    alert("se clickea")
    logout ();
    window.location.href = "./index.html"
   });
}

document.addEventListener("DOMContentLoaded", render);