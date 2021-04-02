import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { container } from '../services/ioc/ContainerContext';
import { homeSliceReducer } from '../features/home/homeSlice'
import { loaderSliceReducer } from '../components/Loader/loaderSlice';
import { forecastSliceReducer } from '../features/forecast/forecastSlice';

export const store = configureStore({
  reducer: {
    homeSliceReducer,
    loaderSliceReducer,
    forecastSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {ignoredPaths: ['homeSliceReducer.lastUpdate']},
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const StoreType = Symbol.for('Store');

container.bind(StoreType).toConstantValue(store);
