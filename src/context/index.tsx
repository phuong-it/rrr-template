import React from 'react';
import { Router } from 'react-router-dom';
import history from '../utils/history';
import { AuthProvider } from './auth-context';

const AppProvider = (props: React.PropsWithChildren<any>) => {
  return (
    <Router history={history}>
      <AuthProvider>{props.children}</AuthProvider>
    </Router>
  );
};

export { AppProvider };
