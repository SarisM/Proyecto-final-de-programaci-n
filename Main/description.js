import { obtenerProductos, descripcionTarjeta} from "./utils.js";

const block1 = document.querySelector('.block1')

const urlParams = new URLSearchParams(window.location.search)
const id = parseInt(urlParams.get('id'))

const render = async () => {

    const data = await obtenerProductos();

    // Combinar todas las categorías en una sola lista
    const allItems = [...data.panaderia, ...data.brunch, ...data.bebidasCaliente];

    // Buscar el elemento por ID
    const elemento = allItems.find(item => item.id === id);

    // Verificar que el elemento existe antes de continuar
    if (!elemento) {
        console.error('Elemento no encontrado');
        return;
    }

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

}

    document.addEventListener('DOMContentLoaded', render);