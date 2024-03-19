import React from "react";
import styles from "./styles.module.css";
import menuItems from "../../sources/menuItems.js";
import MenuItem from "../MenuItem/index.jsx"

const Header = () => {
  return (
    <header className={styles.header}>
      {menuItems.map(({title, path}, index) => {
        return <MenuItem key={index} title={title} path={path}/>;
      })}
    </header>
  );
};

export default Header;
