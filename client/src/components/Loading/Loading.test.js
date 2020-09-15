import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from './index';

describe('Loading component', () => {
  it('should render Loading', () => {
    const { getByTestId } = render(<Loading data-testid="loading" />);
    const el = getByTestId('loading');
    expect(el).not.toBeNull();
  });
});
