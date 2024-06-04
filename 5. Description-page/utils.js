// export const obtenerProductos = async () => {
// 	const response = await fetch(
// 		'https://raw.githubusercontent.com/SarisM/Proyecto-final-de-programaci-n/main/4.%20Main/data.json'
// 	)
// 	const data = await response.json()
// 	return data
// }

// export class panaderia {
// 	#id
// 	img
// 	name
// 	price
// 	#nodo

// 	constructor(id, img, name, price) {
// 		this.#id = id
// 		this.img = img
// 		this.name = name
// 		this.price = price
// 		//this.#nodo = nodo;
// 	}

// 	render() {
// 		const block = document.createElement('div')
// 		block.classList.add('block')

// 		const block_innerblocks = document.createElement('div')
// 		block_innerblocks.classList.add('block__innerblocks')
// 		block.appendChild(block_innerblocks)

// 		const imgBlockInnerblocks = document.createElement('img')
// 		imgBlockInnerblocks.src = this.img
// 		imgBlockInnerblocks.alt = this.name
// 		block_innerblocks.appendChild(imgBlockInnerblocks)

// 		const bottomblock = document.createElement('div')
// 		bottomblock.classList.add('block__bottomblock')

// 		const title = document.createElement('p')
// 		title.classList.add('block__bottomblock--letras')
// 		title.textContent = this.name
// 		bottomblock.appendChild(title)

// 		const priceElement = document.createElement('p')
// 		priceElement.innerText = this.price
// 		bottomblock.appendChild(priceElement)

// 		const button = document.createElement('button')
// 		button.textContent = 'More'
// 		button.classList.add('more')
// 		bottomblock.appendChild(button)

// 		block.appendChild(bottomblock)

// 		button.addEventListener('click', () => {
// 			window.location.href = '/Description-page/description.html?id=' + this.#id
// 		})

// 		return block
// 	}
// }

// export class brunch {
// 	#id
// 	img
// 	name
// 	price
// 	#nodo

// 	constructor(id, img, name, price) {
// 		this.#id = id
// 		this.img = img
// 		this.name = name
// 		this.price = price
// 		//this.#nodo = nodo;
// 	}

// 	render() {
// 		const block = document.createElement('div')
// 		block.classList.add('block')

// 		const block_innerblocks = document.createElement('div')
// 		block_innerblocks.classList.add('block__innerblocks')
// 		block.appendChild(block_innerblocks)

// 		const imgBlockInnerblocks = document.createElement('img')
// 		imgBlockInnerblocks.src = this.img
// 		imgBlockInnerblocks.alt = this.name
// 		block_innerblocks.appendChild(imgBlockInnerblocks)

// 		const bottomblock = document.createElement('div')
// 		bottomblock.classList.add('block__bottomblock')

// 		const title = document.createElement('p')
// 		title.classList.add('block__bottomblock--letras')
// 		title.textContent = this.name
// 		bottomblock.appendChild(title)

// 		const priceElement = document.createElement('p')
// 		priceElement.innerText = this.price
// 		bottomblock.appendChild(priceElement)

// 		const button = document.createElement('button')
// 		button.textContent = 'More'
// 		button.classList.add('more')
// 		bottomblock.appendChild(button)

// 		block.appendChild(bottomblock)

// 		button.addEventListener('click', () => {
// 			window.location.href = '/Description-page/description.html?id=' + this.#id
// 		})


// 		return block
// 	}
// }

// export class bebidasCaliente {
// 	#id
// 	img
// 	name
// 	price
// 	#nodo

// 	constructor(id, img, name, price) {
// 		this.#id = id
// 		this.img = img
// 		this.name = name
// 		this.price = price
// 		//this.#nodo = nodo;
// 	}

// 	render() {
// 		const block = document.createElement('div')
// 		block.classList.add('block')

// 		const block_innerblocks = document.createElement('div')
// 		block_innerblocks.classList.add('block__innerblocks')
// 		block.appendChild(block_innerblocks)

// 		const imgBlockInnerblocks = document.createElement('img')
// 		imgBlockInnerblocks.src = this.img
// 		imgBlockInnerblocks.alt = this.name
// 		block_innerblocks.appendChild(imgBlockInnerblocks)

// 		const bottomblock = document.createElement('div')
// 		bottomblock.classList.add('block__bottomblock')

// 		const title = document.createElement('p')
// 		title.classList.add('block__bottomblock--letras')
// 		title.textContent = this.name
// 		bottomblock.appendChild(title)

// 		const priceElement = document.createElement('p')
// 		priceElement.innerText = this.price
// 		bottomblock.appendChild(priceElement)

// 		const button = document.createElement('button')
// 		button.textContent = 'More'
// 		button.classList.add('more')
// 		bottomblock.appendChild(button)

// 		block.appendChild(bottomblock)

// 		button.addEventListener('click', () => {
// 			window.location.href = '/Description-page/description.html?id=' + this.#id
// 		})

// 		return block
// 	}

	
// }

// export class descripcionTarjeta {
// 	#id
// 	img
// 	name
// 	price
// 	descripcion
// 	#nodo

// 	constructor(id, img, name, price, descripcion) {
// 		this.#id = id
// 		this.img = img
// 		this.name = name
// 		this.price = price
// 		this.descripcion = descripcion
// 		//this.#nodo = nodo;
// 	}

// 	render() {
// 		const container = document.createElement('div')
//         container.innerHTML = `
//             <div class="innerblocks1" id="productoextra">
//                 <img src="${this.img}" alt="${this.name}" class="img-detail">
//             </div>
//             <div class="bottomblock1">
//                 <p class="letras1">${this.name}</p>
//                 <p id="cuadrotexto">${this.description}</p>
//                 <p>${this.price}</p>
//                 <div class="añadir">
//                     <p class="añadir__text">Añadir a favoritos</p>
//                 </div>
//             </div>
//         `;
//         return container
// 	}

	
// }