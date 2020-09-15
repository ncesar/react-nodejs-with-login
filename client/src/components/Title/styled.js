import styled, { css } from 'styled-components';

export const StyledTitle = styled.h2`
  text-align: center;
  color: var(--color-title);
  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size};
    `}
  ${(props) =>
    props.weight &&
    css`
      font-weight: ${props.weight};
    `}
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
`;
