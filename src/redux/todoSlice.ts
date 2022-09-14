import { createSlice } from '@reduxjs/toolkit';

interface ITask {
  task: string;
  date: Date;
  resolved: boolean;
  id: string;
}

interface ITodoListSlice<T> {
  user: string;
  todoList: T[];
}

const initialState: ITodoListSlice<ITask> = {
  user: '',
  todoList: []
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addUser: (state, action) => ({
      ...state,
      user: action.payload
    }),
    addTask: (state, action) => ({
      ...state,
      todoList: [...state.todoList].concat(action.payload)
    }),
    removeTask: (state, action) => ({
      ...state,
      todoList: [...state.todoList].filter((item) => item.id !== action.payload)
    }),
    getTasksFromLocal: (state, action) => ({
      ...state,
      todoList: action.payload
    })
  }
});

export const { addUser, addTask, removeTask, getTasksFromLocal } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
