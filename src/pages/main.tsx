import React, { useEffect } from 'react';
import { TodoAdd } from '../components/todo-add/todo-add';
import { useLocalStorageHook } from '../hooks/localHook';
import { useDispatch, useSelector } from '../redux/hooks';
import { getTasksFromLocal } from '../redux/todoSlice';

export const Main = () => {
  const { user, todoList } = useSelector((store) => store.todo);
  const [localTodos, setLocalTodos] = useLocalStorageHook(user, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksFromLocal(localTodos));
  }, []);

  useEffect(() => {
    setLocalTodos(todoList);
  }, [todoList]);

  return (
    <div className='main'>
      <h1>Todo List</h1>
      <TodoAdd />
    </div>
  );
};
