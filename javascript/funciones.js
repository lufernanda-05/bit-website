//------------------funciones----------------------------------
//funcion declarativa
function suma(a,b){
    return a+b
}

//funcion expresiva
const resta=function(a,b){
    return a-b
}
// funcion flecha (todo arrow function)  
const hola=()=>{
    console.log("hola funcion flecha");
}
hola();

const multiplicacion=(a,b)=>{
    return a*b
}
console.log("la multiploicacion es: ",multiplicacion(5,3));
//funcion flecha simplificada
const division=(a,b)=>a/b   

//funcion flecha simplificada con return implicito
const residuo=(a,b)=>a%b

//funcion flecha simplificada con return implicito y sin parentesis
const potencia=a=>a**2

const cuadrado=a=>a*a   

const par=numero=>numero%2===0;
console.log(par(4)); // true
console.log(par(5)); // false

//manejo del this 
function persona(nombre){
    this.name=nombre;
    this.saludar=function(){
        console.log(`Hola, mi nombre es ${this.name}`);
    };
    this.saludo=function(){
        setTimeout(function(){
            console.log(`Hola, mi nombre es ${this.name}`);
            console.log("soy aqui",this );
        },2000);//segundo que demora
    };
}
const p1=new persona("carlos");
p1.saludar(); // Hola, mi nombre es carlos
p1.saludo(); 

//this con callback
function mejora(nombre){
    this.nombre=nombre;
    this.saludar=function(){
        setTimeout(() => {
            console.log(`Hola, mi nombre es ${this.nombre}`, "con arrow funtion");
        },1000);
};
}
const p2=new mejora("pepa");
p2.saludar(); // Hola, mi nombre es pepa con arrow funtion

//funcion hoisting 
hoisting();
function hoisting(){
    console.log("funcion de antes");
}
console.log(multiplicar(5,3,9));
function multi(n1,n2,n3){
    return n1*n2*n3
}

//funcion expresion
const funcion=function(mensaje){
    console.log("mensje "+mensaje);
}
funcion("soy expresion");

//funcion nombradas en expresiones
const factorial=function calculo(n){
    console.log(`calculo con n= ${n}`);
    if (n===0 || n===1){
        console.log(`resultado con n= ${n}`);
        return 1;
    }
    const siguiente=n-1;
    console.log(`n es ${n},el factorial (${siguiente})`);
    resul=calculo(siguiente);
    console.log(`resultado ${siguiente} es ${resul}`);
    const final=n*resul;
    console.log(`resultado final con n= ${n}* ${resul} = ${final}`);
    return final;
}
//llamamos la funcion
factorial(5);

//todo calbacks
console.log("espera");
setTimeout(function() {
    console.log("esto es un callback");
}, 2000); // 2000 milisegundos = 2 segundos
console.log("codigo desde settimeout(ejecutando de inmediato)");

(function() {
let n=3;
console.log(n);
})();

//---------------------------
function saludo(palabra){
    if (palabra==="hola"){
        console.log("HOLA la palabra es correcta")
    }
    else {
        console.log("adios ppalabra no correcta")
    }
}
//llamamos la funcion
saludo("hola")
//----------------------------------
//switch= (segun)sirve para evaluar una expresion y ejecutar un bloque de codigo dependiendo del resultado de la expresion:
//switch (expresion){
function saludo2(palabra){
    switch (palabra){
        case "hola":
            console.log("HOLA la palabra es correcta")
            break;
        case "adios":
            console.log("adios la palabra es incorrecta")
            break;
        default:
            console.log(" palabra no correcta")
    }
}
//llamamos la funcion
saludo2("hello")

//------------------ejemplo segun y condicion si----------------
function calculadora(num1,num2,palabra){
    switch (palabra){
        case "suma":
            console.log("la suma de los numeros es:",num1+num2)
            return num1+num2
        case "resta":
            console.log("la resta de los numeros es:",num1-num2)
            return num1-num2
        case "multiplicacion":
            console.log("la multiplicacion de los numeros",num1,"y",num2," es:",num1*num2)
            return num1*num2
            break;
        case "division":
            console.log("la division de los numeros",num1,"y",num2,"es:",num1/num2)
            return num1/num2
        default:
            return "la operacion no esta en el menu"
    }
}


function calculadora2(num1,num2,palabra){
    if (palabra==="suma"){
        console.log("la suma de los numeros",num1,num2," es:",num1+num2)
        return num1+num2
    }
    else if (palabra==="resta"){
        console.log("la resta de los numeros",num1,num2,"es:",num1-num2)
        return num1-num2
    }
    else if (palabra==="multiplicacion"){
        console.log("la multiplicacion de los numeros",num1,num2,"es:",num1*num2)
        return num1*num2
    }
    else if (palabra==="division"){
        console.log("la division de los numeros",num1,"y",num2,"es:",num1/num2)
        return num1/num2
    }
    else{
        console.log("la operacion no esta en el menu")
        return "la operacion no esta en el menu"
    }
}

//llamamos las funciones
calculadora2(10,5,"division")
calculadora(20,5,"multiplicacion")

//------------------ejemplo----------------
let contra= "abc123"
let usuario="pepa"
 if (contra==="abc123" ){
    if (usuario==="pepa"){
        console.log("bienvenida");
    }
    else{
        console.log("acceso denegado")
    }
}
//-----
function validacion(contra,nombre){
    if (contra==="abc123" && nombre==="pepa"){
        console.log("bienvenida")
    }
    else{
        console.log("acceso denegado")
    }
}
//llamamos la funcion
validacion("abc123","ppa")
//_-----------------------------
function usuario() {
   const name= prompt("ingresa tu nombre");
   const lastname= prompt("ingresa tu apellido");
   console.log({name,lastname});//entre{para que sea un objeto}
   return [name,lastname];
   }
//llamamos la funcion
resul=usuario();
console.log(resul);
console.log(resul[1]);//apellido*/*/
