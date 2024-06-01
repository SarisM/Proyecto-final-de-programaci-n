// import { descripcionTarjeta } from "./utils.js";

const block1 = document.querySelector(".block1");

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));

const obtenerProductos = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/Dxnrojas/updateLanding/sara/Parcial-I/data.json"
  );
  const data = await response.json();
  return data;
};

class descripcionTarjeta {
  #id;
  img;
  name;
  price;
  descripcion;
  #nodo;

  constructor(id, img, name, price, descripcion) {
    this.#id = id;
    this.img = img;
    this.name = name;
    this.price = price;
    this.descripcion = descripcion;
    //this.#nodo = nodo;
  }

  render() {
    const container = document.createElement("div");
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
                </div>
                `;
    return container;
  }
}

const render = async () => {
  const data = await obtenerProductos();
  console.log(data);

  // Extraer las categorías "panaderia", "brunch" y "bebidasCalientes" del objeto data
  const { panaderia, brunch, bebidasCaliente } = data;

  // Buscar el elemento con el ID correspondiente
  const elemento =
    panaderia.find((item) => item.id === id) ||
    brunch.find((item) => item.id === id) ||
    bebidasCaliente.find((item) => item.id === id);

  const Descripcion = new descripcionTarjeta(
    elemento.id,
    elemento.img,
    elemento.name,
    elemento.price,
    elemento.description,
    elemento.nodo
  );
  const productoRender = Descripcion.render();

  block1.appendChild(productoRender);

  const addButton = document.getElementById("add");
  addButton.addEventListener("click", () => {
    // Obtener productos favoritos del localStorage o inicializar como array vacío
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    // Agregar el producto actual a la lista de favoritos
    favoritos.push(elemento);
    // Guardar la lista actualizada en el localStorage
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    alert("Producto añadido a favoritos.");
  });
};

document.addEventListener("DOMContentLoaded", render);
