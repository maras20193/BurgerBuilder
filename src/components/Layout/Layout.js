import React from "react";
import classes from "./Layouts.module.css";

const Layout = (props) => {
  return (
    <>
      <div>Toolbar, Sidebar, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </>
  );
};

export default Layout;
