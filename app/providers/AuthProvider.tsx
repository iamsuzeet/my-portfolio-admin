'use client';

import React, { useContext, useEffect, useMemo, useState } from 'react';

interface IAuthContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  isAuthenticating: boolean;
  setIsAuthenticating: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = React.createContext<IAuthContextProps>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  isAuthenticating: false,
  setIsAuthenticating: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    setIsAuthenticating(false);
  }, []);

  const contextValue = useMemo(() => {
    return {
      isAuthenticated,
      setIsAuthenticated,
      isAuthenticating,
      setIsAuthenticating,
    };
  }, [isAuthenticated, isAuthenticating]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
