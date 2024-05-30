import {login} from "./session.js";
//IMPORTAR DESDE LA OTRA CARPETA

const render = () => {
    const loginForm= document.querySelector("#login");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const correo = e.target.correo.value;
        const contraseña = e.target.contraseña.value;

        try {
            login(correo, contraseña);
//IR A MI MAIN                
//ahora nos redirigimos a la landing             
            window.location.href = "./landing.html";
        } catch (error) {
            alert(error.message);
        }

    });
};

document.addEventListener("DOMContentLoaded", render);