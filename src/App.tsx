import React, { lazy } from 'react';
import { useAuth } from './context/auth-context';

const AuthenticatedApp = lazy(() => import('./authenticated-app'));
const UnAuthenticatedApp = lazy(() => import('./unauthenticated-app'));

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <React.Suspense fallback="loading">
      {isAuthenticated ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </React.Suspense>
  );
}

export default App;
