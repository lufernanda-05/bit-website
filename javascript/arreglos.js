
//------------------ arreglos--------------------------------------

//arreglos=coleccion de datos, se declaran con [] y se pueden modificar los elementos
//los indices son las posiciones de los elementos en el arreglo, empiezan desde 0
//el valor es el dato que contiene el arreglo como elemento 

//----------ARRAY----------------:

let frutas=["manzana","banana","naranja"]
console.log(frutas)
//para acceder a un elemento del arreglo se usa el indice
console.log(frutas[1])//banana 

// (push) =permite agregar elementos al final del arreglo)
frutas.push("pera","cereza");//para agregar al final de la lista
console.log("la frutas son ahora: ", frutas);

// (unshift)= agregar elementos al inicio del arreglo 
frutas.unshift("uva");
console.log("se agrego el elemento: ",frutas);

// (pop)=eleiminar el ultimo elemento )
let eliminar=frutas.pop();
console.log("se elimino el elemento: ",eliminar);

// (shift)= elimina el primer elemento poniendole o no una variable
let eli=frutas.shift();
console.log("se elimino: ",eli);

// (lipo)=  combinacion del push y el pop es que el ultimo en entrar es el primero en salir(LASR IN, FIRST OUT)
let tareas= [];
tareas.push("1. lavarme los dientes");
console.log(tareas);
tareas.push("2.bañarme");
console.log(tareas);
tareas.push("3.vestirme");
console.log(tareas);
tareas.push("4. desayunar");
console.log(tareas);

console.log("voy realizando las tareas")

let hecha=tareas.pop();tareas.push("1. lavarme los dientes");
console.log(tareas);
let hecha2=tareas.pop();
console.log(tareas);
let hecha3=tareas.pop();
console.log(tareas);
let hecha4=tareas.pop();
console.log(tareas);
let hecha5=tareas.pop();
console.log(tareas);

//(fifo)= first in, first out

let tarea= [];
tarea.push("1. lavarme los dientes");
console.log(tarea);
tarea.push("2.bañarme");
console.log(tarea);
tarea.push("3.vestirme");
console.log(tarea);
tarea.push("4. desayunar");
console.log(tarea);

let tarea1=tarea.shift();//se pone el shift para eliminar en orden osea desde el 1 elemento y asi susesivamente
console.log("mi primera tarea fue :",tarea1 );
console.log(tareas);
let tarea2=tarea.shift();
console.log("mi segunda tarea fue :",tarea2 );
console.log(tareas);
let tarea3=tarea.shift();
console.log("mi tercera tarea fue :",tarea3 );
console.log(tareas);
let tarea4=tarea.shift();
console.log("mi cuarta tarea fue :",tarea4 );
console.log(tareas);

// (splice) = permite cambiar el contenido de un array eliminando elementos existentes o añadiendo elementos en su lugar de 3 FORMAS DISTINTAS:
//!1. QUITAR: desde la posicion del arreglo que no quiera (3)
let canasta=["chanqueta","pantalon","medias","vestido"];
console.log(canasta);
let quitar=canasta.splice(1);// 
console.log("se quito", quitar);

//!2. cuantas quiero quitar desde una posicion (2)en el parentesis el primer numero es el indice donde arranca a eliminar o a partir de el y e otro es la cantidad de elementos nque va a eliminar a partir de el

 canasta=["chanqueta","pantalon","medias","vestido"];
console.log(canasta);
quitar=canasta.splice(1,3);
console.log( "se quitaron", quitar);

//!3. añadir:  desde donde quiere empezar a añadir (), el cero(0) la cantidad que va a quitar y lo que quiero añadir =(2,0,"camisa") y lo que este despues se pone al final 
canasta=["chanqueta","pantalon","medias","vestido"];
console.log(canasta);
quitar=canasta.splice(1,0,"zapatos");//corre la posicion 1 y mete lo agregado sin bobrrar nada y pone lo otro de ultimas
console.log(canasta);

//!3.1 quitar y agregar al mismo tiempo o remplazar= desde donde empieza ,cuantas quiere quitar desde una posicion, y agrega las frutas nuevas
canasta=["chanqueta","pantalon","medias","vestido"];
let remplaza=canasta.splice(2,1,"zapatos","chanclas");
console.log(canasta)

//(sort)=organiza los elementos de un arreglo

let alumnos=["luisa","victor","fernanda"];//orden alfabetico
console.log(alumnos);
alumnos.sort();
console.log(alumnos);

let numeros=[1,20,5,40];
console.log(numeros);
numeros.sort();

numeros.sort(function(a,b){
return a-b; //poner a antes de b si es un negativo y contrario b - a
});
console.log(numeros);

//(reverse) =invierte los numeros 
numeros=[1,20,5,4];
console.log(numeros);
numeros.reverse();
console.log("numeros de para atras: ",numeros);

//(foreach)=ejecuta una funcion para cada elemento del array
let dia=["barrer","trapear","limpiar"];
dia.forEach(function(tarea){
    console.log("he visto la tarea : ",tarea);
})

//(map)=crea un array con los resultados de lo que de lo que le dije a  dicha funcion y mantiene el original 

let examen =[70,80,95,30];
console.log("puntuaciones originales: ", examen);
 let mensajeDeAprobacion = examen.map(function(puntacion){
    if(puntacion >=60){
         return "Aprobado con "+ puntacion;
    }else{
        return "Reprobado con "+ puntacion;
    }
 });

console.log(mensajeDeAprobacion);
 console.log(puntuacionesExamen);

 ///filter() crea un array con todos los elementos que pasan la prueba impletada por la funcion que le indique 

 let rangosDeEmpleado=[
     {
     nombre:"Andrea", rango: "admin"        
},
{
     nombre:"Cristian", rango: "user"
 },
 {
     nombre:"Diana", rango: "admin"
 },
 {
     nombre:"Horacio", rango: "user"
 },
 {
     nombre:"Jaderson", rango: "admin"
 }];

 let administradores = rangosDeEmpleado.filter(function(rol){
     return rol.rango === "admin";
 });

 console.log("los administradores son: ");
 console.log(administradores);

//(reduce)= aplica la funcion a un comulador y al valor del array de izquierda a derecha 
let palabras=["hola", "mundo","soy","fer"];
console.log("las palabras separadas son :",palabras);
let frase=palabras.reduce(function(construida,actual){
    return construida +" "+actual;
})
console.log("la frase completa es: ",frase);

let num2 =[ 100,75,120,90,50];

console.log("puntuaciones de cada nivel ",num2);

let Tpuntos = num2.reduce(function(acumulador, puntuacionActual){
    console.log(`Sumando: ${acumulador} (lo que llevo) + ${puntuacionActual}(lo que acabo de encontrar)`);
    return acumulador + puntuacionActual;
},0);
console.log(Tpuntos);

//find() devuelve el valor del primer elemento  que encuentre que cumpla con el parametro proporcionado. si no encuentra ninguno el devuelve un undefined

let primerRangoEncontrado = rangosDeEmpleado.find(function(rol){
    return rol.rango === "user";
 });

 console.log(" la primera persona con el rango: ", primerRangoEncontrado);

// findIndex() Devuelve el indice del primer elemento que encuentre que cumpla con la funcion de prueba 

let misPeliculas = [
    {nombre:"Harry Potter" , genero:"accion" },
    {nombre:"Fast and furios" , genero:"accion" },
     {nombre:"Forrest Gump" , genero: "accion"},
    {nombre:"mision imposible" , genero: "accion"},
     {nombre:"Lilo & Stitch", genero:"accion" },
    {nombre:"El señor de los anillos"
  , genero:"accion" }];
 let indicePelicula =misPeliculas.findIndex(function(g){
     return g.genero === "drama";
 });

 let primerGenero =  misPeliculas.find(function(g){
     return g.genero === "drama";
  });

  let primerGenero2 =  misPeliculas.filter(function(g){
     return g.genero === "accion";
  });

 console.log("La primera posicion del genero accion que encontre fue : ", indicePelicula);
 console.log("la primer coincidencia con el genero accion le pertenece a ", primerGenero);
  console.log("los de accion son: ");
 console.log(primerGenero2);

//(some)Comprobar  si al menos un elemento del array cumple con la condicion implementada por la funcion indicada 
 let algunElemento = misPeliculas.some(function(name){
    return  name.nombre === "Lilo & Stitch"
 });

console.log("existe alguna pelicula que se llame el señor de los anillos ? ", algunElemento );

//(every)= comprueba si todos los elementos del array cumplen con las condiciones implementadaspor una funcion dada
 let todasLasPeliculasSon = misPeliculas.every(function(g){
     return g.genero === "accion";
});
 console.log("Todas las peliculas son de accion?", todasLasPeliculasSon);

//(conat)= unir 2 o mas array sin cambiar el existente sino mas bien devuelve uno nuevo con valores nuevos 
let cajaVaciaDeJuguetes = [];
 let misJuguetesDeMisPrimos = ["carrito", "tren", "pelota"];
 let juguetesQueMeDieron = ["robot", "bici","piano"];
 let juguetesAdicionales = ["guitarra", "monopoly","catan"];

 let todosMisJuguetes = cajaVaciaDeJuguetes.concat(misJuguetesDeMisPrimos,juguetesQueMeDieron,juguetesAdicionales);
console.log(todosMisJuguetes);

//(slice)= el 1 numero es el indice donde mepieza a cortar y el 2 numero si se quiere reducir desde que posicion  
let amigos=["vale","lu","fer","andres"];
console.log(amigos);
let amigosmitad=amigos.slice(2,3);
console.log("los amigos del medios son: ",amigosmitad);
