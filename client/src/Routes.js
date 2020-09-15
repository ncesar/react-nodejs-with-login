import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Login from './layout/Login';
import PrivateRoute from './auth/PrivateRoute';
import Homepage from './layout/Homepage';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Homepage} />
    </Router>
  );
}

export default App;
