import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { Text } from "../../components";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Informasi Keuangan", href: "informasi-keuangan" },
  { name: "grafik Keuangan", href: "grafik-keuangan" },
  { name: "Rekap Keuangan", href: "rekap-keuangan" },
];

const Homepage = () => {
  return (
    <div className="pt-20">
      <nav className="mb-20 bg-gray-300 w-fit mx-auto p-5 rounded-full">
        {navigation.map((data, key) => (
          <NavLink
            to={data.href}
            className={({ isActive }) => {
              return classNames(
                isActive
                  ? "font-medium text-black bg-slate-400"
                  : "font-normal text-black hover:text-gray-500",
                "px-10 py-2 rounded-md text-lg"
              );
            }}
            key={key}
          >
            {data.name}
          </NavLink>
        ))}
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Homepage;
