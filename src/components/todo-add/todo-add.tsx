import React, {
  FormEventHandler,
  useState,
  ChangeEventHandler,
  useRef
} from 'react';
import { useDispatch } from '../../redux/hooks';
import { addTask } from '../../redux/todoSlice';
import style from './todo-add.module.scss';

export const TodoAdd = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();
  const ref = useRef<HTMLFormElement>(null);

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
    dispatch(addTask(task));
    ref.current?.reset();
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setTaskText(evt.target.value);
  };

  return (
    <form className={style.form} onSubmit={onSubmit} ref={ref}>
      <input placeholder="Добавить дело" onChange={onChange}></input>
      <button type="submit">Добавить</button>
    </form>
  );
};
