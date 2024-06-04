const USUARIOS_KEY = "usuarios"; 
const USUARIO_ACTIVO_KEY = "usuario-activo";

const obtenerUsuarios = () => {
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

export const actualizarUsuario = (usuarioActualizado) => {
    const usuarios = obtenerUsuarios();
    const index = usuarios.findIndex(usuario => usuario.id === usuarioActualizado.id);
    if (index !== -1) {
        usuarios[index] = usuarioActualizado;
        localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios));
    }
};
