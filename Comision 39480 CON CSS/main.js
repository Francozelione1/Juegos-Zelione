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

        this.listaProductosFila1 = [new Juego("a", "God of War".toLowerCase(), 1, 7000, "./assets/Juego 5.jpg"),
        new Juego("b", "Uncharted".toLowerCase(), 2, 8000, "./assets/Juego 5.jpg"),
        new Juego("c", "Control".toLowerCase(), 3, 6000, "./assets/Juego 5.jpg"),]

        this.listaProductosFila2 = [new Juego("d", "Modern Warfare".toLowerCase(), 4, 9000, "./assets/Juego 5.jpg"),
        new Juego("e", "Ghost".toLowerCase(), 5, 10000, "./assets/Juego 5.jpg"),
        new Juego("f", "Farcry".toLowerCase(), 6, 5000, "./assets/Juego 5.jpg")]

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
                                            <a href="#" class="btn btn-primary boton" id="juego_${element.id}"><img src="./assets/carrito.png" alt=""></a>
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
                                <a href="#" class="btn btn-primary boton" id="juego_${element.id}"><img src="./assets/carrito.png" alt=""></a>
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
                                <a href="#" class="btn btn-primary boton" id="juego_${el.id}"><img src="./assets/carrito.png" alt=""></a>
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
                                <a href="#" class="btn btn-primary boton" id="juego_${el.id}"><img src="./assets/carrito.png" alt=""></a>
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
                            <a href="#" class="btn btn-primary boton" id="juego_${el.id}"><img src="./assets/carrito.png" alt=""></a>
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







/* class Juego {
    constructor(indice, nombre, id, precio, imagen) {
        this.indice = indice,
        this.nombre = nombre,
        this.id = id,
        this.precio = precio,
        this.imagen=imagen
    }
}

class Persona {
    constructor(nombre, juego) {
        this.nombre = nombre,
            this.juego = juego
    }
}

const listaJuegos = [
    new Juego("a", "God of War".toLowerCase(), 1, 7000,"./assets/Juego 5.jpg"),
    new Juego("b", "Uncharted".toLowerCase(), 2, 8000,"./assets/Juego 5.jpg"),
    new Juego("c", "Control".toLowerCase(), 3, 6000,"./assets/Juego 5.jpg"),
]

const listaJuegos2 = [
    new Juego("d", "Modern Warfare".toLowerCase(), 4, 9000,"./assets/Juego 5.jpg"),
    new Juego("e", "Ghost".toLowerCase(), 5, 10000,"./assets/Juego 5.jpg"),
    new Juego("f", "Farcry".toLowerCase(), 6, 5000,"./assets/Juego 5.jpg")
]
   
const listaPersonas = []
const listaCarrito=[]

//DOM
const fila1 = document.getElementById("fila1")
const fila2 = document.getElementById("fila2")
const modal=document.getElementById("modal")

//CARGA DE JUEGOS EN LA FILA 1
listaJuegos.forEach(element => {
    fila1.innerHTML += `<div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${element.nombre}</h5>
                                <img src="${element.imagen}" alt="">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                                <p>Precio: ${element.precio}</p>
                                <p>Id: ${element.id}</p>
                                <a href="#" class="btn btn-primary boton" id="juego_${element.id}"><img src="./assets/carrito.png" alt=""></a>
                            </div>
                        </div>`
})

//CARGA DE JUEGOS EN LA FILA 2
listaJuegos2.forEach(element => {
    fila2.innerHTML += `<div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${element.nombre}</h5>
                                <img src="${element.imagen}" alt="">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                                <p>Precio: ${element.precio}</p>
                                <p>Id: ${element.id}</p>
                                <a href="#" class="btn btn-primary boton" id="juego_${element.id}"><img src="./assets/carrito.png" alt=""></a>
                            </div>
                        </div>`
   
})


//carga al dom fila 1
listaJuegos.forEach(element =>{

    const btnJuego=document.getElementById(`juego_${element.id}`)

    btnJuego.addEventListener("click",()=>{

        listaCarrito.push(element)

        modal.innerHTML=""

        listaCarrito.forEach(element=>{

            modal.innerHTML+=`<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${element.nombre}</h5>
                            <img src="${element.imagen}" alt="">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                            <p>Precio: ${element.precio}</p>
                            <p>Id: ${element.id}</p>
                        </div>
                    </div>`


        })

    })

})

//CARGA AL DOM, FILA 2
listaJuegos2.forEach(element=>{

    const btnJuego=document.getElementById(`juego_${element.id}`)

    btnJuego.addEventListener("click",()=>{

        listaCarrito.push(element)

        modal.innerHTML=""

        listaCarrito.forEach(element=>{

            modal.innerHTML+=`<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${element.nombre}</h5>
                            <img src="${element.imagen}" alt="">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                            <p>Precio: ${element.precio}</p>
                            <p>Id: ${element.id}</p>
                        </div>
                    </div>`


        })

    })


})



 */

/* class Juego{
    constructor(indice,nombre,id,precio){
        this.indice=indice,
        this.nombre=nombre,
        this.id=id,
        this.precio=precio
    }
}

class Persona{
    constructor(nombre,juego){
        this.nombre=nombre,
        this.juego=juego
    }
}

const listaJuegos=[
    new Juego("a","God of War".toLowerCase(),1,7000),
    new Juego("b","Uncharted".toLowerCase(),2,8000),
    new Juego("c","Control".toLowerCase(),3,6000),
    new Juego("d","Modern Warfare".toLowerCase(),4,9000),
    new Juego("e","Ghost".toLowerCase(),5,10000),
    new Juego("f","Farcry".toLowerCase(),6,5000),
  ]

const listaPersonas=[]

const miformulario=document.getElementById("formulario")
const mostrarPersonas=document.getElementById("mostrarPersonas")

miformulario.addEventListener("submit", (e)=>{

    e.preventDefault()

    const nombre=document.getElementById("nombre").value
    const juego=document.getElementById("juego").value

    const persona=new Persona(nombre, juego)

    listaPersonas.push(persona)

    limpiarDom(mostrarPersonas)

    listaPersonas.forEach(element =>{
        mostrarEnDom(mostrarPersonas, element)
    });

    miformulario.reset()

})


function limpiarDom(mostrarPersonas){
    mostrarPersonas.innerHTML=""
}

function mostrarEnDom(mostrarPersonas, element){
    mostrarPersonas.innerHTML+='<div> <p>Nombre: "+element.nombre+"</p> <p>Juego: "+element.juego+"</p> </div>'
    mostrarPersonas.className="juegazos"
}*/

/* if(JSON.parse(localStorage.getItem("listaCarrito")) != ""){
        const carrito=JSON.parse(localStorage.getItem("listaCarrito"))
        carrito.forEach(el =>{
            this.contenedorCarrito.innerHTML = `<div class="card" style="width: 18rem;">
                                                    <div class="card-body">
                                                        <h5 class="card-title">${el.nombre}</h5>
                                                        <img src="${el.imagen}" alt="">
                                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                                        the card's content.</p>
                                                        <p>Precio: ${el.precio}</p>
                                                        <p>Id: ${el.id}</p>
                                                        <a href="#" class="btn btn-primary boton" id="juego_${el.id}"><img src="./assets/carrito.png" alt=""></a>
                                                    </div>
                                                </div>`
        })
        }*/


/* /*mostrarEnDom() {
            this.contenedorCarrito.innerHTML = ``
            this.listaCarrito.forEach(el => {
                        `<div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${el.nombre}</h5>
                                <img src="${el.imagen}" alt="">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                                <p>Precio: ${el.precio}</p>
                                <p>Id: ${el.id}</p>
                                <a href="#" class="btn btn-primary boton" id="juego_${el.id}"><img src="./assets/carrito.png" alt=""></a>
                            </div>
                        </div>`
        })
    }*/ 