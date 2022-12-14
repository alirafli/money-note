import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const AuthRoute = () => {
  const { isAuthenticated } = useUserContext();

  if (isAuthenticated) {
    return <Navigate to="/informasi-keuangan" />;
  }

  return <Outlet />;
};

export default AuthRoute;
