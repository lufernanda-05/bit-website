//console.log("hola lu")
//-----los typescript se trabajan para mostrar alertas tempranas en javascript 
//----el tipado  es que tipo de dato quiero guardar y se pone con (:)
//--los datos de string siempre va entre('') ,los boolenaos o numericos normal 
var nom = "luisa"; //valores implicitos o inferencia 
nom = 'lu';
//----forma de tipado asignacion explisita poner primero el tipo de varible y ay si el valor o sin valor.
console.log(nom);
var ape = 'fernanda';
console.log(ape);
//----datos primitivos y como declararlos con typescript
var texto;
texto = "hola";
console.log(texto);
var numeros = 1;
console.log(numeros);
var boleano = true;
console.log(boleano);
//---especiales:es ANY espara ponerlo miesntras no se sabe quetipo de dato va a utulizar
var especial;
especial = 'saludo';
especial = 2;
especial = false;
console.log(especial);
// otro especial es un tipo de dato parecido a any pero mas seguro
var especial2;
especial2 = 'fe';
especial2 = 3;
console.log(especial2);
//es un valor indefinido que no se a dado un valor entonces pone uundefined
var indefinido;
console.log(indefinido);
//nulo
var nulo = null;
console.log(nulo);
//----ARRAYS: ARREGLOS SON EN []
// el  PUSH es un metodo para agregar elementos en un arreglo
//para texto
var arrtexto = [];
arrtexto.push('hello');
console.log(arrtexto);
//numeros
var arrnum = [];
arrnum.push(1);
console.log(arrnum);
//boolean
var arrbool = [];
arrbool.push(true);
console.log(arrbool);
//con any:
var arrany = [];
arrany.push('hi');
arrany.push(1);
arrany.push(false);
console.log(arrany);
//con parametro:
var arr = ['a,b,c'];
console.log(arr);
//inferencia:
var arrinferencia = [1, 2, 3]; //se muestra 
arrinferencia.push(4); //se agrega al arreglo
console.log(arrinferencia);
//----la tupla:(tuple) Tiene un LIMITE pre definido 
var tupla;
tupla = ['he', 10, true];
console.log(tupla);
//parametros opcionales sume el valor que ay en c o SUME 0 = puede que llegue o no llegue  y para que sea obcional debe poner el signo (?)
//parametros por defecto
function sum(a, b) {
    if (b === void 0) { b = 2; }
}
//el void es para cuando no va a resivir un parametro ni nada
//EJEMPLO: IMPRIMIR LOS NUMEROS HASTA N 
function imprimir(n) {
    var i = 1;
    while (i <= n) {
        console.log(i);
        i++; //va sumando uno a uno
    }
}
imprimir(40); //hasta este nuemero
