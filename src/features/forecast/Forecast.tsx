import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IHttpClient, IHttpClientType } from '../../services/http/HttpClient';
import { useDependency } from '../../services/ioc/useDependency';
import { selectPosition } from '../home/homeSlice';
import { getForecast, selectForecast } from './forecastSlice';
import styleSheet from '../forecast/forecast.module.css';
import { Drawer } from './Drawer';
import WeatherIcon from 'react-icons-weather';
import { selectIsLoading } from '../../components/Loader/loaderSlice';
import { Loader } from '../../components/Loader/Loader';

export const Forecast = () => {
  const dispatch = useDispatch();
  const forecast = useSelector(selectForecast);
  const position = useSelector(selectPosition);
  const isLoading = useSelector(selectIsLoading);
  const httpClient = useDependency<IHttpClient>(IHttpClientType);

  useEffect(() => {
    if (position && !forecast) {
      dispatch(getForecast(position, httpClient));
    }
  }, [position, httpClient, dispatch, forecast]);

  return isLoading || !forecast ? (
    <Loader />
  ) : (
    <Drawer>
      <div className={styleSheet.title}>Previsioni</div>
      <div className={styleSheet.container}>
        {forecast.list?.map((f) => {
          const date = new Date(f.dt * 1000);

          return (
            <>
              <div className={styleSheet.objContainer}>
                <WeatherIcon
                  className={styleSheet.icon}
                  name='owm'
                  flip='horizontal'
                  iconId={f.weather[0].id}
                />
                <div className={styleSheet.description}>
                  <div className={styleSheet.text}>
                    {date.toLocaleDateString()} alle {date.toLocaleTimeString()}
                  </div>
                  <div className={styleSheet.text}>
                    {f.weather[0].description}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </Drawer>
  );
};
