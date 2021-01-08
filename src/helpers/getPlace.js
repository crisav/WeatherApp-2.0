const axios = require('axios');

export const getPlace = async( dir ) => {

  // API opencagedata TO GET COORDS

  const encodeUrl = encodeURI( dir );
  
  const API_PLACE = `https://api.opencagedata.com/geocode/v1/json?q=${encodeUrl}&key=e46937d4c6ed411fac30c588096e4221`;
  
  const resp = await axios.get(API_PLACE);

  if (resp.data.results.length === 0) {
    throw new Error(`No hay resultados para ${ dir }`);
  }

  const { lat, lng } = resp.data.results[0].geometry

  // API openweatgermap TO GET TEMP

  const API_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5d96aee95530c282c262bdf38d259718&units=metric`

  const resp2 = await axios.get(API_WEATHER);
  
  const id = new Date().getTime();
  const country = resp.data.results[0].components.country;
  const location = resp.data.results[0].components.city;
  const temperature = resp2.data.main.temp;
  const image = resp2.data.weather[0].icon;

  return {
    id,
    country,
    location,
    temperature,
    image
  }  

};
