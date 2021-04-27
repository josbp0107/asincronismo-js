let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        /**
         * el valor de true esta por defecto, no es necesairo agregarlo, pero es buena practica agregarlo
         * El tercer parametro (true) especifica que se activa el asincronismo 
         */
        xhttp.open('GET', url_api, true);
        // Escucha lo que hace la conexion
        xhttp.onreadystatechange = (() => {
            // Valida si todo fue exitoso
            if (xhttp.readyState === 4) {
                // if ternario
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api))
            }
        });
        xhttp.send();
    });  
}

module.exports = fetchData;