const fs = require('fs');

let setMultiplica = (base) => {

    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`La base ${base} es incorrecta`);
            return;
        }


        for (let x = 0; x < 10; x++) {
            data += `${base} x ${x+1} = ${base * (x+1)} \n`;
        }

        fs.writeFile(`./tablas/tabla-de-${base}.txt`, data, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve(`tabla-de-${base}.txt`);
            }
        });
    });
}




module.exports = {
    setMultiplica
}