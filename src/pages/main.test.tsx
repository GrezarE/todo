import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Main } from './main';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('Main', () => {
  it('main', () => {
    const store = mockStore({
      todo: {
        user: 'user',
        todoList: []
      }
    });

    const main = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const box = screen.getByTestId('main');
    expect(main).toMatchSnapshot();
    expect(box).toBeInTheDocument();
  });
});
