import React from 'react';
import style from './app.module.scss';
import { TodoAdd } from '../todo-add/todo-add';

export const App = () => {
  return (
    <div className={style.app}>
      <h1>Todo List</h1>
      <TodoAdd />
    </div>
  );
};
