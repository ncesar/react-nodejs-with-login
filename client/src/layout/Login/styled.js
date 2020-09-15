import styled, { css } from 'styled-components';
import { Button, Container } from '@material-ui/core';

export const StyledContainer = styled(Container)`
  margin-top: 4rem;
`;
export const StyledContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const StyledForm = styled.form`
  width: 100%;
  margin-top: 1.734rem;
  .input-icon {
    position: absolute;
    left: 0;
    top: 20px;
    width: 1.625rem;
    height: 1.625rem;
  }
`;
export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledButton = styled(Button)`
  background: var(--color-loading);
  width: 20.25rem;
  height: 3.3rem;
  margin: 40px 0 0;
  border-radius: 3.6px;
  font-weight: bold;
  font-size: 1.125rem;
  ${(props) =>
    props.error &&
    css`
      margin: 0;
    `}
`;
export const StyledErrorMessage = styled.span`
  color: var(--color-error);
  font-size: 0.76rem;
  display: flex;
  justify-content: center;
  font-weight: bold;
  margin: 0.813rem 0 0.825rem 0;
`;
