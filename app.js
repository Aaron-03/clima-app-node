const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const { getLatLong } = lugar;

const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Ciudad',
        demand: true
    },
    pais: {
        alias: 'p',
        desc: 'País',
        demand: true
    }
}).argv;

let ciudad = encodeURI(argv.ciudad);
let pais = encodeURI(argv.pais);

const getInfo = async (ciudad, pais) => {

    try {

        let coors = await getLatLong(ciudad, pais);
    let temperatura = await clima.getClima(coors.lat, coors.lng);

    return `El clima es ${ciudad}-${pais} es de ${temperatura}`;

    } catch(e) {
        return `No se pudo determinar el clima en ${ciudad}-${pais}`;
    }
}

getInfo(ciudad, pais)
.then(msg => console.log(msg))
.catch(err => console.log(err));


// getLatLong(ciudad, pais)
// .then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// });

// clima.getClima(9.9280694, -84.0907246)
// .then(temp => {
//     console.log(temp);
// })
// .catch(err => console.log(err));
