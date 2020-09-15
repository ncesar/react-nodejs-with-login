import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {
  StyledContainer,
  StyledButton,
  StyledForm,
  StyledContentWrapper,
  StyledButtonWrapper,
  StyledErrorMessage,
} from './styled';
import EmailIcon from '../../assets/img/email-icon.svg';
import LockIcon from '../../assets/img/lock-icon.svg';
import { TextInput } from '../../components/TextInput';
import { Logo } from '../../components/Logo';
import { Loading } from '../../components/Loading';
import { Title } from '../../components/Title';

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const { email, client_secret } = event.target.elements;
    setLoading(true);
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}auth`,
      headers: { 'content-type': 'application/json' },
      data: { email: email.value, client_secret: client_secret.value },
    })
      .then(function (response) {
        const authData = {
          id_token: response.data.id_token,
          email: email.value,
          client_secret: client_secret.value,
        };
        console.log(response);
        localStorage.setItem('authData', JSON.stringify(authData));
        window.location.href = '/'; // with this, it works.
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      });
  };
  if (localStorage.getItem('authData')) {
    return <Redirect to="/" />;
  }
  const inputFields = [
    {
      autoComplete: 'email',
      autoFocus: true,
      name: 'email',
      required: true,
      fullWidth: true,
      margin: 'normal',
      id: 'email',
      placeholder: 'E-mail',
      type: 'email',
      icon: <img src={EmailIcon} className="input-icon" alt="E-mail icon" />,
      error: error,
    },
    {
      autoComplete: 'current-password',
      name: 'client_secret',
      required: true,
      fullWidth: true,
      margin: 'normal',
      placeholder: 'Token de acesso',
      id: 'client_secret',
      icon: <img src={LockIcon} className="input-icon" alt="Lock icon" />,
      error: error,
      isPassword: true,
    },
  ];

  return (
    <StyledContainer component="main" maxWidth="xs">
      {loading && <Loading />}
      <StyledContentWrapper>
        <Logo />
        <Title size="1.5rem" margin="4.188rem 0 0 0">
          BEM-VINDO
        </Title>
        <Title size="1.125rem" weight="normal" margin="1.281rem 0 0 0">
          Lorem ipsum dolor sit amet, contetur
          <br /> adipiscing elit. Nunc accumsan.
        </Title>
        <StyledForm onSubmit={onSubmitHandler}>
          {inputFields.map((field, index) => (
            <TextInput key={`${field.name}_${index}`} {...field} />
          ))}
          {error && (
            <StyledErrorMessage>
              Credenciais informadas são inválidas, tente novamente
            </StyledErrorMessage>
          )}
          <StyledButtonWrapper>
            <StyledButton
              type="submit"
              variant="contained"
              color="primary"
              error={error.toString()}
            >
              Entrar
            </StyledButton>
          </StyledButtonWrapper>
        </StyledForm>
      </StyledContentWrapper>
    </StyledContainer>
  );
};

export default Login;
