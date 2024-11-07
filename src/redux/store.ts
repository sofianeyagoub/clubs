import { configureStore } from '@reduxjs/toolkit';
import clubsReducer from './slices/clubsSlice';
import playersReducer from './slices/playersSlice';

export const store = configureStore({
  reducer: {
    clubs: clubsReducer,
    players: playersReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;