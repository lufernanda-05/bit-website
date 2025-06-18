//console.log("hola lu")
//-----los typescript se trabajan para mostrar alertas tempranas en javascript 
//----el tipado  es que tipo de dato quiero guardar y se pone con (:)
//--los datos de string siempre va entre('') ,los boolenaos o numericos normal 
let nom="luisa";//valores implicitos o inferencia 
nom = 'lu'

//----forma de tipado asignacion explisita poner primero el tipo de varible y ay si el valor o sin valor.
console.log(nom)
let ape:string='fernanda';
console.log(ape)

//----datos primitivos y como declararlos con typescript
let texto: string;
texto="hola"
console.log(texto)

let numeros:number=1;
console.log(numeros); 

let boleano: boolean=true;
console.log(boleano); 

//---especiales:es ANY espara ponerlo miesntras no se sabe quetipo de dato va a utulizar
let especial:any;
especial='saludo';
especial= 2;
especial=false;
console.log(especial);

// otro especial es un tipo de dato parecido a any pero mas seguro
let especial2:unknown;
especial2='fe';
especial2=3;
console.log(especial2);

//es un valor indefinido que no se a dado un valor entonces pone uundefined
let indefinido:undefined;
console.log(indefinido);

//nulo
let nulo:null=null;
console.log(nulo);

//----ARRAYS: ARREGLOS SON EN []
// el  PUSH es un metodo para agregar elementos en un arreglo
//para texto
const arrtexto:string[]=[];
arrtexto.push('hello');
console.log(arrtexto);

//numeros
const arrnum:number[]=[];
arrnum.push(1);
console.log(arrnum);

//boolean
const arrbool:boolean[]=[];
arrbool.push(true);
console.log(arrbool);

//con any:
const arrany:any[]=[];
arrany.push('hi');
arrany.push(1);
arrany.push(false);
console.log(arrany);

//con parametro:
const arr:readonly string[]=['a,b,c'];
console.log(arr);

//inferencia:
const arrinferencia = [1,2,3];//se muestra 
arrinferencia.push(4);//se agrega al arreglo
console.log(arrinferencia);

//----la tupla:(tuple) Tiene un LIMITE pre definido 
let tupla:[string,number,boolean];
tupla=['he',10,true];
console.log(tupla);


//parametros opcionales sume el valor que ay en c o SUME 0 = puede que llegue o no llegue  y para que sea obcional debe poner el signo (?)

//parametros por defecto
function sum(a:number,b:number=2):void{

}

//el void es para cuando no va a resivir un parametro ni nada

//EJEMPLO: IMPRIMIR LOS NUMEROS HASTA N 
function imprimir(n:number):void{//el void por que no recibe ningun valor
    let i:number = 1;
    while(i<=n){
        console.log(i)
        i++;//va sumando uno a uno
    }
}
imprimir(40)//hasta este nuemero