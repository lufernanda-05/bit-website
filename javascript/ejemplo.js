//tabla de multiplkicar ciclo while del numero 4
let numero = 4;        
let multiplicador = 1;     

while (multiplicador <= 10) {
  console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
  multiplicador++;
}

 let i=0
 mensaje=""
 do {
    mensaje=prompt("deseas continuar SI O escribe NO")
    if (mensaje != "NO"){
        alert("hola",i,"veces")
    }else{
        alert("adios")
    }
  break
 } while (mensaje!="NO");

 //-----------------ejercicio #1 libreria 
 let coleccion=[{
  id:1,titulo:"100 años",autor:"gabriel marquez",añoPublicacion:1967,genero:"fantasia",disponible:true
 },{
        id:2, titulo:"1984",autor:"George Orwell",añoPublicacion:1949,genero:"Distopía",disponible:false
    },{
        id:3, titulo:"La rebelión de las ratas",autor:"Fernando Soto",añoPublicacion:1962,genero:"Realismo",disponible:true
    },{
        id:4, titulo:"Don Quijote De la Mancha",autor:"Miguel De Cervantes",añoPublicacion:1605,genero:"Sátira",disponible:true
    },{
        id:5,titulo: "El Señor de los Anillos: La Comunidad del Anillo",autor: "J.R.R. Tolkien",añoPublicacion: 1954,genero: "Fantasía",disponible: false
    }
];

coleccion.push({
    id: 6,titulo: "El Silmarillion",autor: "J.R.R. Tolkien",añoPublicacion: 1977,genero: "Fantasía",disponible: true});
    console.log(" se agrego al final :",coleccion);

    coleccion.unshift({
    id: 7,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupery",
    añoPublicacion: "1943",
    genero: "Literatura infantil",
    disponible: false,
});
console.log(" se agrego al inicio :",coleccion);

let quitarElUltimoLibro = coleccion.pop();
console.log("eliminando el ultimo libro",quitarElUltimoLibro);

coleccion.shift();
console.log("eliminando el primer libro",coleccion);

let idlibro=3;
let buscarlibro=coleccion.findIndex(coleccion=>coleccion.id===idlibro);
coleccion.splice(buscarlibro,1);
console.log("despues de eleminar el id 3 ", coleccion);

//-----crea una funcion que tome un array de numeros y devuelva la suma de ellos

function sumaNumeros(arreglo) { // una función que toma un arreglo y devuelve la suma
    let sum = 0; // inicializa en 0
    for (let x = 0; x < arreglo.length; x++) {
        sum += arreglo[x]; // suma cada elemento del arreglo
    }
  console.log("la suma del arreglo de los numeros :", arreglo, "es:", sum);
}
let numeros = [1, 2, 3, 4, 5]; // un arreglo de números
sumaNumeros(numeros); // llamamos a la función con el arreglo de números

const num = function suma(arr) {
    return arr.reduce((acumulador, numActual) => acumulador + numActual, 0);
};

let lista = [2, 6, 3, 20, 10];
console.log(`La suma de los números del arreglo es ${num(lista)}`);

