import styled from 'styled-components';

export const StyledFieldWrapper = styled.div`
  position: relative;
  input {
    padding-left: 40px;
    font-size: 1.36rem;
    color: var(--color-input);
  }
  .error-icon {
    fill: var(--color-error);
    position: absolute;
    right: 3px;
    top: 22px;
    width: 1.8rem;
    height: 1.8rem;
  }
`;
