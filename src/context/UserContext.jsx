import React, { createContext, useContext, useState } from "react";

export const defaultValue = {
  isAuthenticated: !!localStorage.getItem("token"),
};

const UserContext = createContext(defaultValue);

export const UserWrapper = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    defaultValue.isAuthenticated
  );

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };
  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
