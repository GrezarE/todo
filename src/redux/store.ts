import { configureStore } from '@reduxjs/toolkit';
import { Action, ActionCreator } from 'redux';

export const store = configureStore({
  reducer: {},
  middleware: [],
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
