//---------------METODOS MATH----------
//1). math.random()= aleatorio
console.log("juega adivina el numero:");
let secreto= Math.floor(Math.random()*10);
console.log(secreto);

//2 ). math.floor()= redondea hacia abjo 
Math.floor(5.8)
let gramo=287.5;
let peso=100;
let barras =Math.floor(peso/gramo);
console.log("se puede hacer : ",barras,"de chocolate");

//3). math.ceil(x)=redondea hacia arriba
let bombillas=37;
let porcaja=10;
let calculo=Math.ceil(bombillas/porcaja);
console.log("se necesitan: ",calculo);

//4). math.round(x)= redondea el mas cercano

  //5). math.abs(x)=el valor absoluto de un numero donde si es negativo lo vuelve positivo 

// 6). math. max(x,y,z)=
let numeros = (6, 8, 79, 5, 1);
let grande=Math.max(numeros);
console.log(grande);

// 7). math. min(x,y,z)=
let numero = [6.2,8.3,79.5,5.1];
let pequeño=Math.min(numeros);
console.log(pequeño);

//8). math.pow(base,exponente)= elevado
let cuadrado=7;
let num=Math.pow(cuadrado,2);
console.log(num);

//9)math.sqrt(x)= raiz cuadrada
let total=81;
let raiz=Math.sqrt(total);
console.log(raiz);

