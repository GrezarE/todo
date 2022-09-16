import React from 'react';
import { useSelector } from '../../redux/hooks';
import { Task } from '../task/task';
import style from './todo-list.module.scss';

export const TodoList = () => {
  const { todoList } = useSelector((store) => store.todo);
  console.log(todoList);

  return (
    <ul className={style.grid}>
      <li className={style.header}>
        <p>№</p>
        <p>Задача</p>
        <p>Дата</p>
        <p>Статус</p>
        <p>Действия</p>
      </li>
      {todoList &&
        todoList.map((item, index) => (
          <Task
            index={index}
            name={item.task}
            date={item.createAt}
            status={item.resolved}
            key={index}
          />
        ))}
    </ul>
  );
};
