
        // Función para contar vocales
        function contarVocales(frase) {
            const vocales = 'aeiouáéíóúAEIOUÁÉÍÓÚ';
            let contador = 0;

            for (let char of frase) {
                if (vocales.includes(char)) {
                    contador++;
                }
            }

            return contador;
        }

        // Pedir al usuario que ingrese una frase o palabra
        let frase = prompt("Por favor, ingresa una frase o palabra:");

        // Contar las vocales
        let numeroVocales = contarVocales(frase);

        // Mostrar el resultado
        alert(`La frase "${frase}" tiene ${numeroVocales} vocales.`);
