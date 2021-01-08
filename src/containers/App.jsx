import React from 'react';

import AddPlace from '../components/AddPlace';
import CurrentWeather from '../components/CurrentWeather';
import NextWeather from '../components/NextWeather';
import PlaceToVisit from '../components/PlaceToVisit';
import Spinner from '../components/Spinner';
import { useFetch } from '../hooks/useFetch';

const App = () => {
  
  const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=4.61&lon=-74.08&exclude=hourly&appid=5d96aee95530c282c262bdf38d259718&units=metric';
  
  const { data: weather, loading } = useFetch(url);
  
  const nextDays = [];

  // I extract the next 3 days to show it
  if (weather) {
    for (let i = 1; i <= 3; i++) {
      // operation to create a date
      const fecha = new Date(Math.floor(weather.daily[i].dt * 1000));

      nextDays.push({
        id: weather.daily[i].dt,
        day: fecha.getDay(),
        subtitle: weather.daily[i].weather[0].main,
        max: weather.daily[i].temp.max,
        min:  weather.daily[i].temp.min,
        image: weather.daily[i].weather[0].icon
      });
    }
  };

  return (
    <>
      {
        (loading)
          ? <Spinner />
          :(<div>
            <CurrentWeather
              temperature={weather.current.temp}
              image={weather.current.weather[0].icon}
            />
              <div className="data">
                <NextWeather nextDays={ nextDays } />
                <div className="data__other-places">
                  <PlaceToVisit />
                  <AddPlace/>
                </div>
              </div>

            </div>)
      }
    </>
  )
}

export default App;
