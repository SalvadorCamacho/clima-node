const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')


const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async (direccion) => {
  try {
      const coords = await lugar.getLugarLatLong(direccion);
      const temp = await clima.getClima(direccion);
      return `El clima de ${direccion} es de: ${temp}, con latitud: ${coords.lat} y longitud: ${coords.lon}`;   
  } catch (error) {
    return `No se puedo determinar el clima de ${ direccion}`; 
  }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)