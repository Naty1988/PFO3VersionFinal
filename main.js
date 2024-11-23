// 1. Calcular el área de un rectángulo

// Declarar e inicializar las variables para longitud, ancho y area.

let longitud = 0;
let ancho = 0;
let area = 0;

function calcularAreaRectangulo(longitud, ancho) {

    // Calcular el área
    area = longitud * ancho

    // Mostrar el resultado en la consola
    console.log(area);
    return area;
}

// Ejemplos:
console.log("Solución 1:");
calcularAreaRectangulo(5,3); // Resultado: 3
calcularAreaRectangulo(2,10); // Resultado: 20
calcularAreaRectangulo(3,5); // Resultado: 15
console.log("///////////////");

// 2.  Contar palabras en una cadena

function contarPalabras(cadena) {
    // Dividimos la cadena en un array de palabras usando espacios como separadores
    /* Usamos:   trim(): Elimina espacios en blanco al inicio y al final de la cadena.
                split(/\s+/): Divide la cadena en palabras usando cualquier cantidad de espacios en blanco como separadores.*/

    const palabras = cadena.trim().split(/\s+/);

    // Devolvemos la longitud del array de palabras usando palabras.length: Devuelve la cantidad de elementos en el array resultante.
    return palabras.length;
}

    // Ejemplos:
console.log("Solución 2:");
console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 5
console.log(contarPalabras("práctica formativa obligatoria")); // Resultado: 3
console.log(contarPalabras("Hello Word")); // Resultado: 2
console.log("///////////////");

// 3:  Invertir una cadenwa

function invertirCadena(cadena) {
    /* Convertimos la cadena en un array, lo invertimos y luego lo unimos nuevamente.
    Usamos: split(""): Convierte la cadena en un array de caracteres.
            reverse(): Invierte el orden de los elementos del array.
            join(""): Vuelve a unir los caracteres en una cadena.*/

    return cadena.split("").reverse().join("");
  }  
  
  // Ejemplos:
console.log("Solución 3:"); 
console.log(invertirCadena("hola")); // Resultado: "aloh"
console.log(invertirCadena("FrontEnd")); // Resultado: "dnEtnorF"
console.log(invertirCadena("Casa")); // Resultado: "asaC"
console.log("///////////////");

// 4: Encontrar el palíndromo

function esPalindromo(cadena) {
    /* Convertimos la cadena a minúsculas y eliminamos espacios en blanco
    Usamos: toLowerCase(): Convierte toda la cadena a minúsculas para evitar problemas de mayúsculas/minúsculas.
            replace(/\s+/g, ""): Elimina todos los espacios en blanco.*/

    const cadenaNormalizada = cadena.toLowerCase().replace(/\s+/g, "");

    // Comparamos la cadena normalizada con su versión invertida usando split("").reverse().join(""): Invierte la cadena.

    return cadenaNormalizada === cadenaNormalizada.split("").reverse().join("");
  }
  
  // Ejemplos:
  console.log("Solución 4:");
  console.log(esPalindromo("neuquen")); // true
  console.log(esPalindromo("reconocer")); // true
  console.log(esPalindromo("rallar")); // true
  console.log(esPalindromo("hola")); // false
  console.log("///////////////");
  

// 5. Crear un programa para convertir la edad de un perro a años humanos

function edadCanina() {
    // Pedimos al usuario la edad del perro usando prompt(): Solicita al usuario que introduzca un valor. El valor recibido es una cadena.
    const edadPerro = prompt("Introduce la edad de tu perro en años:");
    
    // Convertimos el valor ingresado a número
    const edadHumana = edadPerro * 7;
  
    // Mostramos el resultado por consola
    console.log(`Tu perro tiene ${edadHumana} años humanos`);
  }
  
  // Ejemplos:
  console.log("Solución 4:");
  edadCanina();
  edadCanina();
  edadCanina();
  console.log("///////////////");
  