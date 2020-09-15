import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Loading } from '../components/Loading';

const PrivateRoute = (props) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authData = JSON.parse(localStorage.getItem('authData'));
  const { component: Component, ...rest } = props;

  useEffect(() => {
    const fetchData = () => {
      if (authData) {
        axios({
          method: 'post',
          url: `${process.env.REACT_APP_API_URL}auth`,
          headers: { 'content-type': 'application/json' },
          data: {
            email: authData.email,
            client_secret: authData.client_secret,
          },
        })
          .then(function (response) {
            setIsAuthenticated(true);
            setLoading(false);
          })
          .catch(function (error) {
            setIsAuthenticated(false);
            setLoading(false);
          });
      } else {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    fetchData();
  }, [authData]);

  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated ? (
          <Component {...props} />
        ) : loading ? (
          <Loading />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
