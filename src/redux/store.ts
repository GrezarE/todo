import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoSlice';

export const store = configureStore({
  reducer: { todo: todoReducer },
  middleware: [],
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
