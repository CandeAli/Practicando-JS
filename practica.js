

                        /**** DEFINICIONES JS******/





        /*========VARIABLES=========*/


/****** Forma de escribirlas *****/

//se empiezan con textos, signo de pesos o guion bajo.

// let nombre;
// let $nombre;
// let _nombre;
// usando camelcase
// es preferible poner todo en minuscula o mayuscula, js es case sensitive




            //LET

/*Ejemplos*/

/*
ler num = 2;
let nombre;
let nombre_completo;
let nombreCompleto;
let $nombre;
let _nombre;

let num;
let NUM;
let Num; 
*/


/*
let num = 2;
let numero = 3;


if (num === 2) {
    let numero = 7;           //le cambio el valor pero como es LET, en la consola se agrega el valor pero en otro bloque, es decir, me van a aparecer los dos valores
    console.log(num, numero);
}
console.log(num, numero);*/





            //Const

//si le asigno un valor no se puede volver a cambiar


/*const IVA = 21;

// si pongo asi, tmb me va a aparecer en dos bloques en la consola
if(true) {
    const IVA = 10;
    console.log(IVA)  
}*/



            /**Tipos de Variables**/

//Number --> let number = 1;
//String --> let texto = 'Hola';
//Boolean --> let activo = true
//            let activo = false;








            /**DOCUMENT WRITE**/

/*Escribe dentro de nuestro HTML*/

document.write('Hola js')




            /**DOCUMENT GET ELEMENT BY ...**/

/*Selecciona un elemento por su ID, Class, etc*/

const titulo = document.getElementById('titulo');


//si le quiero cambiar el valor al elemento

titulo.textContent = 'Holaaa js'













/**=====ACTIVIDAD --> EJERCICIO UNIDAD 1======*/

/**1- Realizar:
-un script en javascript que declare:

    - una variable llamada primera con un valor numérico = 40
    - una variable llamada segunda con un valor numérico = 16
    - una variable llamada sumatotal con un valor numérico de la suma de las dos variables anteriores.
    - y una salida por pantalla en HTML que muestre un mensaje y el valor de sumatotal: */


//Respuesta
/*
var primera = 40;
var segunda = 16;

var sumatotal = primera + segunda;

document.write(sumatotal)
*/







/**=====ACTIVIDAD --> EJERCICIO UNIDAD 2======*/
