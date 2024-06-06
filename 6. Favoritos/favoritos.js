import { obtenerUsuarioEnSesion } from './session.js';
import { obtenerProductos } from './productos.js';

const renderFavoritos = async () => {
  const usuario = obtenerUsuarioEnSesion();
  if (!usuario) {
    alert("Por favor, inicia sesión para ver tus favoritos.");
    window.location.href = 'login.html';
    return;
  }

  const productos = await obtenerProductos();
  //Obtener los favoritos del usuario
  const favoritos = usuario.favoritos;

  const favoritosContainer = document.getElementById('favoritos');
  favoritosContainer.innerHTML = '';

  //Verificar si hay productos favoritos
  if (favoritos.length === 0) {
    favoritosContainer.textContent = 'No tienes productos en tus favoritos.';
    return;
  }

  favoritos.forEach(favoritoId => {
    const producto = productos.panaderia.find(p => p.id === favoritoId) ||
                     productos.brunch.find(p => p.id === favoritoId) ||
                     productos.bebidasCaliente.find(p => p.id === favoritoId);

  //Crear y agregar el contenedor de cada producto favorito
    if (producto) {
      const container = document.createElement("div");
      container.classList.add("div");
      container.innerHTML = `
        <div class="innerblocks1">
          <img src="${producto.img}" alt="${producto.name}" class="img-detail">
        </div>
        <div class="bottomblock1">
          <p class="letras1">${producto.name}</p>
          <p id="cuadrotexto">${producto.description}</p>
          <p>${producto.price}</p>
        </div>`;
      favoritosContainer.appendChild(container);
    }
  });
};

document.addEventListener("DOMContentLoaded", renderFavoritos);
