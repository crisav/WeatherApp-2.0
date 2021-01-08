import React from 'react';
import { useFetch } from '../hooks/useFetch';

import WeatherDay from './WeatherDay';

const City = ({
  id,
  location,
  country,
  lat,
  lng,
  places,
  setPlaces
}) => {

  // API openweatgermap TO GET TEMP

  const API_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5d96aee95530c282c262bdf38d259718&units=metric`;

  const { data: weather, loading } = useFetch(API_WEATHER);

  const handleDelete = () => {

    const newArray = places.filter( place => place.id !== id );

    setPlaces(newArray);

  }

  return (
    <>
      {
        (loading)
          ? <p>...</p>
          :(<div className="city">
              <WeatherDay 
                title={location}
                subtitle={country}
                image={weather.weather[0].icon}
                temperature={weather.main.temp}
              /> 
              <button 
                onClick={handleDelete}
                className="city-btn"
              >
                <i className="far fa-trash-alt"></i>
              </button>
            </div>)
      }
    </>
  )
};

export default City;
