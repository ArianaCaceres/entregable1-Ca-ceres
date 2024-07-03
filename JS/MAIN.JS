let nombreUsuario = prompt("Bienvenido/a, para continuar Ingrese un nombre de usuario")
console.log("Hola " + (nombreUsuario) + ", ¿qué pelicula deseas ver?")

alert("Aqui tienes nuestra cartelera actual:\n- Bad Boys: Hasta la muerte \n- INTENSAMENTE 2 \n- Mi villano favorito 4 \n- Tornados \n-Un lugar en silencio: Día uno ")

const pelicula1 = {
    pelicula: "Bad Boys: Hasta la muerte",
    género: "Acción",
    duración: "115m" ,
    director: "Adil El Arbi, Bilall Fallah",
    precio: 5000
}
const pelicula2 = {
    pelicula: "INTENSAMENTE 2",
    género: "Animación",
    duración: "96m" ,
    director: "Kelsey Mann",
    precio: 5000
}
const pelicula3 = {
    pelicula: "Mi villano favorito 4",
    género:"Animación",
    duración: "95m" , 
    director: "Chris Renaud, Patrick Delage",
    precio: 5000
}
const pelicula4 = {
    pelicula: "Tornados",
    género: "Aventuras",
    duración: "122m" ,
    director: "Lee Isaac Chung",
    precio: 5000
}
const pelicula5 = {
    pelicula: "Un lugar en silencio: Día uno",
    género: "Terror",
    duración: "100m" ,
    director: "Michael Sarnoski",
    precio: 5000
}


const cartelera = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5]

console.log(cartelera)

for (const pelicula of cartelera) {
    console.log(pelicula)
}
// Función para que el usuario seleccione una película
function seleccionarPelicula() {
    let nombrePelicula = prompt("¿Qué película deseas ver? (Ingresa el título)");
    
    // Buscar la película en el array CARTELERA
    let peliculaSeleccionada = cartelera.find(pelicula => pelicula.pelicula === nombrePelicula);
    if(peliculaSeleccionada) {
        console.log("Excelente elección");
         // Verificacion de genero
        if (peliculaSeleccionada.género === "Terror") {
            // Confirmar edad
            let edadUsuario = prompt("Esta película es de clasificación +18 ¿Cuántos años tienes?");
            if (parseInt(edadUsuario) >= 18) {
                console.log("Puede continuar con su compra");
            } else {
                console.log("Lo siento, eres menor de edad, no puede concluir su compra");
            }
        }
    return peliculaSeleccionada.precio;
    } else {
        console.log("Lo siento, la película " + (nombrePelicula) + " no está en nuestra cartelera.");
        return seleccionarPelicula()
    }
}


let precioPelicula = seleccionarPelicula();

const comida1 = {
    producto: "Nachos con queso",
    precio: 5100
}
const comida2 = {
    producto: "Pancho",
    precio: 3200
}
const comida3 = {
    producto: "Balde de pochoclos",
    precio: 5400
}
const comida4 = {
    producto: "Combo familia",
    precio: 20000
}
const CANDYSHOP = [comida1, comida2, comida3, comida4]

for (const producto of CANDYSHOP) {
    console.log(producto)
}

function seleccionarProducto() {
    let totalProductos = 0;
    for (const producto of  CANDYSHOP) {
        let confirmacionProducto = confirm("Desea comprar " + producto.producto + " por $" + producto.precio + "?")
        if (confirmacionProducto) {
            totalProductos += producto.precio;
        }
    }
    return totalProductos;
}

let precioProducto = seleccionarProducto();

function sumar(precioPelicula, precioProducto){
    let resultado = precioPelicula + precioProducto;
    return resultado;
}

let total = sumar(precioPelicula, precioProducto);
console.log("TOTAL A PAGAR $" + total)


