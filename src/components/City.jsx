import React from 'react';

import WeatherDay from './WeatherDay';

const City = ({
  id,
  location,
  country,
  temperature,
  image,
  places,
  setPlaces
}) => {

  const handleDelete = () => {

    const newArray = places.filter( place => place.id !== id );

    setPlaces(newArray);

  }

  return (
    <div className="city">
      <WeatherDay 
        title={location}
        subtitle={country}
        image={image}
        temperature={temperature}
      />
      <button 
        onClick={handleDelete}
        className="city-btn"
      >
        <i className="far fa-trash-alt"></i>
      </button>
    </div>  
  )
};

export default City;
