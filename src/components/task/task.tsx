import React from 'react';
import { useDispatch } from '../../redux/hooks';
import { removeTask, resolveTast } from '../../redux/todoSlice';
import style from './task.module.scss';

export const Task = (task: any) => {
  const { index, name, date, status } = task;
  const dispatch = useDispatch();

  const onRemove = () => {
    dispatch(removeTask(index));
  };
  const onResolve = () => {
    dispatch(resolveTast(index));
  };

  return (
    <li className={status ? style.task_resolved : style.task}>
      <p>{index + 1}</p>
      <p>{name}</p>
      <p>{date.slice(0, 5)}</p>
      <p>{status ? 'Выполнен' : 'В процессе'}</p>
      <div>
        <button className={style.delete} onClick={onRemove}>
          Удалить
        </button>
        <button
          className={status ? style.resolved : style.resolve}
          onClick={onResolve}
          disabled={status ? true : false}
        >
          Выполнено
        </button>
      </div>
    </li>
  );
};
