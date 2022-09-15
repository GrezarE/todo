import React, { FormEventHandler, useState, ChangeEventHandler } from 'react';
import { useDispatch, useSelector } from '../redux/hooks';
import { addUser } from '../redux/todoSlice';
import { Link, Navigate } from 'react-router-dom';
import style from './login.module.scss'

export const Login = () => {
  const dispatch = useDispatch();
  const [userName, setUser] = useState('');
  const { user } = useSelector((store) => store.todo);

  if (user) {
    return <Navigate to="/" />;
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    dispatch(addUser(userName));
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setUser(evt.target.value);
  };

  return (
    <form onSubmit={onSubmit} className={style.form}>
      <h1>Выбор пользователя</h1>
      <input onChange={onChange}></input>
      <button type="submit">Войти</button>
    </form>
  );
};