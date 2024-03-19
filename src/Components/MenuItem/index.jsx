import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

const MenuItem = ({ title, path }) => {
  return <NavLink to={`${path}`} className="menuItem">{title}</NavLink>
};

export default MenuItem;
