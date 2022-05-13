

            /**====== EJERCICIOS VARIOS ======= */



/*

-----------------------
VARIABLES / IF / WHILE
------------------------



1. Crear dos variables, num1 y num2, pedirle al usuario que ingrese los números, 
usando la función prompt y asignarlas a las variables creadas, crear una variable 
suma y guardar el resultado de la suma de num1 y num2, mostrar con un alert la suma.



//RESPUESTA:

let num1 = parseInt(prompt('Ingrese un numero')) ;

let num2 = parseInt(prompt('Ingrese otro numero')) ;



let suma = num1 + num2;

alert('el resultado de la suma es' + ' : ' + suma)








2. Agregar al código anterior un condicional para mostrar por consola cuál de los
número ingresados (num1 y num2) es mayor.



//RESPUESTA:


let num1 = parseInt(prompt('Ingrese un numero')) ;

let num2 = parseInt(prompt('Ingrese otro numero')) ;



let suma = num1 + num2;

alert('el resultado de la suma es' + ' : ' + suma)





if(num1 > num2){
    console.log(num1 + " es mayor que " + num2);
}





3. Agregar una condición extra para el caso que ambos números sean iguales.
Pueden investigar la sentencia else if.



//RESPUESTA:




let num1 = parseInt(prompt('Ingrese un numero')) ;

let num2 = parseInt(prompt('Ingrese otro numero')) ;



let suma = num1 + num2;

alert('el resultado de la suma es' + ' : ' + suma)





if(num1 > num2){
    console.log(num1 + " es mayor que " + num2);
} else if (num1 === num2){
    console.log( num1 + " y " + num2 + " son iguales");
}else {
    console.log(num2 + " es mayor que " + num1);
}




4. Crear una constante con un valor, dentro de un bucle pedir al usuario 
que ingrese un número, verificar si el número ingresado es igual a la constante, sí lo es terminar el bucle y mostrar
un mensaje diciendo que adivino el número, sino seguir pidiendo que ingrese el número. 
Pueden investigar cómo usar un do ... while.



//RESPUESTA:






5. Crear un bucle que muestre los numero del 1 al 20 pero solo los 
números que sean múltiplo de 3.



//RESPUESTA:










6. Crear un bucle for que muestre los numero del 1 al 20, dentro del bucle usar la función confirm para que el 
usuario decida si quiere ver el siguiente número, en caso de no querer seguir pueden usar la sentencia break. 



//RESPUESTA:







*/







/** 

                EJERCICIO (obligatorio) 


1- Ingresá en el siguiente cuadro el código HTML y Javascript correspondiente 
para la creación de una página web que cumpla con los siguientes requisitos:

Posea un script en javascript que utilice: 

a)      bucles anidados y cálculos automáticos
b)      genere las tablas de multiplicar del 9 al 11
c)      muestre el resultado por pantalla en forma ordenada y descendente como el siguiente ejemplo:


*/


//respuesta:

/*
for (i=9; i<12; i++) {
    document.write("<br><b>La tabla del " + i + ":</b><br>")
    for (j=1; j<10; j++) {
        document.write(i + " x " + j + ": ")
        document.write(i*j)
        document.write("<br>")
    }
}
*/






