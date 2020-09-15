import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CloseIcon from '@material-ui/icons/Close';
import { TextInput } from './index';

describe('TextInput component', () => {
  it('should render TextInput with Icon', () => {
    const { container } = render(<TextInput icon={<CloseIcon />} />);
    expect(container.querySelector('svg')).not.toBe(null);
  });
  it('should render TextInput as a password field with type as password', () => {
    const { container } = render(<TextInput isPassword />);
    expect(container.querySelector('input')).toHaveAttribute(
      'type',
      'password',
    );
  });
  it('should render TextInput as a password field but change type to text on button click', () => {
    const { container } = render(<TextInput isPassword />);
    const iconButton = container.querySelector('.input-toggle');
    fireEvent.click(iconButton);
    expect(container.querySelector('input')).toHaveAttribute('type', 'text');
  });
});
