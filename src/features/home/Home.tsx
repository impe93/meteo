import React from 'react';
import styleSheet from './home.module.css';
import WeatherIcon from 'react-icons-weather';

type Props = {};

export const Home = () => {


  return (
    <div className={styleSheet.Home}>
      <div className={styleSheet.verticalContainer}>
        <div className={styleSheet.horizontalContainer}>
          <WeatherIcon
            className={`${styleSheet.fontSize} ${styleSheet.shadow}`}
            name='owm'
            flip="horizontal"
            iconId='500'
          />
          <div
            className={`${styleSheet.fontSize} ${styleSheet.shadow} ${styleSheet.text}`}
          >
            14°C
          </div>
        </div>
        <div className={`${styleSheet.shadow} ${styleSheet.description}`}>
          Oggi a <b>Torino</b> c'è <b>pioggia moderata</b>
        </div>
        <div className={`${styleSheet.shadow} ${styleSheet.update}`}>
          Ultimo aggiornamento 24-10-2019, 11:31:29
        </div>
        <div className={`${styleSheet.shadow} ${styleSheet.update}`}>
          Powered by <b>Lorenzo Imperatrice</b>
        </div>
      </div>
    </div>
  );
};
