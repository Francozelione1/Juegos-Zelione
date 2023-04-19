class Juego {
    constructor(indice, nombre, id, precio, imagen) {
            this.indice = indice,
            this.nombre = nombre,
            this.id = id,
            this.precio = precio,
            this.imagen = imagen
    }
}

class ProductoController {

    constructor() {
        this.listaProductosFila1 = [],
            this.listaProductosFila2 = [],
            this.fila1 = document.getElementById("fila1"),
            this.fila2 = document.getElementById("fila2")
    }

    cargarProductos() {

        this.listaProductosFila1 = 
        [new Juego("a", "God of War".toLowerCase(), 1, 7000, "./assets/juego1.webp"),
        new Juego("b", "Uncharted".toLowerCase(), 2, 8000, "./assets/Juego2.jpg"),
        new Juego("c", "Control".toLowerCase(), 3, 6000, "./assets/Juego3.jpg"),]

        this.listaProductosFila2 = 
        [new Juego("d", "Modern Warfare".toLowerCase(), 4, 9000, "./assets/Juego4.avif"),
        new Juego("e", "Ghost".toLowerCase(), 5, 10000, "./assets/Juego 5.jpg"),
        new Juego("f", "Farcry".toLowerCase(), 6, 5000, "./assets/Juego6.jpg")]

    }

    mostrarEnDom() {
        //CARGA DE JUEGOS EN LA FILA 1
        this.listaProductosFila1.forEach(element => {
            this.fila1.innerHTML += `<div class="card" style="width: 18rem;">
                                        <div class="card-body">
                                            <h5 class="card-title">${element.nombre}</h5>
                                            <img src="${element.imagen}" alt="">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                            the card's content.</p>
                                            <p>Precio: ${element.precio}</p>
                                            <p>Id: ${element.id}</p>
                                            <a href="#" class="btn btn-primary boton" id="juego_${element.id}"><img src="./assets/carrito3.png" class="imagen" alt=""></a>
                                        </div>
                                    </div>`
        })
        //CARGA DE JUEGOS EN LA FILA 2
        this.listaProductosFila2.forEach(element => {
            this.fila2.innerHTML += `<div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${element.nombre}</h5>
                                <img src="${element.imagen}" alt="">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                                <p>Precio: ${element.precio}</p>
                                <p>Id: ${element.id}</p>
                                <a href="#" class="btn btn-primary boton" id="juego_${element.id}"><img src="./assets/carrito3.png" class="imagen" alt=""></a>
                            </div>
                        </div>`
        })
    }

    darEventos(controladorCarrito) {
        this.listaProductosFila1.forEach(el => {
            const btnJuego = document.getElementById(`juego_${el.id}`)
            btnJuego.addEventListener("click", () => {
                controladorCarrito.agregarProducto(el)
                controladorCarrito.limpiarDom()
                controladorCarrito.listaCarrito.forEach(el => {
                    controladorCarrito.contenedorCarrito.innerHTML +=
                        `<div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${el.nombre}</h5>
                                <img src="${el.imagen}" alt="">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                                <p>Precio: ${el.precio}</p>
                                <p>Id: ${el.id}</p>
                                <a href="#" class="btn btn-primary boton" id="juego_${el.id}"><img src="./assets/carrito3.png" class="imagen" alt=""></a>
                            </div>
                        </div>`
                    guardarLocal("listaCarrito", JSON.stringify(controladorCarrito.listaCarrito))
                })
            })
        })

        this.listaProductosFila2.forEach(el => {
            const btnJuego = document.getElementById(`juego_${el.id}`)
            btnJuego.addEventListener("click", () => {
                controladorCarrito.agregarProducto(el)
                controladorCarrito.limpiarDom()
                controladorCarrito.listaCarrito.forEach(el => {
                    controladorCarrito.contenedorCarrito.innerHTML +=
                        `<div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${el.nombre}</h5>
                                <img src="${el.imagen}" alt="">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                                <p>Precio: ${el.precio}</p>
                                <p>Id: ${el.id}</p>
                            </div>
                        </div>`
                    guardarLocal("listaCarrito", JSON.stringify(controladorCarrito.listaCarrito))
                })
            })
        })
    }
}

class CarritoController {

    constructor() {
        this.listaCarrito = []
        this.contenedorCarrito = document.getElementById("modal")
    }
    "v"
    verificarExistenciaEnStorage() {
        const vectorDeStorage= (JSON.parse(localStorage.getItem("listaCarrito"))) || []
        this.listaCarrito = [...vectorDeStorage]
        if (this.listaCarrito.length > 0) {
            this.contenedorCarrito.innerHTML = ``
            this.listaCarrito.forEach(el => {
                this.contenedorCarrito.innerHTML+=
                    `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${el.nombre}</h5>
                            <img src="${el.imagen}" alt="">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                            <p>Precio: ${el.precio}</p>
                            <p>Id: ${el.id}</p>
                        </div>
                    </div>`
        })
        }
    }
    agregarProducto(producto) {
        this.listaCarrito.push(producto)
    }
    limpiarDom() {
        this.contenedorCarrito.innerHTML = ""
    }
    
    
}

const controladorProducto = new ProductoController()
const controladorCarrito = new CarritoController()

controladorProducto.cargarProductos()
controladorProducto.mostrarEnDom()
controladorProducto.darEventos(controladorCarrito)
controladorCarrito.verificarExistenciaEnStorage()

const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
}





