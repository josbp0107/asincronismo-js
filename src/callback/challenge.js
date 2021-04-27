let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let API = 'https://rickandmortyapi.com/api/character/'


function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    /**
     * el valor de true esta por defecto, no es necesairo agregarlo, pero es buena practica agregarlo
     * El tercer parametro (true) especifica que se activa el asincronismo 
     */
    xhttp.open('GET', url_api, true);
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

fetchData(API, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});
