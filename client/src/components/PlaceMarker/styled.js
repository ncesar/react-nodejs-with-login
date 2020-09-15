import styled from 'styled-components';
import { List, ListItem } from '@material-ui/core';
import { Popup } from 'react-map-gl';

export const StyledPopupContentWrapper = styled(Popup)`
  && {
    padding: 2px;
    z-index: 99;
  }
`;
export const StyledPopupWrapper = styled(List)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  a {
    text-decoration: none;
  }
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
export const StyledPopupListItem = styled(ListItem)`
  && {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
  }
`;
export const StyledLink = styled.a`
  text-decoration: none;
`;
export const StyledWorkingTime = styled.p`
  white-space: break-spaces;
  font-size: 13px;
  line-height: 16px;
  text-transform: capitalize;
  margin: 0;
`;
