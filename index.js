
const prompt = require("prompt-sync")();

// 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
// Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá los
// valores necesarios para calcular el área. Para ello has de crear un método por cada figura
// para calcular cada área, este devolverá un número real. Muestra el resultado por consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado

// const areaCirculo = () => {

//     const radio = parseInt(prompt("Dime el radio del círculo"));
//     const area = ((radio*radio)*Math.PI);

//     console.log(`El área del círculo es: ${area}`);

// }

// const areaTriangulo = () => {

//     const base = parseInt(prompt("Dime la base del triángulo"));
//     const altura = parseInt(prompt("Dime la altura del triángulo"));

//     const area = (base*altura)/2

//     console.log(`El área del triángulo es: ${area}`);

// }

// const areaCuadrado = () => {

//     const lado = parseInt(prompt("Dime el lado que va a tener el cuadrado"));
//     const area = lado*lado

//     console.log(`El área del cuadrado es: ${area}`);

// }

// const calculoUsuario = prompt("Dime que área quieres calcular");

// switch(calculoUsuario.toLowerCase()){

//     case "triángulo":
//     case "triangulo":

//         areaTriangulo();

//     break;

//     case "cuadado":

//         areaCuadrado();

//     break;

//     case "círculo":
//     case "circulo":

//         areaCirculo();

//     break;

//     default:

//         console.log("El area especificada no corresponde a ninguna figura geométrica")

// }




/////////////////////////////////////////////////////////////////////////////////////////



// 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
// por el usuario (prompt). Crea un método donde pasamos como parámetros entre entre qué
// números queremos que los genere, podemos pedirlas al usuario antes de generar los
// números. Este método devolverá un número entero aleatorio. Muestra estos números por
// consola.


// const cantidadNumeros = parseInt(prompt("Dime cuantos números aleatorios quieres"));
// const minimo = parseInt(prompt("Dime el número mínimo que vamos a necesitar"));
// const maximo = parseInt(prompt("Dime el número máximo que vamos a necesitar"));

// const aleatorio = (minimo, maximo, cantidadNumeros) => {

//     let contador = 0;

//     while(contador < cantidadNumeros){
//         let numeroAleatorio = parseInt(Math.random()* 100);

//         if(numeroAleatorio > minimo && numeroAleatorio < maximo){
//             console.log(numeroAleatorio);
//             contador++;
//         }

//     }
// }

// aleatorio();

//Solución de Álvaro...
//(Math.random() * (maximo - minimo) + minimo)