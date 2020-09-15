import styled from 'styled-components';
import MuiAlert from '@material-ui/lab/Alert';
import { GeolocateControl } from 'react-map-gl';

export const StyledInputWrapper = styled.form`
  position: absolute;
  top: 80px;
  z-index: 2;
  left: 10px;
  background-color: var(--color-bg);
  border-radius: 4px;
  display: inline-flex;
  padding: 8px;
  max-width: 170px;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  svg {
    cursor: pointer;
    color: var(--color-svg-home);
  }
`;
export const StyledGeolocateControl = styled(GeolocateControl)`
  display: inline-flex;
  width: auto;
  position: absolute;
  right: 8px;
  bottom: 35px;
  @media (max-width: 768px) {
    bottom: 80px;
  }
`;
export const StyledAlert = styled(MuiAlert)`
  position: absolute;
  z-index: 88;
  right: 0;
  margin-top: 17px;
  margin-right: 10px;
  @media (max-width: 768px) {
    margin: 87px 5px 0 5px;
  }
`;
