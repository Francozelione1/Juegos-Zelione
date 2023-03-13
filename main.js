let verificador=true
let nombre=""

do{
    nombre=prompt("Indique su nombre")
}while(nombre=="")

console.log("Bienvenido/a: "+nombre);
let juego=""

do{
    juego=prompt("Indique el juego que desea: \na) Fifa 23 (8000$) \nb) God of War (7000$) \nc) Hogwarts Legacy (6000$)").toLowerCase()
}while((juego!="a")&&(juego!="b")&&(juego!="c"))

let valor=0

function elegirJuego(juego){

    switch(juego){
        case "a":
            console.log("El juego seleccionado ha sido: "+"Fifa 23");
            valor=8000
            break;
        
        case "b":
            console.log("El juego seleccionado ha sido: "+"God of War");
            valor=7000
            break;
    
        case "c":
            console.log("El juego seleccionado ha sido: "+"Hogwarts Legacy");
            valor=6000
            break;

        default:
            break;
    }

}

elegirJuego(juego)

let total=valor
let promo=""

do{
    promo=prompt("¿Es usted socio de JuegosPlus? (si/no)").toLowerCase()
}while((promo!="si")&&(promo!="no"))

if(promo=="si"){
    total=valor-(valor*0.1)
    console.log("El valor total es: "+total);
}
else{
    console.log("El valor total es: "+total);
}


