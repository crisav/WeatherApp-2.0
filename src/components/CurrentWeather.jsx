import React from 'react';

const CurrentWeather = ({ temperature = 30, image = "04n" }) => {
  return (
    <section className="current-weather">
      
      <div className="current-weather__img">
        <h2><i className="fas fa-map-marker-alt"></i> Bogotá </h2>
      </div>

      <div className="current-weather__data">

        <div className="current-weather__data--temperature">
          <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} />
        </div>

        <h3>{temperature.toFixed()}° C</h3>

      </div>

    </section>
  )
};

export default CurrentWeather;
