// const renderFavoritos = () => {
//   const favoritosDiv = document.querySelector("#campo1");
//   favoritosDiv.innerHTML = ""; // Limpiar el contenido actual del div

//   // Obtener productos favoritos del localStorage o inicializar como array vacío
//   const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

//   // Recorrer cada producto en favoritos y generar el HTML correspondiente
//   favoritos.forEach((producto) => {
//     const productoHTML = `
//         <div class="Producto">
//           <img src="${producto.img}" alt="${producto.name}">
//           <h3>${producto.name}</h3>
//           <p>${producto.price}</p>
//           <p>${producto.description}</p>
//         </div>
//       `;
//     // Insertar el HTML del producto en el div de favoritos
//     favoritosDiv.innerHTML += productoHTML;
//   });
// };

// // Llamar a la función de renderizado de favoritos cuando se carga la página
// document.addEventListener("DOMContentLoaded", renderFavoritos);


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
  const favoritos = usuario.favoritos;

  const favoritosContainer = document.getElementById('favoritos');
  favoritosContainer.innerHTML = '';

  if (favoritos.length === 0) {
    favoritosContainer.textContent = 'No tienes productos en tus favoritos.';
    return;
  }

  favoritos.forEach(favoritoId => {
    const producto = productos.panaderia.find(p => p.id === favoritoId) ||
                     productos.brunch.find(p => p.id === favoritoId) ||
                     productos.bebidasCaliente.find(p => p.id === favoritoId);

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
