import React from 'react';

import WeatherDay from './WeatherDay';
import Title from './Title';

const NextWeather = ({ nextDays }) => {

  const Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="nextweather">

      <Title title="3 Days" subtitle="Forecast"/>

      <div className="nextweather__days">
        {
          nextDays.map( item => (
            <WeatherDay 
              key={item.id}
              title={ Days[item.day] }
              subtitle={item.subtitle}
              temerature={item.temerature}
              max={item.max}
              min={item.min}
              image={item.image}
            />
          ))
        }
      </div>

    </div>
  )
};

export default NextWeather;