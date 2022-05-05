

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






            /***OPERADORES: DE COMPARACION***/


// pueden devolver un true o false

//Hay varios tipos como:

/*
== -->compara valor
=== -->compara valor y tipo, estricto
!=  -->si algo es distinto de otra cosa 
!== --> igual
< --> menor que
>  --> mayor que
<= --> si es menor o igual
>=  --> si es mayor o igual

*/


//ejemplos

/*
alert( 2 > 1 ); // true (correcto)
alert( 2 == 1 ); // false (incorrecto)
alert( 2 != 1 ); // true (correcto)
*/




            /**OPERADORES: DE ASIGNACION */

//cuando creo una variable y le pongo = mas un valor
// se puede usar para sumarle, restalre, etc.


//Ejemplos:

/*
+=  --> num += 2  / num = num +2
-=  --> num -= 1  / num = num -1
*=  --> num *= 3  / num = num * 3
/=  --> num /= 5  / num = num / 5

*/







            /**OPERADORES: DE INCREMENTO Y DECREMENTO**/


//incremento: mapra sumarle 
//decremento: para restarle














            /**CONDICIONALES***/

//se utilizan gralmente con los operadores 
//vemos si la condicion se va a cumplir o no


//ejemplo con -- if --

/*
let edad = 13;

if (edad >= 13) {
    console.log('Puedes ingresar'); 
}
*/


// ejemplo con -- else -- 

/*
let edad = 11;


if (edad >= 13) {
    console.log('puede ingresar')
} else {
    console.log('no puede ingresar')
}


// dato: en el else no va parentesis
//siempre se ejecuta una condicion, nunca las dos



//si quiero que el mensaje se muestre en pantalla:

let edad = 11;

let mensaje = document.querySelector('#mensaje');

if (edad >= 13) {
    console.log('puede ingresar')
    mensaje.textContent = 'Puede ingresar'
} else {
    console.log('no puede ingresar')
    mensaje.textContent = 'no puede ingresar'
}
*/




            /** Funciones: CONFIRM**/

//sirve para mostrar cosas, ocultarlas


//por ejemplo, si armo un nav en la pag, y me logeo puedo entrar al admin:

/*
let admin = true;

bntAdmin = document.querySelector('.btn-admin');

if (admin == true) {
    btnAdmin.classList.remove('d-none');
} else {
    btnAdmin.classList.add('d-none');
}
*/


//ejemplo:

/*
const respuesta = confirm('¿estas seguro que quiere ingresar?');

if (respuesta){
    console.log('si, confirmar')
} else {
    console.log('no, cancelar')
}
*/

























            /**DOCUMENT WRITE**/

/*Escribe dentro de nuestro HTML*/

/*
document.write('Hola js')
*/





            /**DOCUMENT GET ELEMENT BY ...**/

/*Selecciona un elemento por su ID, Class, etc*/

/*const titulo = document.getElementById('titulo');


//si le quiero cambiar el valor al elemento

titulo.textContent = 'Holaaa js'*/



















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
