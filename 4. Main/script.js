import { obtenerProductos, Panaderia, Brunch, BebidasCaliente } from './utils.js'

const render = async () => {
    // Asegúrate de tener definida esta función o eliminar esta línea si no es necesaria
    // revisarSesion();

    const data = await obtenerProductos()
    const campo1 = document.querySelector('#campo1')

    for (const producto of data.panaderia) {
        const panaderia = new Panaderia(
            producto.id,
            producto.img,
            producto.name,
            producto.price
        )
        const productoRender = panaderia.render()
        campo1.appendChild(productoRender)
    }

    const campo2 = document.querySelector('#campo2')

    for (const producto of data.brunch) {
        const brunch = new Brunch(
            producto.id,
            producto.img,
            producto.name,
            producto.price
        )
        const productoRender = brunch.render()
        campo2.appendChild(productoRender)
    }

    const campo3 = document.querySelector('#campo3')

    for (const producto of data.bebidasCaliente) {
        const bebidasCalientes = new BebidasCaliente(
            producto.id,
            producto.img,
            producto.name,
            producto.price
        )
        const productoRender = bebidasCalientes.render()
        campo3.appendChild(productoRender)
    }
}

document.addEventListener('DOMContentLoaded', render)
