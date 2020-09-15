import React, { useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl';
import axios from 'axios';
import { Button, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {
  StyledInputWrapper,
  StyledGeolocateControl,
  StyledAlert,
} from './styled';
import { Content } from '../../components/Content';
import { TextMaskCustom } from '../../components/TextMaskCustom';
import { PlaceMarker } from '../../components/PlaceMarker';
import { Loading } from '../../components/Loading';
import { HomepageContext } from './HomepageContext';

const Homepage = () => {
  const [viewport, setViewport] = useState({
    latitude: -26.914762,
    longitude: -49.081432,
    zoom: 14,
  });
  const [cep, setCep] = useState('');
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport((viewport) => ({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      }));
    });
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    const authData = JSON.parse(localStorage.getItem('authData'));
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}places`,
      headers: { 'content-type': 'application/json' },
      data: {
        cep,
        access_token: authData.id_token,
      },
    })
      .then(function (response) {
        setPlaces(response.data.results);
        setViewport({
          latitude: parseInt(response.data.results[0].latitude),
          longitude: parseInt(response.data.results[0].longitude),
          zoom: 8,
        });
        setError(false);
        setLoading(false);
      })
      .catch(function (error) {
        setPlaces([]);
        setError(true);
        setLoading(false);
      });
  };
  const homepageContext = {
    places,
    cep,
  };
  const onChangeHandler = (event, hook) => {
    hook(event.target.value);
  };
  return (
    <HomepageContext.Provider value={homepageContext}>
      <Content title="Pesquisa de pontos por CEP">
        {loading && <Loading />}
        {error && (
          <StyledAlert severity="error">
            Não localizamos pontos em sua região, tente com outro CEP.
          </StyledAlert>
        )}
        <StyledInputWrapper onSubmit={onSubmitHandler}>
          <Input
            name="cep"
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
            disableUnderline
            error={error}
            value={cep}
            onChange={(event) => onChangeHandler(event, setCep)}
          />
          <Button type="submit" size="small">
            <SearchIcon />
          </Button>
        </StyledInputWrapper>
        <ReactMapGL
          {...viewport}
          onViewportChange={setViewport}
          width="100%"
          height="90vh"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/ceesar90/ckf2yznha06o719rxvkmd8gwm"
        >
          <StyledGeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
            fitBoundsOptions={{ maxZoom: viewport.zoom }}
          />
          {places.length > 0 &&
            places.map((place, index) => (
              <PlaceMarker
                key={`${place.id}_${index}`}
                id={place.id}
                viewport={14}
                latitude={parseFloat(place.latitude)}
                longitude={parseFloat(place.longitude)}
                title={place.nome_fantasia}
                address={`${place.endereco}, ${place.numero} - ${place.estado} ${place.cep}`}
                neighborhood={`${place.bairro} - ${place.cidade}`}
                phone={place.telefone}
                photo={place.foto}
                distance={place.distancia}
                complement={place.complement}
                workingTime={place.horario_funcionamento}
              />
            ))}
        </ReactMapGL>
      </Content>
    </HomepageContext.Provider>
  );
};

export default Homepage;
