"use strict";
const $form = document.getElementById("loginForm");//nombre de la variable como se lleno la clase del formulario
const $msg = document.getElementById("message");

$form.addEventListener("submit", (event) => {
    event.preventDefault();
    login();
});
//una forma de hacerlo---------------------------------
/*function login(){
    console.log("$form.username.value");//para ver el valor del formulario muestra el valor que se ingreso
    console.log("$form.password.value");// muestra el valor que se ingreso
    if (ussername==="pepa" && password==="ABC123"){
        console.log("bienvenido")
     } else{
        console.log("usuario o contraseña incorrecta")
     }
} */
//otra forma de hacerlo---------------------------------
function login(){
    const username = $form.username.value;
    const password = $form.password.value;
    let message= "";

    if( username === "pepa" && password === "ABC123"){
        $msg.classList.add("success");
        message = "Bienvenido";
        $form.style.display = "none"; //oculta el formulario
} else {
    $msg.classList.add("error");
    message = "acceso denegado";
}
$msg.textContent = message;
}
//para mostrar el mensaje de error