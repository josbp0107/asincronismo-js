const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Sussefully');
        } else {
            reject('Wrong');
        }
    });
};

somethingWillHappen()
    .then(response  => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True')
            }, 2000)
        } else {
            const error = new Error('Wrong')
            reject(error)
        }
    })  
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

// Correr varias promesas al mismo tiempo o encadenadas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(err => {
        console.error(err);
    })