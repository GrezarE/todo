import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Login } from './login';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('Login', () => {
  it('login', () => {
    const store = mockStore({
      todo: {
        user: '',
        todoList: []
      }
    });
    const login = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const box = screen.getByTestId('login');
    expect(box).toBeInTheDocument();
    expect(login).toMatchSnapshot();
  });
});
