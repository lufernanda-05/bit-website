//------------cilos y bucles-----------------------------------
//for=para, se usa para repetir un bloque de codigo un numero determinado de veces
//for (inicializacion; condicion; incremento o decremento){bloque de codigo}
//para el for=para tiene 3 partes separadas por ;
//1. inicializacion= let i=0
//2. condicion= i<10
//3. incremento= i++ repite 1 a 1
for(let i=1; i<=3; i++){
    console.log(frutas[i]);//imprime el arreglo frutas 
}
// o se puede poner <nombre del arreglo.length que es igual a imprimir todo el arreglo
for(let i=0; i<frutas.length; i++){
    console.log(frutas[i]);//imprime el arreglo frutas 
}

//------------ejemplo de for-------------
console.log("los nuemeros del 1 al 100 son:");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
//___________________________________________________________
let paises=["colombia","peru","ecuador","venezuela","argentina","chile","paraguay","uruguay","brasil","bolivia"]
console.log("los 10 paises son:");
//imprimimos el arreglo paises
for (let x=0; x <paises.length; x++){
    console.log(paises[x]);
}

//------------------------while-------------------

//while= mientras, se usa para repetir un bloque de codigo mientras se cumpla una condicion
//while (condicion){bloque de codigo}
let i = 1;
while (i <= 100) {
    console.log(i);
    i++;//=para que no sea infinito
}
//------------------------ejemplo de while------------------2
//
// Ejemplo número del 1 al 5
const secreto = "4"; 
const intentos = 2;
let intentousuario = 0;
let mensaje = "";


while (intentousuario < intentos) {

    const numero = prompt("Adivina el número del 1 al 5"); 
    intentousuario++;
    if (numero >= 5 && numero <= 0) {
        alert("El número debe estar entre 1 y 5");
        intentousuario--; 
        continue; 
    }

    if (numero === secreto) {
        mensaje = `adivinaste en el  ${intentousuario} intento`;
        console.log(mensaje); // Mostrar en la consola
        break;
    } else if (intentousuario === 1) {
        alert("No adivinaste en el primer intento. Intenta de nuevo."); 
    }
}


if (mensaje === "" && intentousuario === intentos) {
    mensaje = "Perdiste los 2 intentos y el número era " + secreto;

}

alert(mensaje);

//-----------------------------DO WHILE--------------------------
//ES una estructura de control que repite un proceso hasta que la respuesta sea diferente
 //ejemplo: si desea continuar SI O NO 
 i=0
 mensaje=""
 do {
    mensaje=prompt("deseas continuar SI O escribe NO")
    if (mensaje != "NO"){
        alert("hola",i,"veces")
    }else{
        alert("adios")
    }
    i++
 } while (mensaje!="NO");
