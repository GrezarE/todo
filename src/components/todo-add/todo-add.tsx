import React, { FormEventHandler, useState, ChangeEventHandler } from 'react';
import style from './todo-add.module.scss';

export const TodoAdd = () => {
  const [taskText, setTaskText] = useState('');

  const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const task = {
      task: taskText,
      createAt: new Date(Date.now()).toLocaleDateString(),
      resolved: false
    };
    console.log(task);
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
