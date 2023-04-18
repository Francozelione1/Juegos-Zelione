class Juego{
    constructor(indice,nombre,id,precio){
        this.indice=indice,
        this.nombre=nombre,
        this.id=id,
        this.precio=precio
    }
}
class Cliente{
    constructor(nombre,edad,juegos,total){
        this.nombre=nombre;
        this.edad=edad;
        this.juegos=juegos;
        this.total=total
    }
}
class ListaPersonas{
    constructor(){
        this.listaPersonas=[]
    }

    agregar(juegos,nom,edad,promo){
        let total=0
        const miObjeto={};
        let juegos2=[]
        juegos.forEach(element => {
                juegos2.push(element.nombre)
                total+=element.precio
        });
        for (let index = 0; index < juegos.length; index++) {
            miObjeto[index]=juegos2[index]
        }

        this.listaPersonas.push(new Cliente(nom,edad,miObjeto,this.calcularTotal(total,promo)))
        
    }

    calcularTotal(total,promo){
        if(promo=="si"){
            total=total-(total*0.1)
        }
        return total
    }
    
    buscarPersona(buscado){
        const resultado=this.listaPersonas.find((el)=>el.nombre==buscado)
        return resultado
    }
}

const listaJuegos=[
                    new Juego("a","God of War".toLowerCase(),1,7000),
                    new Juego("b","Fifa 23".toLowerCase(),2,8000),
                    new Juego("c","Hogwarts Legacy".toLowerCase(),3,6000),
                    new Juego("d","The witcher".toLowerCase(),4,9000),
                    new Juego("e","Spiderman".toLowerCase(),5,10000),
                    new Juego("f","Zelda".toLowerCase(),6,5000),
                  ]

const listaPersona=new ListaPersonas()
let rta=""
let buscado=""
let rta2=""

do{
    rta=prompt("Indique la opcion que desea: \na) Ver el catalogo \nb) Buscar un juego")
    switch(rta){
        case "a":
            let juego=""
            const juegos=[]
            let acumulador=""
            listaJuegos.forEach(element=>{acumulador+=element.indice+") "+" nombre: "+element.nombre+"/ id: "+element.id+"/ precio: "+element.precio+"\n"})

            do{
                juego=prompt("Indique el juego que desea: \n".toLowerCase()+acumulador)
                juegos.push(listaJuegos.find(el=>el.indice==juego))
                rta2=prompt("¿Desea elegir otro juego? (si/no)".toLowerCase())
            }while(rta2!="no")

            let nom=prompt("Ingrese su nombre")
            console.log("Bienvenido/a: "+nom);
            let edad=Number(prompt("Indique su edad"))
            let promo=""

            do{
                promo=prompt("¿Es usted socio de JuegosPlus? (si/no)").toLowerCase()
            }while((promo!="si")&&(promo!="no"))

            listaPersona.agregar(juegos,nom,edad,promo)

            break;

        case "b":
            let resultado
            do{
                buscado=prompt("Ingrese el nombre de un juego para buscarlo")
                resultado=listaJuegos.find(el=>el.nombre==buscado)
                if(resultado==undefined){
                    alert("No existe tal juego");
                }
                else{
                    alert("Nombre: "+resultado.nombre+"/ id: "+resultado.id+"/ precio: "+resultado.precio);
                }
                rta2=prompt("¿Desea buscar otro juego?".toLowerCase())
            }while(rta2!="no")

            break;

    }
            
    rta2=prompt("¿Desea seguir con el programa?").toLowerCase()

}while(rta2!="no")

console.log(listaPersona);

rta2=prompt("¿Desea ver su pedido?".toLowerCase())
    if(rta2=="si"){
        buscado=prompt("Ingrese su nombre para ver su pedido".toLowerCase())
        console.log(listaPersona.buscarPersona(buscado))
    }



/*
class ListaPersonas{

    constructor(){
        this.listaPersonas=[]
    }

    agregar(){

        let edad=""
        let juego=""
        let valor=0
        let rta=""
        let juegos=[]
        let vectorTotal=[]
        const miObjeto={};
        let nom=prompt("Ingrese su nombre")
        console.log("Bienvenido/a: "+nom);
        edad=Number(prompt("Indique su edad"))
        do{
            juego=prompt("Indique el juego que desea: \na) Fifa 23 (8000$) \nb) God of War (7000$) \nc) Hogwarts Legacy (6000$)").toLowerCase()
            switch(juego){
                case "a":
                    console.log("El juego seleccionado ha sido: "+"Fifa 23");
                    juego="Fifa 23"
                    valor=8000
                    break;
                
                case "b":
                    console.log("El juego seleccionado ha sido: "+"God of War");
                    juego="God of War"
                    valor=7000
                    break;
                
                case "c":
                    console.log("El juego seleccionado ha sido: "+"Hogwarts Legacy");
                    juego="Hogwarts Legacy"
                    valor=6000
                    break;
                
                default:
                    valor=0
                    break;
            }

            juegos.push(juego)
            vectorTotal.push(valor)

            rta=prompt("¿Desea elegir otro juego? (si/no)".toLowerCase())

        }while(rta!="no")

        for (let index = 0; index < juegos.length; index++) {
            miObjeto[index]=juegos[index]
        }


        this.listaPersonas.push(new Cliente(nom,edad,miObjeto,this.calcularTotal(vectorTotal)))

    }

    calcularTotal(vectorTotal){

        let total=0
        let promo=""

        for (let index = 0; index <vectorTotal.length; index++) {
            total+=vectorTotal[index];
        }

        do{
            promo=prompt("¿Es usted socio de JuegosPlus? (si/no)").toLowerCase()
        }while((promo!="si")&&(promo!="no"))

        if(promo=="si"){
            total=total-(total*0.1)
            console.log("El valor total es: "+total);
        }
        else{
            console.log("El valor total es: "+total);
        }

        return total

    }
}


const listaPersona=new ListaPersonas()

let rta=""

do{

    listaPersona.agregar()
    console.log(listaPersona);

    rta=prompt("¿Desea seguir con el programa?").toLowerCase()

}while(rta!="no")


class Cliente{

    constructor(nombre,edad,juegos,total){
        this.nombre=nombre;
        this.edad=edad;
        this.juegos=juegos;
        this.total=total
    }

}

class ListaPersonas{

    constructor(){
        this.listaPersonas=[]
    }

    agregar(){

        let edad=""
        let juego=""
        let valor=0
        let rta=""
        let juegos=[]
        let total=0
        const miObjeto={};
        let nom=prompt("Ingrese su nombre")
        console.log("Bienvenido/a: "+nom);
        edad=Number(prompt("Indique su edad"))
        do{
            juego=prompt("Indique el juego que desea: \na) Fifa 23 (8000$) \nb) God of War (7000$) \nc) Hogwarts Legacy (6000$)").toLowerCase()
            switch(juego){
                case "a":
                    console.log("El juego seleccionado ha sido: "+"Fifa 23");
                    juego="Fifa 23"
                    valor=8000
                    break;
                
                case "b":
                    console.log("El juego seleccionado ha sido: "+"God of War");
                    juego="God of War"
                    valor=7000
                    break;
                
                case "c":
                    console.log("El juego seleccionado ha sido: "+"Hogwarts Legacy");
                    juego="Hogwarts Legacy"
                    valor=6000
                    break;
                
                default:
                    valor=0
                    break;
            }

            juegos.push(juego)
            total+=valor

            rta=prompt("¿Desea elegir otro juego? (si/no)".toLowerCase())

        }while(rta!="no")

        for (let index = 0; index < juegos.length; index++) {
            miObjeto[index]=juegos[index]
        }

        this.listaPersonas.push(new Cliente(nom,edad,miObjeto,this.calcularTotal(total)))
        
    }

    calcularTotal(total){

        let promo=""
        do{
            promo=prompt("¿Es usted socio de JuegosPlus? (si/no)").toLowerCase()
        }while((promo!="si")&&(promo!="no"))

        if(promo=="si"){
            total=total-(total*0.1)
            console.log("El valor total es: "+total);
        }
        else{
            console.log("El valor total es: "+total);
        }

        return total

    }

    buscarPersona(buscado){
        const resultado=this.listaPersonas.find((el)=>el.nombre==buscado)
        console.log(resultado);
    }
}


const listaPersona=new ListaPersonas()

let rta=""
let buscado=""

do{

    listaPersona.agregar()
    console.log(listaPersona);

    rta=prompt("¿Desea seguir con el programa?").toLowerCase()

}while(rta!="no")

buscado=prompt("Ingrese su nombre para ver su pedido")
listaPersona.buscarPersona(buscado)



*/