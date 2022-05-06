

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


//incremento: para sumarle 
//decremento: para restarle



/*
let num = 2;                    let num = 2;
num++;                          numero --;
console.log(num);               console.log(num);



//

let num = 2;                    let num = 2;        
const sufijo = num++;           const prefijo = --num;
console.log(sufijo, num);       console.log(prefijo,num);


*/


//Puedo poner el signo antes o dsp.

//Prefijo: primero se hace la cuenta, dsp se asigna
//Sufijo: primero se asigna, y dsp se hace la cuenta



//Ejemplo 


/*
let num = 2; 
const sufijo = num++;         //si pongo el signo dsp, en la consola se va a mostrar: 2 3, es decir, primero se toma el valor del num, y dsp se incrementa
console.log(sufijo, num);



let nume = 2;
const prefijo = ++nume;       //si pongo el signo antes, se va a mostrar 3 3, porque primero se hace el calculo y dsp se asigna
console.log(prefijo, nume);

*/




            /*******OPERADORES: LOGICOS********/


//nos permiten saber condiciones simples, si algo es igual a algo, si es verdadero, falso, etc
//o por ej: si en una pagina se compr+o tanta cantidad de productos,etc 


// OR= signo: || --> una cosa o la otra, "si compró x cant de productos, obtiene un cupon"

//ejemplo

let a = true;
let b = true;

result = a | b;

console.log(result);


//