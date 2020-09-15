import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import Login from './layout/Login';

test('renders react router', () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router history={history}>
      <Login />
    </Router>,
  );
  expect(container).toHaveTextContent('BEM-VINDO');
});
