
const axios = require('axios');

const getClima = async (lat, lng) => {
    
    const KEY = '962a66b8d257de4050959a2e5d990325';
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${KEY}`;

    const result = await axios.get(URL);

    //console.log(result.data.main.temp);
    return result.data.main.temp;
}

module.exports = {
    getClima
}