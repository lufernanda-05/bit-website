//!-------------------EJERCICIO CALIFICABLE:----------------
console.log("      <<<<<    bienvenido a las calificaciones  >>>>>>>>");
let estudiantes=[
    {nombre:"zamara",calificacion:[85,90,100]},
    {nombre:"ana",calificacion:[65,95,70]},
    {nombre:"fernanda",calificacion:[78,80,88]}
]
console.log("Estos son los estudiantes y sus calificaciones");
estudiantes.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}   Calificaciones: ${estudiante.calificacion}`);
});

console.log("         <<<<<<<   promedio  de los estudiantes  >>>>>");
estudiantes.forEach(estudiante => {
    let suma = estudiante.calificacion.reduce((a, b) => a + b, 0);// usamos reduce para sumar las calificaciones 
    let promedio = suma / estudiante.calificacion.length;
    console.log(`El promedio de ${estudiante.nombre} es: ${promedio}`);
}); 
console.log("        >>  nota mas alta y nota mas baja de los estudiantes  <<<<");
//calificacion mas alta:
let masalta = 0;//inicializamos la variable en 0
estudiantes.forEach(estudiante => {
    let max = Math.max(...estudiante.calificacion);
    if (max > masalta) {masalta
        masalta = max;
    }
});
console.log("La calificación más alta es:", masalta);   

//calificacion mas baja:
let masbaja = Infinity; //inicializamos la variable en infinito para encontrar el mínimo
estudiantes.forEach(estudiante => {
    let min = Math.min(...estudiante.calificacion);
    if (min < masbaja) {
        masbaja = min;
    }
});
console.log("La calificación más baja es:", masbaja);

//anexo de calificaciones por estudiante:
console.log("    <<<<<anexo de calificaciones>>>>>");
function agregarCalificacion(nombreEstudiante, nuevaCalificacion) {
    // Buscamos el estudiante por su nombre
    const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);//el find busca el estudiante por su nombre y anaexa el primer elemento  que encuentre que cumpla con el parametro
    if (estudiante) {
        // Si el estudiante existe, agregar la nueva calificación
        estudiante.calificacion.push(nuevaCalificacion);
        console.log(`se agregó una calificación a ${nombreEstudiante} de: ${nuevaCalificacion}`);
    } else {
        // Si el estudiante no existe, mostrar un mensaje
        console.log(`no se encontró al estudiante ${nombreEstudiante}`);
    }
}
//llamamos la funcion 
agregarCalificacion("ana",60);//se agrega al final del array
agregarCalificacion("ferchis", 95);//no existe
   
//eliminar la última calificación de un estudiante
function eliminar(nombreEstudiante) {
    // Buscamos el estudiante por su nombre
    const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);
    if (estudiante) {
        // Si el estudiante existe, se elimina la última calificación
        const ultima = estudiante.calificacion.pop();// usamos pop para eliminar el último elemento del array
        console.log(`se eliminó la última calificación de ${nombreEstudiante}: ${ultima}`);
    } else {
        // Si el estudiante no existe, mostrar un mensaje
        console.log(`no se puede eliminar la calificacion ya que no existe el estudiante :  ${nombreEstudiante}`);
    }
}
console.log("    <<<<eliminacion de notas>>>>");
//llamamos la funcion eliminar
eliminar("fernanda");//se elimina la última calificación
eliminar("ferchis");//no elimina la última calificación porque no existe el estudiante

//estudiantes aprobados por promedio
function filtrarEstudiantesAprobados(promedioMinimo) {
    return estudiantes.filter(estudiante => {
        // Calcular la suma de las calificaciones
        let suma = estudiante.calificacion.reduce((a, b) => a + b, 0);
        // Calcular el promedio
        let promedio = suma / estudiante.calificacion.length;
        return promedio >= promedioMinimo;
    });
}
const promedioMinimo = 80; //promedio minimo
const estudiantesAprobados = filtrarEstudiantesAprobados(promedioMinimo);
console.log("Los estudiantes aprobados con un promedio >= 80% son:", estudiantesAprobados);
//mostrar estudiantes aprobados
estudiantesAprobados.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}`);
});

//order alfabetico de estudiantes
function ordenarEstudiantesPorNombre() {
    estudiantes.sort((a, b) => {
        // Comparar los nombres en orden alfabético
        if (a.nombre < b.nombre) {
            return -1; // a va antes que b
        }
        if (a.nombre > b.nombre) {
            return 1; // b antes que a
        }
        return 0; // si son iguales
    });
}
// estudiantes ordenados
console.log("Estudiantes por orden alfabetico:");
ordenarEstudiantesPorNombre();
estudiantes.forEach(estudiante => {
    console.log(`${estudiante.nombre}`);
});

//reporte final de estudiantes
console.log("       <<<<Reporte final de cada estudiante:<<<<<<");
estudiantes.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Calificaciones: ${estudiante.calificacion.join(", ")}`);
    
    // promedio
    let suma = 0;
    for (let i = 0; i < estudiante.calificacion.length; i++) {// Recorremos las calificaciones con el ciclo  
        suma += estudiante.calificacion[i];
    }
    let promedio = suma / estudiante.calificacion.length;   
    console.log(`Promedio: ${promedio}`);
    let calificacionBaja = estudiante.calificacion[0]; 
    let calificacionAlta = estudiante.calificacion[0]; 
    //recorremos las calificaciones para encontrar la más alta y la más baja
    for (let i = 1; i < estudiante.calificacion.length; i++) {
        if (estudiante.calificacion[i] < calificacionBaja) {
            calificacionBaja = estudiante.calificacion[i]; 
        }
        if (estudiante.calificacion[i] > calificacionAlta) {
            calificacionAlta = estudiante.calificacion[i];
        }
    }
    console.log(`Calificación más alta: ${calificacionAlta}`);
    console.log(`Calificación más baja: ${calificacionBaja}`);
    console.log("-----------------------------");
});

//gestionar estudiantes
console.log("       <<<<MENU<<<<<<");
function gestionestudiantes() {
    let opcion;//definimos la variable 
    do {
        opcion = prompt("bienvenido al sistema de gestion de estudiantes Seleccione una opción:\n1. Agregar estudiante\n2. Eliminar estudiante\n3. Mostrar estudiantes\n4. Salir");
        switch (opcion) {//usamos el ciclo segun para entrar a la opcion deseada
            case '1':
                const nombre = prompt("Ingrese el nombre del estudiante:");
                const calificaciones = prompt("Ingrese las calificaciones de separadas por comas:").split(',').map(Number);// usamos map para convertir las calificaciones a números
                estudiantes.push({ nombre, calificacion: calificaciones });
                //mostramos el mensaje por pantalla y en la consola
                alert(`Estudiante ${nombre} agregado con las notas: ${calificaciones.join(", ")}`);
                console.log(`Estudiante ${nombre} agregado con las notas: ${calificaciones.join(", ")}`);//le funcion join nos permite separar los elementos de un array
                break;
            case '2':
                const nombreEliminar = prompt("Ingrese el nombre del estudiante a eliminar:");
                const index = estudiantes.findIndex(est => est.nombre === nombreEliminar);
                if (index !== -1) {
                    estudiantes.splice(index, 1);
                    console.log(`Estudiante ${nombreEliminar} eliminado.`);
                } else {
                    console.log(`Estudiante ${nombreEliminar} no encontrado.`);
                }
                break;
            case '3':
                console.log("Lista de estudiantes:");
                estudiantes.forEach(est => console.log(`${est.nombre}: ${est.calificacion.join(", ")}`));
                break;
            case '4':
                alert("HASTA PRONTO=).");
                console.log("Saliendo gracias...");
                break;
            default:
                console.log("Opción no válida en el menu.");
        }
    } while (opcion !== '4');
}
console.log("validacion de funciones");
// Llamamos a las funciones 

gestionestudiantes(); 
agregarCalificacion("ana",50);
eliminar("fernanda");
ordenarEstudiantesPorNombre();
estudiantes.forEach(estudiante => {
    console.log(`Orden: ${estudiante.nombre}`);
});                                                                                                