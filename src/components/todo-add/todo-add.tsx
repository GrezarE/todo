import React, { FormEventHandler, useState, ChangeEventHandler } from 'react';
import { useDispatch } from '../../redux/hooks';
import { addTask } from '../../redux/todoSlice';
import style from './todo-add.module.scss';

export const TodoAdd = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    if (!taskText) {
      return;
    }
    const task = {
      task: taskText,
      createAt: new Date(Date.now()).toLocaleDateString(),
      resolved: false
    };
    console.log(task);
    dispatch(addTask(task));
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setTaskText(evt.target.value);
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <input placeholder="Добавить дело" onChange={onChange}></input>
      <button type="submit">Добавить</button>
    </form>
  );
};
