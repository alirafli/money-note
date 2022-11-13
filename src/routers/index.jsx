import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { UserWrapper } from "../context/UserContext";
import { Navbar } from "../components";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";
import NotFound from "../pages/NotFound";
import AuthRoute from "./AuthRoute";
import Register from "../pages/Register";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Routers = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <UserWrapper>
          <Routes>
            <Route element={<AuthRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route element={<Navbar />}>
                <Route path="/" element={<Homepage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Route>
          </Routes>
        </UserWrapper>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default Routers;
