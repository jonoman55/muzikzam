import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import appReducer from '../reducers/appSlice';
import themeReducer from '../reducers/themeSlice';
import { shazamApi } from '../apis/shazamApi';

export const store = configureStore({
  reducer: {
    app: appReducer,
    theme: themeReducer,
    [shazamApi.reducerPath]: shazamApi.reducer,
  },
  middleware: gDM => gDM({
    serializableCheck: false,
  }).concat(
    shazamApi.middleware,
  ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
