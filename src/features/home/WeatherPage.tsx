import React from 'react';
import WeatherIcon from 'react-icons-weather';
import styleSheet from './weather.module.css';

type Props = {
  temperature: string;
  iconId: string;
  city: string;
  weatherDescription: string;
  dateTime: string;
};

export const WeatherPage = ({
  temperature,
  iconId,
  city,
  weatherDescription,
  dateTime,
}: Props) => {
  return (
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
        Ultimo aggiornamento {dateTime}
      </div>
      <div className={`${styleSheet.shadow} ${styleSheet.update}`}>
        Powered by <b>Lorenzo Imperatrice</b>
      </div>
    </div>
  );
};
