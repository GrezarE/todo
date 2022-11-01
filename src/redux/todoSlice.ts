import { createSlice } from '@reduxjs/toolkit';

export interface ITask {
  task: string;
  createAt: Date;
  resolved: boolean;
}

export interface ITodoListSlice<T> {
  user: string;
  todoList: T[];
}

export const initialState: ITodoListSlice<ITask> = {
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
    resolveTast: (state, action) => ({
      ...state,
      todoList: [...state.todoList].map((item, index) => {
        if (index === action.payload) {
          const newItem = {
            ...item,
            resolved: true
          };
          return newItem;
        }
        return item;
      })
    }),
    getTasksFromLocal: (state, action) => ({
      ...state,
      todoList: action.payload
    })
  }
});

export const { addUser, addTask, removeTask, getTasksFromLocal, resolveTast } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
