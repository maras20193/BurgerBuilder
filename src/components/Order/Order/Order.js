import React from "react";
import classes from "./Orders.module.css";

const Order = (props) => {
  return (
    <div className={classes.Order}>
      <p>Ingredients: </p>
      <p>
        Price: <strong>{props.price}$</strong>
      </p>
    </div>
  );
};

export default Order;
