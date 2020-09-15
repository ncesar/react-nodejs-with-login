import React from 'react';
import { render } from '@testing-library/react';
import { Content } from './index';

describe('Content component', () => {
  it('should render Content with children', () => {
    const { getByTestId } = render(
      <Content data-testid="Content">This is a children</Content>,
    );
    const el = getByTestId('Content');
    expect(el).toHaveTextContent('This is a children');
  });
});
