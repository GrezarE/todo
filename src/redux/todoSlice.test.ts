import {
  todoReducer,
  addUser,
  addTask,
  removeTask,
  resolveTast,
  initialState
} from './todoSlice';

describe('Todo Slice', () => {
  it('init state', () => {
    expect(todoReducer(undefined, { type: undefined })).toEqual({
      user: '',
      todoList: []
    });
  });
  it('add user', () => {
    expect(todoReducer(initialState, addUser('user'))).toEqual({
      user: 'user',
      todoList: []
    });
  });
  it('add task', () => {
    const task = {
      task: 'Testing task',
      createAt: new Date(100),
      resolved: false
    };
    expect(todoReducer(initialState, addTask(task))).toEqual({
      user: '',
      todoList: [
        { task: 'Testing task', createAt: new Date(100), resolved: false }
      ]
    });
  });
  it('remove task', () => {
    const init = {
      user: 'user',
      todoList: [
        { task: 'Testing task', createAt: new Date(100), resolved: false }
      ]
    };
    expect(todoReducer(init, removeTask(0))).toEqual({
      user: 'user',
      todoList: []
    });
  });
  it('resolve task', () => {
    const init = {
      user: 'user',
      todoList: [
        { task: 'Testing task', createAt: new Date(100), resolved: false }
      ]
    };
    expect(todoReducer(init, resolveTast(0))).toEqual({
      user: 'user',
      todoList: [
        { task: 'Testing task', createAt: new Date(100), resolved: true }
      ]
    });
  });
});
