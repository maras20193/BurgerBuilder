import React from "react";
import burgerLogo from "../../assets/original.png";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={burgerLogo} alt="logo" />
      {/* <i class="fas fa-hamburger"></i> */}
    </div>
  );
};

export default Logo;
