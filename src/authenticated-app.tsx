import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home';

const AuthenticatedApp = () => {
  return (
    <div>
      <AppRoutes />
    </div>
  );
};

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
}

export default AuthenticatedApp;
