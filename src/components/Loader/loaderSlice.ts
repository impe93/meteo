import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';

export type LoaderState = {
  isLoading: boolean;
};

const initialState: LoaderState = {
  isLoading: false,
};

const LOADER_SLICE_NAME: string = 'todayMeteoSlice';

export const setIsLoadingHandler = (
  state: LoaderState,
  action: PayloadAction<boolean>
) => {
  state.isLoading = action.payload;
};

export const loaderSlice = createSlice({
  name: LOADER_SLICE_NAME,
  initialState,
  reducers: {
    setIsLoading: setIsLoadingHandler,
  },
});

export const { setIsLoading } = loaderSlice.actions;

export const selectIsLoading = (state: RootState) =>
  state.loaderSliceReducer.isLoading;

export const loaderSliceReducer = loaderSlice.reducer;
