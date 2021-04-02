import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IHttpClient, IHttpClientType } from '../../services/http/HttpClient';
import { useDependency } from '../../services/ioc/useDependency';
import { selectPosition } from '../home/homeSlice';
import { getForecast, selectForecast } from './forecastSlice';
import styleSheet from '../forecast/forecast.module.css';
import { Drawer } from './Drawer';
import { selectIsLoading } from '../../components/Loader/loaderSlice';
import { Loader } from '../../components/Loader/Loader';
import { ForecastObject } from './ForecastObject';

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
        {forecast.list?.map((f, i) => {
          return <ForecastObject key={i} forecast={f} />
        })}
      </div>
    </Drawer>
  );
};
