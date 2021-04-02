import React from 'react';
import { ListEntity } from './forecast.models';
import WeatherIcon from 'react-icons-weather';
import styleSheet from './forecastObject.module.css';

type Props = {
  forecast: ListEntity;
};

export const ForecastObject = ({ forecast }: Props) => {
  const date = new Date(forecast.dt * 1000);

  return (
    <>
      <div className={styleSheet.objContainer}>
        <WeatherIcon
          className={styleSheet.icon}
          name='owm'
          flip='horizontal'
          iconId={String(forecast.weather[0].id)}
        />
        <div className={styleSheet.description}>
          <div className={styleSheet.text}>
            {date.toLocaleDateString()} alle {date.toLocaleTimeString()}
          </div>
          <div className={styleSheet.text}>{forecast.weather[0].description}</div>
        </div>
      </div>
    </>
  );
};
