const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



//lugar para obtener longitud y latitud
// lugar.getLugarLatLong(argv.direccion)
//   .then(console.log)
//   .catch(console.log)
 
//Lugar para obtener clima
clima.getClima(argv.direccion)
   .then(console.log)
   .catch(console.log)