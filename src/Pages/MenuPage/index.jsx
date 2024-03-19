import React from "react";
import styles from "./styles.module.css";
import Description from "../../Components/Description/index.jsx";
import Logo from "../../Components/Logo/index.jsx";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Description />
      <Logo/>
    </div>
  );
};

export default MainPage;
