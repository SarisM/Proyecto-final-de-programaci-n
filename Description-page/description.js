import { obtenerProductos, descripcionTarjeta} from "./utils.js";

const block1 = document.querySelector('.block1')

const urlParams = new URLSearchParams(window.location.search)
const id = parseInt(urlParams.get('id'))

const render = async () => {

    const data = await obtenerProductos();

    const { panaderiaData } = data
	const elemento = panaderiaData.find(item => item.id === id)

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