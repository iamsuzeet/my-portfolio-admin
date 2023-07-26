'use client';

import React, { useContext, useMemo, useState } from 'react';

interface IAuthContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = React.createContext<IAuthContextProps>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const contextValue = useMemo(() => {
    return { isAuthenticated, setIsAuthenticated };
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
