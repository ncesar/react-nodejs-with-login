import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from './index';

describe('Logo component', () => {
  it('should render normal Logo', () => {
    const { getByTestId } = render(<Logo data-testid="logo" />);
    const el = getByTestId('logo');
    expect(el).not.toBeNull();
  });
});
