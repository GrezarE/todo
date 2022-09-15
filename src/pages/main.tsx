import React, { useEffect } from 'react';
import { TodoAdd } from '../components/todo-add/todo-add';
import { useLocalStorageHook } from '../hooks/localHook';
import { useDispatch, useSelector } from '../redux/hooks';

export const Main = () => {
  const { user, todoList } = useSelector((store) => store.todo);
  const [localTodos, setLocalTodos] = useLocalStorageHook(user, []);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  useEffect(() => {

  }, [])

  useEffect(() => {

  }, [todoList]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoAdd />
    </div>
  );
};
