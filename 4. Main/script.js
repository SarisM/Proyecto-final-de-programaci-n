import { obtenerProductos, Panaderia, Brunch, BebidasCaliente } from './utils.js';

const renderizarProductos = async (textoBusqueda) => {
    console.log('Renderizando productos con búsqueda:', textoBusqueda);
    const data = await obtenerProductos();
    const textoLimpio = textoBusqueda.toLowerCase();

    // Renderizar productos de panadería
    const campo1 = document.querySelector('#campo1');
    campo1.innerHTML = '';

    for (const producto of data.panaderia) {
        const panaderia = new Panaderia(
            producto.id,
            producto.img,
            producto.name,
            producto.price
        );
        const productoRender = panaderia.render();

        if (textoLimpio === '' || producto.name.toLowerCase().includes(textoLimpio)) {
            campo1.appendChild(productoRender);
        }
    }

    // Renderizar productos de brunch
    const campo2 = document.querySelector('#campo2');
    campo2.innerHTML = '';

    for (const producto of data.brunch) {
        const brunch = new Brunch(
            producto.id,
            producto.img,
            producto.name,
            producto.price
        );
        const productoRender = brunch.render();

        if (textoLimpio === '' || producto.name.toLowerCase().includes(textoLimpio)) {
            campo2.appendChild(productoRender);
        }
    }

    // Renderizar productos de bebidas calientes
    const campo3 = document.querySelector('#campo3');
    campo3.innerHTML = '';

    for (const producto of data.bebidasCaliente) {
        const bebidasCalientes = new BebidasCaliente(
            producto.id,
            producto.img,
            producto.name,
            producto.price
        );
        const productoRender = bebidasCalientes.render();

        if (textoLimpio === '' || producto.name.toLowerCase().includes(textoLimpio)) {
            campo3.appendChild(productoRender);
        }
    }
};

const render = async () => {
    console.log('Iniciando renderizado');
    await renderizarProductos('');

    const barraBusqueda = document.querySelector('.barraBusqueda');
    console.log('Barra de búsqueda seleccionada:', barraBusqueda);

    barraBusqueda.addEventListener('input', async (event) => {
        const textoBusqueda = event.target.value;
        console.log('Texto de búsqueda:', textoBusqueda);
        await renderizarProductos(textoBusqueda);
    });
};

document.addEventListener('DOMContentLoaded', render);



