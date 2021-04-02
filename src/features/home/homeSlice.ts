import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weather } from './weather.models';
import { IHttpClient } from '../../services/http/HttpClient';
import { AppThunk, RootState } from '../../redux/store';
import { hideLoader, showLoader } from '../../components/Loader/loaderSlice';

export type HomeState = {
  weather: Weather | null;
  position: Position | null;
  lastUpdate: Date | null;
};

export type Position = {
  lat: number;
  lon: number;
};

const initialState: HomeState = {
  weather: null,
  position: null,
  lastUpdate: null,
};

const TODAY_METEO_SLICE_NAME: string = 'todayMeteoSlice';

export const setWeatherHandler = (
  state: HomeState,
  action: PayloadAction<Weather>
) => {
  state.weather = action.payload;
  state.lastUpdate = new Date();
};

export const setPositionHandler = (
  state: HomeState,
  action: PayloadAction<Position>
) => {
  state.position = action.payload;
};

export const homeSlice = createSlice({
  name: TODAY_METEO_SLICE_NAME,
  initialState,
  reducers: {
    setWeather: setWeatherHandler,
    setPosition: setPositionHandler,
  },
});

export const { setWeather, setPosition } = homeSlice.actions;

export type WeatherApiSettings = {
  q?: string;
  lat?: number;
  lon?: number;
};

export const getWeather = (
  settings: WeatherApiSettings,
  httpClient: IHttpClient
): AppThunk => async (dispatch) => {
  try {
    dispatch(showLoader());
    const weather: Weather = await httpClient.get<Weather>('/weather', {
      params: { q: settings.q, lat: settings.lat, lon: settings.lon },
    });
    dispatch(setWeather(weather));
  } catch (e) {
    throw new Error(e);
  } finally {
    dispatch(hideLoader());
  }
};

export const selectWeather = (state: RootState) =>
  state.homeSliceReducer.weather;

export const selectPosition = (state: RootState) =>
  state.homeSliceReducer.position;

export const selectLastUpdate = (state: RootState) =>
  state.homeSliceReducer.lastUpdate;

export const homeSliceReducer = homeSlice.reducer;
