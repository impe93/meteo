import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weather } from './weather.models';
import { IHttpClient } from '../../services/http/HttpClient';
import { AppThunk, RootState } from '../../redux/store';

export type HomeState = {
  weather: Weather | null;
};

const initialState: HomeState = {
  weather: null,
};

const TODAY_METEO_SLICE_NAME: string = 'todayMeteoSlice';

export const setWeatherHandler = (
  state: HomeState,
  action: PayloadAction<Weather>
) => {
  state.weather = action.payload;
};

export const homeSlice = createSlice({
  name: TODAY_METEO_SLICE_NAME,
  initialState,
  reducers: {
    setWeather: setWeatherHandler,
  },
});

export const { setWeather } = homeSlice.actions;

export type WeatherApiSettings = {
  q?: string;
  lat?: number;
  lon?: number;
};

export const getWeather = (
  { q, lat, lon }: WeatherApiSettings,
  httpClient: IHttpClient
): AppThunk => async (dispatch) => {
  try {
    const weather: Weather = await httpClient.get<Weather>('/weather', {
      params: { q, lat, lon },
    });
    dispatch(setWeather(weather));
  } catch (e) {
    throw new Error(e);
  }
};

export const selectWeather = (state: RootState) =>
  state.homeSliceReducer.weather;

export const homeSliceReducer = homeSlice.reducer;
