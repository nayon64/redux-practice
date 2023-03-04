import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/top",
      name: "Top Rates",
    },
    {
      path: "/booked",
      name: "Booked",
    },
  ];

  const menus = routes.map((route, i) => (
    <NavLink className="mx-2 py-1 px-2 bg-gray-400 text-white" key={i} to={route.path}>
      <li>{route.name}</li>
    </NavLink>
  ));

  return (
	  <nav className="flex justify-between max-w-6xl mx-auto py-4">
      <h1>Moon Market</h1>
      <ul className="flex">{menus}</ul>
    </nav>
  );
};

export default Navbar;
