const renderFavoritos = () => {
  const favoritosDiv = document.querySelector("#campo1");
  favoritosDiv.innerHTML = ""; // Limpiar el contenido actual del div

  // Obtener productos favoritos del localStorage o inicializar como array vacío
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  // Recorrer cada producto en favoritos y generar el HTML correspondiente
  favoritos.forEach((producto) => {
    const productoHTML = `
        <div class="Producto">
          <img src="${producto.img}" alt="${producto.name}">
          <h3>${producto.name}</h3>
          <p>${producto.price}</p>
          <p>${producto.description}</p>
        </div>
      `;
    // Insertar el HTML del producto en el div de favoritos
    favoritosDiv.innerHTML += productoHTML;
  });
};

// Llamar a la función de renderizado de favoritos cuando se carga la página
document.addEventListener("DOMContentLoaded", renderFavoritos);
