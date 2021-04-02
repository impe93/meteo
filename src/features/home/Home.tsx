import React from 'react';
import styleSheet from './home.module.css';
import WeatherIcon from 'react-icons-weather';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../components/Loader/loaderSlice';
import { Loader } from '../../components/Loader/Loader';
import { Weather } from './weather.models';
import { selectLastUpdate, selectWeather } from './homeSlice';

export const Home = () => {
  const isLoading: boolean = useSelector(selectIsLoading);
  const weather: Weather = useSelector(selectWeather);
  const lastUpdate: Date = useSelector(selectLastUpdate);

  const temperature = weather?.main.temp.toFixed(0);
  const iconId = String(weather?.weather[0].id);
  const city = weather?.name;
  const weatherDescription = weather?.weather[0].description;
  const date = lastUpdate?.toLocaleString();

  return isLoading || !weather ? (
    <Loader />
  ) : (
    <div className={styleSheet.Home}>
      <div className={styleSheet.verticalContainer}>
        <div className={styleSheet.horizontalContainer}>
          <WeatherIcon
            className={`${styleSheet.fontSize} ${styleSheet.shadow}`}
            name='owm'
            flip='horizontal'
            iconId={iconId}
          />
          <div
            className={`${styleSheet.fontSize} ${styleSheet.shadow} ${styleSheet.text}`}
          >
            {temperature}°C
          </div>
        </div>
        <div className={`${styleSheet.shadow} ${styleSheet.description}`}>
          Oggi a <b>{city}</b> c'è <b>{weatherDescription}</b>
        </div>
        <div className={`${styleSheet.shadow} ${styleSheet.update}`}>
          Ultimo aggiornamento {date}
        </div>
        <div className={`${styleSheet.shadow} ${styleSheet.update}`}>
          Powered by <b>Lorenzo Imperatrice</b>
        </div>
      </div>
    </div>
  );
};
