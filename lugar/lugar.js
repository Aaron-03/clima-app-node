const axios = require('axios');

const getLatLong = async (ciudad, pais) => {

    let city = encodeURI(ciudad);
    let country = encodeURI(pais);

    const KEY = '962a66b8d257de4050959a2e5d990325';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${KEY}`;

    let response = await axios.get(URL);
    let latitud = response.data.coord.lat;
    let longitud = response.data.coord.lon;

    let r = {
        lat: latitud,
        lng: longitud
    };

    return r;
}

module.exports = {
    getLatLong
}