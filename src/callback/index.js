function sum(a,b) {
    return a + b;
}
// Por estandar se coloca por nombre callback
function calc(a, b, callback) {
    return callback(a,b);
}

console.log(calc(2,2,sum))

function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);        
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate); 