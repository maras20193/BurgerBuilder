import React from "react";
import burgerLogo from "../../assets/original.png";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="logo" />
    </div>
  );
};

export default Logo;
