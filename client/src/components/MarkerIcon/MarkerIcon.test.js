import React from 'react';
import { render } from '@testing-library/react';
import { MarkerIcon } from './index';

describe('MarkerIcon component', () => {
  it('should render MarkerIcon', () => {
    const { getByTestId } = render(<MarkerIcon data-testid="MarkerIcon" />);
    const el = getByTestId('MarkerIcon');
    expect(el).not.toBeNull();
  });
});
