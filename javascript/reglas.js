/* para comentarios */

//comentario de una sola linea

/*se puede convinar comillas sencillas en dobles*/

//operadores= asignacion :dar valor a algo(=), suma(+), resta(-), multiplicacion(*), division(/), residuo(%), incremento(++) y decremento(--), ** es potencia

//para concatenar con el (+)uno debe ser tipo string y otro numerico por lo menos  sino utiliza solo numerico ya no concatena sino suma: ejemplo: console.log("hola" + 2) = hol2

/*tipos de datos primitivo: 
- string=(comillassencillas,dobles y volteadas) 
- number=(numeros sin comillas auque tambien se puede sean binarios,octales,hexadecimales,decimal)
- boolean=(solo 2 valores: true o false)
- undefined=(no tiene valor)
- null=(no existe)
- object=(coleccion de datos, arreglos, funciones, objetos, etc.)*/

///*PRECEDENCIA DE OPERADORES: (PEMDAS)= que primero se soluciona lo que este en parentesis, despues los exponentes, despues multiplicacion y division y por ultimo adicion o suma y sustraccion o resta. EJEMPLO: 2 + 3 * 4 - 5 / 2 = 2 + 12 - 2.5 = 11.5

// - //operadores de comparacion: ==, ===, !=, !==, >, <, >=, <=
//(= es asignacion), (== es comparacion ), (=== identico a o igualdad estricta), (!= es diferente)

//el and es && y el or es ||, el not es !, el xor es ^, el operador ternario es ? : (si se cumple la condicion ? entonces : sino), el operador de asignacion es +=, -=, *=, /=, %=, **=, ++, -- y el operador de incremento es ++ y el de decremento es --.
// ---------------------------------------------------------------------

console.log("HOLA BIENVENIDA");
/*declarar variables: forma automatica,var,let,const*/
nombre="'luisa'"
//imprimimos la variable
console.log(nombre);

let nombre2='"fernanda"'
console.log(nombre2);

const apellido="Bernal"
//se puede mostrar el nombre de la varible y lo que contiene:
console.log("apellido:",apellido);

console.log("¿cuantas veces has usado javascript?");
num=4
console.log("esta es la ",num ,"vez que uso javascript");//concatenar variables
const nombres="luisa fernanda"
const lastname="bernal"
const years=19
const estudio="ingenieria en sistemas"
let ciudad="bogota"
//concatenamos con el (+ y , o con {}=interpolacion)
console.log("me llamo " + nombres + " " + lastname + " tengo " + years + " años estudio",estudio ,"y vivo en",ciudad);

//otra forma de concatenar console.log(`me llamo ${nombres} ${lastname} y tengo ${years} años y estudio ${estudio} y vivo en ${ciudad}`);

//---------------------------------------------------------
/* operadores aritmeticos*/
console.log("BIENVENIDOS A LA CALCULADORA BASICA")
const num1=20
const num2=3
sum=num1 + num2
res=num1 - num2
mul=num1 * num2
console.log ("la suma de los numeros:",num1 ,"+",num2 ,"es =",sum); 
console.log ("la resta de los numeros:",num1,"-",num2 ,"es =",res); 
console.log ("la multiplicacion de los numeros:",num1 ,"*",num2 ,"es=",mul);

//---------------------------------------------------------------

/*operadores de comparacion: ==, ===, !=, !==, >, <, >=, <=
num=5
num2=5
resul=num == num2 //true
resul2=num === num2 //true
resul3=num != num2 //false
resul4=num !== num2 //false
resul5=num > num2 //false
resul6=num < num2 //false
resul7=num >= num2 //true
resul8=num <= num2 //true
*/
val1=5
val2=10
result=val1==val2 
console.log(val1,"no es igual a",val2,"=",result);
result2=val1===val2 
console.log(val1,"no es identico a",val2,"=", result2);
result3=val1!=val2
console.log(val1,"no es diferente a",val2,"=",result3); 
result4=val1!==val2
console.log(val1,"no es extrictamente diferente o identico ",val2,"=",result4);  
result5=val1>val2
console.log(val1,"no es mayor que",val2,"=",result5);   
result6=val1<val2
console.log(val1,"no es menor que",val2,"=",result6);
result7=val1>=val2
console.log(val1,"no es mayor o igual que",val2,"=",result7);
result8=val1<=val2
console.log(val1,"no es menor o igual que",val2,"=",result8);

//--------poner datos desde la consola como salida:------------------

//prompt=para pedir datos al usuario y se guarda en una variable
//confirm=para confirmar si el usuario quiere continuar o no y se guarda en una variable
//alert=para mostrar un mensaje al usuario y no se guarda en una variable
//----ejemplo:
let nom=prompt("¿cual es tu nombre?")//ingresa el dato por consola con el prompt en una ventana emergente
console.log("hola",nom)
alert("como vas "+nom)//muestra el mensaje en una ventana emergente


//--------------------------------objeto-------------------------------
//objeto sirve paraa guardar los datos como un inicio de sesion en una sola variable
//objeto=coleccion de datos, se declaran con {} y se pueden modificar los elementos
//para crear un objeto se usa la palabra reservada let o const y se le da un nombre al objeto
console.log("-----ESTOS SON MIS DATOS-----")
//para guardar varios datos de 2 personas es:
let personas = [
    { nombre: "luisa" },
    { nombre: "jeisson" }
];
let misdatos = {
    nombres: "luisa fernanda",
    apellido: "bernal",
    edad: 20,
    ciudad: "bogota",
    greating: () => {
        console.log("estudiante de ingenieria en sistemas");
    }
};
// Acceder a los valores de un objeto a travez de un punto o un corchete
console.log(misdatos);
console.log(misdatos.nombres);
console.log(misdatos["apellido"]); 
console.log(misdatos["edad"]); // 30
console.log("mi nombre es",misdatos.nombres,"soy de",misdatos.ciudad); 
misdatos.greating(); // muestra "estudiante de ingenieria en sistemas"

//ejercicio-------------------------
function datos(nombre,apellido){
    let obj= {
        name: nombre,
        lastName: apellido,
    }
    console.log("mi nombre completo es",obj.name,obj.lastName);
    return obj;
}
//llamamos la funcion
datos("luisa fernanda","bernal");

//---------------return =retorno de una variable-------------------
//return=retorna un valor de una funcion y se puede guardar en una variable
function retorno(nombre,apellido){
const obj= {
    nombre,apellido
}
return "nombre completo:" + obj.nombre + " " + obj.apellido;
}
console.log(retorno("luisa","bernal"));
resultado=retorno("fernanda","gordillo");
console.log(resultado);

//-------------------------------------------------
//-----------------calculadora con retorno
//CONVERCION DE TIPOS:
//parseInt=convierte un string a un numero entero
//parseFloat=convierte un string a un numero decimal
//Number=convierte un string a un numero entero o decimal:primera forma=
variable="10"
variable= Number(variable)
console.log(variable);//10
//segunda forma=
variable='10'
variable= parseFloat(variable)
//3ra forma=
variable="10"
variable= parseInt(variable)
const sumar= (a,b) => {
    return a + b;
}
const restar = (a,b) => {
    return a - b;
}
// let multiplicacion = (a,b) => {
//     return a * b;
// }
const dividir = (a,b) => {
    return a / b;
}
let n1= parseInt(prompt("ingresa el primer numero"));
let n2 = parseInt(prompt("ingresa el segundo numero"));
console.log("la suma de los numeros", n1, "+", n2, "es:", sumar(n1, n2));
console.log("la resta de los numeros", n1, "-", n2, "es:", restar(n1, n2));

console.log("la multiplicacion de los numeros", n1, "*", n2, "es:", multiplicacion(n1, n2));
console.log("la division de los numeros", n1, "/", n2, "es:", dividir(n1, n2));

//division sin cero
const dividirSinCero = (a,b) => {
    if(b === 0) return "no se puede dividir entre cero";
    else return a / b;
}
