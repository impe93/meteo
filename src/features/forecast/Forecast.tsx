import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IHttpClient, IHttpClientType } from '../../services/http/HttpClient';
import { useDependency } from '../../services/ioc/useDependency';
import { selectPosition } from '../home/homeSlice';
import { getForecast, selectForecast } from './forecastSlice';

export const Forecast = () => {
  const dispatch = useDispatch();
  const forecast = useSelector(selectForecast);
  const position = useSelector(selectPosition);
  const httpClient = useDependency<IHttpClient>(IHttpClientType);

  useEffect(() => {
    if (position) {
      dispatch(getForecast(position, httpClient))
    }
  }, [position, httpClient, dispatch])

  return (<div></div>)
}
