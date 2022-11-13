import React, { createContext, useContext, useState } from "react";

export const defaultValue = {
  isAuthenticated: false,
};

const UserContext = createContext(defaultValue);

export const UserWrapper = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    defaultValue.isAuthenticated
  );

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
