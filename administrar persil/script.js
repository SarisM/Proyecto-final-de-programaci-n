const USUARIOS_ACTIVO_KEY = "usuario-activo";
const USUARIOS_KEY = "usuarios";

// Función para obtener la lista de usuarios desde localStorage
const obtenerUsuarios = () => {
    const usuarios = localStorage.getItem(USUARIOS_KEY);
    return usuarios ? JSON.parse(usuarios) : [];
};

// Función para obtener el usuario actualmente en sesión
const obtenerUsuarioEnSesion = () => {
    const usuarioActivoId = localStorage.getItem(USUARIOS_ACTIVO_KEY);
    if (!usuarioActivoId) {
        return null;
    }

    const usuarios = obtenerUsuarios();
    return usuarios.find(usuario => usuario.id === parseInt(usuarioActivoId));
};

// Función para cerrar sesión
const logout = () => {
    localStorage.removeItem(USUARIOS_ACTIVO_KEY);
    window.location.href = "../2. login/login.html"; // Redirige a la página de login
};

// Función para renderizar la información del usuario
const renderUsuarioInfo = () => {
    const usuario = obtenerUsuarioEnSesion();
    if (!usuario) {
        alert("No hay usuario en sesión");
        window.location.href = "../2. login/login.html"; // Redirige a la página de login
        return;
    }

    document.getElementById("nombre").value = usuario.name;
    document.getElementById("apellido").value = usuario.lastName;
    document.getElementById("correo").value = usuario.correo;
    document.getElementById("contraseña").value = usuario.contraseña;
    document.getElementById("id").textContent = usuario.id;
};

// Asignar el evento de cierre de sesión
document.getElementById("logout").addEventListener("click", logout);

// Renderizar la información del usuario cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", renderUsuarioInfo);
