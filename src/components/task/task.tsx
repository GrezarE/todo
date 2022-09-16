import React from 'react';
import style from './task.module.scss';

export const Task = (task: any) => {
  const { index, name, date, status } = task;

  return (
    <li className={style.task}>
      <p>{index}</p>
      <p>{name}</p>
      <p>{date.slice(0, 5)}</p>
      <p>{status ? 'Выполнен' : 'В процессе' }</p>
      <div></div>
    </li>
  );
};
