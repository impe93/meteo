import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHttpClient } from '../../services/http/HttpClient';
import { AppThunk, RootState } from '../../redux/store';
import { hideLoader, showLoader } from '../../components/Loader/loaderSlice';
import { Forecast } from './forecast.models';

export type HomeState = {
  forecast: Forecast | null;
};

const initialState: HomeState = {
  forecast: null,
};

const FORECAST_SLICE_NAME: string = 'todayMeteoSlice';

export const setForecastHandler = (
  state: HomeState,
  action: PayloadAction<Forecast>
) => {
  state.forecast = action.payload;
};

export const forecastSlice = createSlice({
  name: FORECAST_SLICE_NAME,
  initialState,
  reducers: {
    setForecast: setForecastHandler,
  },
});

export const { setForecast } = forecastSlice.actions;

export type ForecastApiSettings = {
  q?: string;
  lat?: number;
  lon?: number;
};

export const getForecast = (
  settings: ForecastApiSettings,
  httpClient: IHttpClient
): AppThunk => async (dispatch) => {
  try {
    dispatch(showLoader());
    const forecast: Forecast = await httpClient.get<Forecast>('/forecast', {
      params: { lat: settings.lat, lon: settings.lon },
    });
    dispatch(setForecast(forecast));
  } catch (e) {
    throw new Error(e);
  } finally {
    dispatch(hideLoader());
  }
};

export const selectForecast = (state: RootState) =>
  state.forecastSliceReducer.forecast;

export const forecastSliceReducer = forecastSlice.reducer;
