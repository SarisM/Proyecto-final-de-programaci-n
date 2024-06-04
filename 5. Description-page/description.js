// const block1 = document.querySelector(".block1");

// const urlParams = new URLSearchParams(window.location.search);
// const id = parseInt(urlParams.get("id"));

// const obtenerProductos = async () => {
//   const response = await fetch(
//     "https://raw.githubusercontent.com/SarisM/Proyecto-final-de-programaci-n/main/4.%20Main/data.json"
//   );
//   const data = await response.json();
//   return data;
// };

// class descripcionTarjeta {
//   #id;
//   img;
//   name;
//   price;
//   description;
//   #nodo;

//   constructor(id, img, name, price, description) {
//     this.#id = id;
//     this.img = img;
//     this.name = name;
//     this.price = price;
//     this.description = description;
//     //this.#nodo = nodo;
//   }

//   render() {
//     const container = document.createElement("div");
//     container.innerHTML = `
//     <div class="innerblocks1" id="productoextra">
//     <img src="${this.img}" alt="${this.name}" class="img-detail">
//     </div>
//     <div class="bottomblock1">
//     <p class="letras1">${this.name}</p>
//                 <p id="cuadrotexto">${this.description}</p>
//                 <p>${this.price}</p>
//                 <div class="añadir">
//                 <p class="añadir__text" id="add">Añadir a favoritos.</p>
//                 </div>
//                 </div>
//                 `;
//     return container;
//   }
// }

// const render = async () => {
//   const data = await obtenerProductos();
//   console.log(data);

//   // Extraer las categorías "panaderia", "brunch" y "bebidasCalientes" del objeto data
//   const { panaderia, brunch, bebidasCaliente } = data;

//   // Buscar el elemento con el ID correspondiente
//   const elemento =
//     panaderia.find((item) => item.id === id) ||
//     brunch.find((item) => item.id === id) ||
//     bebidasCaliente.find((item) => item.id === id);

//   const Descripcion = new descripcionTarjeta(
//     elemento.id,
//     elemento.img,
//     elemento.name,
//     elemento.price,
//     elemento.description,
//     elemento.nodo
//   );
//   const productoRender = Descripcion.render();

//   block1.appendChild(productoRender);

//   const addButton = document.getElementById("add");
//   addButton.addEventListener("click", () => {
//     // Obtener productos favoritos del localStorage o inicializar como array vacío
//     let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
//     // Agregar el producto actual a la lista de favoritos
//     favoritos.push(elemento);
//     // Guardar la lista actualizada en el localStorage
//     localStorage.setItem("favoritos", JSON.stringify(favoritos));
//     alert("Producto añadido a favoritos.");
//   });
// };

// document.addEventListener("DOMContentLoaded", render);



import { obtenerUsuarioEnSesion, actualizarUsuario } from './session.js';

const block1 = document.querySelector(".block1");

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));

const obtenerProductos = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/SarisM/Proyecto-final-de-programaci-n/main/4.%20Main/data.json"
  );
  const data = await response.json();
  return data;
};

class DescripcionTarjeta {
  #id;
  img;
  name;
  price;
  description;

  constructor(id, img, name, price, description) {
    this.#id = id;
    this.img = img;
    this.name = name;
    this.price = price;
    this.description = description;
  }

  render() {
    const container = document.createElement("div");
    container.classList.add("div-producto");
    container.innerHTML = `
    <div class="innerblocks1" id="productoextra">
      <img src="${this.img}" alt="${this.name}" class="img-detail">
    </div>
    <div class="bottomblock1">
      <p class="letras1">${this.name}</p>
      <p id="cuadrotexto">${this.description}</p>
      <p>${this.price}</p>
      <div class="añadir">
        <p class="añadir__text" id="add">Añadir a favoritos.</p>
      </div>
    </div>`;
    return container;
  }
}

const render = async () => {
  const data = await obtenerProductos();
  console.log(data);

  const { panaderia, brunch, bebidasCaliente } = data;

  const elemento =
    panaderia.find((item) => item.id === id) ||
    brunch.find((item) => item.id === id) ||
    bebidasCaliente.find((item) => item.id === id);

  if (!elemento) {
    alert("Producto no encontrado.");
    return;
  }

  const descripcion = new DescripcionTarjeta(
    elemento.id,
    elemento.img,
    elemento.name,
    elemento.price,
    elemento.description
  );
  const productoRender = descripcion.render();

  block1.appendChild(productoRender);

  const addButton = document.getElementById("add");
  addButton.addEventListener("click", () => {
    const usuario = obtenerUsuarioEnSesion();
    if (!usuario) {
      alert("Por favor, inicia sesión para añadir productos a favoritos.");
      return;
    }

    if (!usuario.favoritos.includes(elemento.id)) {
      usuario.favoritos.push(elemento.id);
      actualizarUsuario(usuario);
      alert("Producto añadido a favoritos.");
    } else {
      alert("El producto ya está en tus favoritos.");
    }
  });
};

document.addEventListener("DOMContentLoaded", render);

