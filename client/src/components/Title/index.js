import React from 'react';
import { StyledTitle } from './styled';

export const Title = (props) => {
  const { children, ...other } = props;
  return <StyledTitle {...other}>{children}</StyledTitle>;
};
