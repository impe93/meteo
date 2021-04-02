import React from 'react';
import styleSheet from './home.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../components/Loader/loaderSlice';
import { Loader } from '../../components/Loader/Loader';
import { Weather } from './weather.models';
import { WeatherPage } from './WeatherPage';
import { selectLastUpdate, selectWeather } from './homeSlice';
import { Link } from 'react-router-dom';
import DragIcon from '../../assets/images/drag-icon.svg';

export const Home = () => {
  const isLoading: boolean = useSelector(selectIsLoading);
  const weather: Weather = useSelector(selectWeather);
  const lastUpdate: Date = useSelector(selectLastUpdate);

  const temperature = weather?.main.temp.toFixed(0);
  const iconId = String(weather?.weather[0].id);
  const city = weather?.name;
  const weatherDescription = weather?.weather[0].description;
  const dateTime = lastUpdate?.toLocaleString();

  return (
    <div className={styleSheet.Home}>
      {isLoading || !weather ? (
        <Loader />
      ) : (
        <>
          <div className={styleSheet.drawer}>
            <Link to='/forecast'>
              <img src={DragIcon} alt='Drag icon' />
            </Link>
          </div>
          <WeatherPage
            city={city}
            iconId={iconId}
            dateTime={dateTime}
            temperature={temperature}
            weatherDescription={weatherDescription}
          />
        </>
      )}
    </div>
  );
};
