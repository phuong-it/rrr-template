import React from 'react';
import client from '../utils/client';

interface AuthContextInterface {
  isAuthenticated: Boolean;
  login: Function;
  logout: Function;
}

interface AuthProviderOptions {}

const authContextDefault: AuthContextInterface = {
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
};

// Auth Context
const AuthContext =
  React.createContext<AuthContextInterface>(authContextDefault);

AuthContext.displayName = 'AuthContext';

// Auth Provider
const AuthProvider = (
  options: React.PropsWithChildren<AuthProviderOptions>
) => {
  const { children, ...props } = options;
  const [token, setToken] = React.useState('');

  React.useEffect(() => {
    // setToken('token');
  }, [])

  // Update token
  client.setToken(token);

  // Handle login
  const login = React.useCallback(() => {
    setToken('true');
  }, []);

  // Handle logout
  const logout = React.useCallback(() => {
    setToken('');
  }, []);

  const value = React.useMemo(() => {
    return {
      isAuthenticated: !!token,
      login,
      logout,
    };
  }, [login, logout, token]);

  return (
    <AuthContext.Provider value={value} {...props}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
