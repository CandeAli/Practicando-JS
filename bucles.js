

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



            /**Ejercicios**/


/*

1. Crear dos variables, num1 y num2, pedirle al usuario que ingrese los números, usando la función prompt 
y asignarlas a las variables creadas, crear una variable suma y guardar el resultado de la suma de num1 y num2, 
mostrar con un alert la suma.








2. Agregar al código anterior un condicional para mostrar por consola cuál de los número ingresados (num1 y num2)
es mayor.








3. Agregar una condición extra para el caso que ambos números sean iguales. Pueden investigar la sentencia else if.









4. Crear una constante con un valor, dentro de un bucle pedir al usuario que ingrese un número, verificar si el 
número ingresado es igual a la constante, sí lo es terminar el bucle y mostrar un mensaje diciendo que adivino el 
número, sino seguir pidiendo que ingrese el número. Pueden investigar cómo usar un do ... while.







5. Crear un bucle que muestre los numero del 1 al 20 pero solo los números que sean múltiplo de 3.







6. Crear un bucle for que muestre los numero del 1 al 20, dentro del bucle usar la función confirm para que el 
usuario decida si quiere ver el siguiente número, en caso de no querer seguir pueden usar la sentencia break. */





