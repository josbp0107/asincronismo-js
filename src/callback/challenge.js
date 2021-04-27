let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    /**
     * el valor de true esta por defecto, no es necesairo agregarlo, pero es buena practica agregarlo
     * El tercer parametro (true) especifica que se activa el asincronismo 
     */
    xhttp.open('GET', url_api, true)
    // Escucha lo que hace la conexion
    xhttp.onreadystatechange = function(event) {
        // Valida si todo fue exitoso
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                // Regresamos el callback si tuvimos un status de 200, si todo salio bien y responseText convierte de object a string el json 
                callback(null, JSON.parse(xhttp.responseText)); // Parsea el Json
            } else {
                // Si arroja un error, pasamos la url y el estado
                const error = new Error('Error' + url_api);
                // retorna el callback con un mensaje de error y null porque no se desencadena nada
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}