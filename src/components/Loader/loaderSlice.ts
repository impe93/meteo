import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';

export type LoaderState = {
  isLoading: boolean;
};

const initialState: LoaderState = {
  isLoading: false,
};

const LOADER_SLICE_NAME: string = 'todayMeteoSlice';

export const hideLoaderHandler = (
  state: LoaderState,
  action: PayloadAction<boolean>
) => {
  state.isLoading = false;
};

export const showLoaderHandler = (
  state: LoaderState,
  action: PayloadAction<boolean>
) => {
  state.isLoading = true;
};

export const loaderSlice = createSlice({
  name: LOADER_SLICE_NAME,
  initialState,
  reducers: {
    hideLoader: hideLoaderHandler,
    showLoader: showLoaderHandler,
  },
});

export const { hideLoader, showLoader } = loaderSlice.actions;

export const selectIsLoading = (state: RootState) =>
  state.loaderSliceReducer.isLoading;

export const loaderSliceReducer = loaderSlice.reducer;
