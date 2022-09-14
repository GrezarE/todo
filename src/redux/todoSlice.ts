import { createSlice } from '@reduxjs/toolkit';

interface ITask {
  task: string;
  createAt: Date;
  resolved: boolean;
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
      todoList: [...state.todoList].filter(
        (item, index) => index !== action.payload
      )
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
