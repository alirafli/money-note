import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Text } from "../../components";

const Homepage = () => {
  return (
    <div className="pt-20">
      <div className="">
        <Link to="/informasi-keuangan" className="mx-5">Informasi Keuangan</Link>
        <Link to="/grafik-keuangan" className="mx-5">grafik Keuangan</Link>
        <Link to="/kalkulasi-keuangan" className="mx-5">Kalkulasi Keuangan</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Homepage;
