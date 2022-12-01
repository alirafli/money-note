import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { UserWrapper } from "../context/UserContext";
import { Navbar } from "../components";
import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "./AuthRoute";

//pages
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Artikel from "../pages/Artikel";
import TentangKami from "../pages/TentangKami";
import Informasi from "../pages/Keuangan/Informasi";
import Kalkulasi from "../pages/Keuangan/Kalkulasi";
import Grafik from "../pages/Keuangan/Grafik";

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
                <Route path="/dashboard" element={<Homepage />}>
                  <Route path="informasi-keuangan" element={<Informasi />} />
                  <Route path="grafik-keuangan" element={<Grafik />} />
                  <Route path="kalkulasi-keuangan" element={<Kalkulasi />} />
                </Route>
                <Route path="/artikel" element={<Artikel />} />
                <Route path="/tentang-kami" element={<TentangKami />} />
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
