import React, { useState } from 'react';
import { Marker } from 'react-map-gl';
import { MarkerIcon } from '../MarkerIcon';
import { Title } from '../Title';
import {
  StyledPopupWrapper,
  StyledPopupListItem,
  StyledPopupContentWrapper,
  StyledLink,
  StyledWorkingTime,
} from './styled';

export const PlaceMarker = (props) => {
  const {
    viewport,
    latitude,
    longitude,
    id,
    address,
    phone,
    title,
    workingTime,
    distance,
    complement,
    neighborhood,
    photo,
    ...other
  } = props;
  const [showPopup, setShowPopup] = useState({});

  const showSVGIcon = (entryId) => {
    setShowPopup({ [entryId]: true });
  };
  const formatPhoneNumber = (phoneNumberString) => {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  };
  const formatWorkingTime = (workingTime) => {
    let days = '';
    for (let day in workingTime) {
      days += `${day}: ${workingTime[day]}\n`;
    }
    return days;
  };
  const primaryTitleProps = {
    color: 'rgb(108,108,108)',
    size: '14px',
    weight: 'normal',
    margin: '0',
    align: 'left',
  };
  const secondaryTitleProps = {
    color: '#232222',
    weight: '500',
    size: '16px',
    margin: '0',
    align: 'left',
  };

  return (
    <React.Fragment {...other}>
      <Marker latitude={latitude} longitude={longitude}>
        <MarkerIcon
          className="marker"
          viewport={viewport}
          onClick={() => showSVGIcon(id)}
        />
      </Marker>
      {showPopup[id] && (
        <StyledPopupContentWrapper
          className="popup2"
          latitude={latitude}
          longitude={longitude}
          closeButton={true}
          closeOnClick={false}
          dynamicPosition={true}
          onClose={() => setShowPopup({})}
          anchor="top"
        >
          <StyledPopupWrapper className="popup">
            <StyledPopupListItem button>
              <Title margin="0">{title}</Title>
              <StyledLink
                href={`https://www.google.com.br/maps/search/${title}+${address}/@${latitude},${longitude},17z`}
                target="_blank"
              >
                <Title {...primaryTitleProps}>
                  Clique para abrir no Google Maps
                </Title>
              </StyledLink>
            </StyledPopupListItem>
            <StyledPopupListItem button>
              <Title {...primaryTitleProps}>Endereço:</Title>
              <Title {...secondaryTitleProps}>{address}</Title>
              <Title {...secondaryTitleProps}>Bairro: {neighborhood}</Title>
            </StyledPopupListItem>
            <StyledPopupListItem button>
              <Title {...primaryTitleProps}>Telefone:</Title>
              <a href={`tel:+${phone}`}>
                <Title {...secondaryTitleProps}>
                  {formatPhoneNumber(phone)}
                </Title>
              </a>
            </StyledPopupListItem>
            <StyledPopupListItem button>
              <Title {...primaryTitleProps}>Distância do CEP origem:</Title>
              <Title {...secondaryTitleProps}>{distance}</Title>
            </StyledPopupListItem>
            <StyledPopupListItem button>
              <Title {...primaryTitleProps}>Horário de funcionamento:</Title>
              <StyledWorkingTime>
                {formatWorkingTime(workingTime)}
              </StyledWorkingTime>
            </StyledPopupListItem>
            {complement && (
              <StyledPopupListItem button>
                <Title {...primaryTitleProps}>Complemento:</Title>
                <Title {...secondaryTitleProps}>{complement}</Title>
              </StyledPopupListItem>
            )}
          </StyledPopupWrapper>
        </StyledPopupContentWrapper>
      )}
    </React.Fragment>
  );
};
