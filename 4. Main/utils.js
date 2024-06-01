export const obtenerProductos = async () => {
    const response = await fetch('https://raw.githubusercontent.com/SarisM/Proyecto-final-de-programaci-n/main/4.%20Main/data.json')
    const data = await response.json()
    return data
}

export class Panaderia {
    #id
    img
    name
    price

    constructor(id, img, name, price) {
        this.#id = id
        this.img = img
        this.name = name
        this.price = price
    }

    render() {
        const block = document.createElement('div')
        block.classList.add('block')

        const blockInnerblocks = document.createElement('div')
        blockInnerblocks.classList.add('block__innerblocks')
        block.appendChild(blockInnerblocks)

        const imgBlockInnerblocks = document.createElement('img')
        imgBlockInnerblocks.src = this.img
        imgBlockInnerblocks.alt = this.name
        blockInnerblocks.appendChild(imgBlockInnerblocks)

        const bottomblock = document.createElement('div')
        bottomblock.classList.add('block__bottomblock')

        const title = document.createElement('p')
        title.classList.add('block__bottomblock--letras')
        title.textContent = this.name
        bottomblock.appendChild(title)

        const priceElement = document.createElement('p')
        priceElement.innerText = this.price
        bottomblock.appendChild(priceElement)

        const button = document.createElement('button')
        button.textContent = 'More'
        button.classList.add('more')
        bottomblock.appendChild(button)

        block.appendChild(bottomblock)

        button.addEventListener('click', () => {
            window.location.href = '../5. Description-page/description.html?id=' + this.#id
        })

        return block
    }
}

export class Brunch {
    #id
    img
    name
    price

    constructor(id, img, name, price) {
        this.#id = id
        this.img = img
        this.name = name
        this.price = price
    }

    render() {
        const block = document.createElement('div')
        block.classList.add('block')

        const blockInnerblocks = document.createElement('div')
        blockInnerblocks.classList.add('block__innerblocks')
        block.appendChild(blockInnerblocks)

        const imgBlockInnerblocks = document.createElement('img')
        imgBlockInnerblocks.src = this.img
        imgBlockInnerblocks.alt = this.name
        blockInnerblocks.appendChild(imgBlockInnerblocks)

        const bottomblock = document.createElement('div')
        bottomblock.classList.add('block__bottomblock')

        const title = document.createElement('p')
        title.classList.add('block__bottomblock--letras')
        title.textContent = this.name
        bottomblock.appendChild(title)

        const priceElement = document.createElement('p')
        priceElement.innerText = this.price
        bottomblock.appendChild(priceElement)

        const button = document.createElement('button')
        button.textContent = 'More'
        button.classList.add('more')
        bottomblock.appendChild(button)

        block.appendChild(bottomblock)

        button.addEventListener('click', () => {
            window.location.href = '../5. Description-page/description.html?id=' + this.#id
        })

        return block
    }
}

export class BebidasCaliente {
    #id
    img
    name
    price

    constructor(id, img, name, price) {
        this.#id = id
        this.img = img
        this.name = name
        this.price = price
    }

    render() {
        const block = document.createElement('div')
        block.classList.add('block')

        const blockInnerblocks = document.createElement('div')
        blockInnerblocks.classList.add('block__innerblocks')
        block.appendChild(blockInnerblocks)

        const imgBlockInnerblocks = document.createElement('img')
        imgBlockInnerblocks.src = this.img
        imgBlockInnerblocks.alt = this.name
        blockInnerblocks.appendChild(imgBlockInnerblocks)

        const bottomblock = document.createElement('div')
        bottomblock.classList.add('block__bottomblock')

        const title = document.createElement('p')
        title.classList.add('block__bottomblock--letras')
        title.textContent = this.name
        bottomblock.appendChild(title)

        const priceElement = document.createElement('p')
        priceElement.innerText = this.price
        bottomblock.appendChild(priceElement)

        const button = document.createElement('button')
        button.textContent = 'More'
        button.classList.add('more')
        bottomblock.appendChild(button)

        block.appendChild(bottomblock)

        button.addEventListener('click', () => {
            console.log("Hola")
            window.location.href = '../5. Description-page/description.html?id=' + this.#id
        })

        return block
    }
}
