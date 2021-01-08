import React from 'react';

const WeatherDay = ({ 
  title = 'Friday',
  subtitle = 'Sun',
  temperature,
  max,
  min,
  image = '03d'
}) => {
  return (
    <div className="weatherday" >
      <div className="weatherday__day">
        <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} />
        <p>
          <span className="bold">{title}</span><br />
          <span className="thin">{subtitle}</span>
        </p>
      </div>
      <div className="weatherday__data">
        { (temperature) 
          ? <p>{`${temperature.toFixed()}°`}</p> 
          : <p>{`${max.toFixed()}° / ${min.toFixed()}°`}</p>
        }
      </div>
    </div>
  )
}

export default WeatherDay;