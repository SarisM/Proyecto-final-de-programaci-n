const USUARIOS_KEY = "usuarios"; 
const USUARIO_ACTIVO_KEY = "usuario-activo";

const obtenerUsuarios = () => {
    //Si hay usuarios almacenados los parsea y devuelve como un array de objetos
    const usuarios = localStorage.getItem(USUARIOS_KEY);
    return usuarios ? JSON.parse(usuarios) : [];
};

export const obtenerUsuarioEnSesion = () => {
    const usuarioActivo = localStorage.getItem(USUARIO_ACTIVO_KEY);
    if (!usuarioActivo) {
        return null;
    }
    const usuarios = obtenerUsuarios();
    return usuarios.find(usuario => usuario.id === parseInt(usuarioActivo)) || null;
};

