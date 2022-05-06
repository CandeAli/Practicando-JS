

            /****** BUCLES *******/



            /*******WHILE*******/



// se utilizan cuando queremos repetir la ejecución de unas sentencias un número 
//indefinido de veces, siempre que se cumpla una condición.
//a diferencia del IF, éste siempre se sigue ejecutando mientras la condicion sea verdadera



//Estructura 

/*
while (condicion) {
    //sentencias
}
*/


//Ejemplo


/*
let i = 0;       //i es el nombre tipico, viene de index

while (i < 3) {
    console.log(i);
    i++;            //esto hace q la sentencia llegue hasta ahí
}
*/







            /****** FOR ********/


//se utiliza para repetir una o más instrucciones un determinado número de veces. 
//De entre todos los bucles, el FOR se suele utilizar cuando sabemos seguro 
//el número de veces que queremos que se ejecute

//por ej, tengo q hacer 10 registros, voy a usar este por mas o menos ya se la cantidad q voy a necesitar




//Estructura

/*
for (inicializacion; condicion; operacion) {
    //sentencias
}
*/



//Ejemplo:

//es como el while, pero pongo todo dentro del parentesis
//la variable la defino dentro del for


//va de 10 al 1

/*
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
*/

/*
inicializacion        condicion       operacion
        |                 |              |
        |                 |              | 
for (let i = 0;         i < 3;          i++) {
    console.log(i);
}
*/



//ejemplo2 

//si quisiera hacer una tabla de multiplicar

/*
for (let i = 1; i <= 10; i++) {
    console.log('1 * ' + i + ' = ', 2 * i)

}
*/






