const axios = require('axios');

const getLugarLatLong = async (dir) => {
    const encoderUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://weather-api138.p.rapidapi.com/weather?city_name=${encoderUrl}`,
        headers: { 'X-RapidAPI-Key': 'fa48ca398cmshf79717a1eb36a98p1481e1jsnf9f8660557e6' }
    });

const resp = await instance.get();
    
if(resp.data.weather.lenght === 0){
    throw new Error(`No hay resultados para ${dir}`);
}

const data = resp.data.coord;
const lat = data.lat;
const lon = data.lon;
const data2 = resp.data.weather.description;

    return {
        data2,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLong
}
