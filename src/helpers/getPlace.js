const axios = require('axios');

export const getPlace = async( dir ) => {

  // API opencagedata TO GET COORDS

  const encodeUrl = encodeURI( dir );
  
  const API_PLACE = `https://api.opencagedata.com/geocode/v1/json?q=${encodeUrl}&key=e46937d4c6ed411fac30c588096e4221`;
  
  const resp = await axios.get(API_PLACE);

  if (resp.data.results.length === 0) {
    throw new Error(`No hay resultados para ${ dir }`);
  }
  
  const id = new Date().getTime();
  const { country, city: location }  = resp.data.results[0].components;
  const { lat, lng } = resp.data.results[0].geometry

  return {
    id,
    country,
    location,
    lat,
    lng
  }  

};