import React, { Component } from "react";
import Button from "./../../UI/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("order summary update");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <>
        <h3>Your Order</h3>
        <p>Delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <strong>Total Price: {this.props.price.toFixed(2)}$</strong>
        <p>Continue to Checkaout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancel}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </>
    );
  }
}

export default OrderSummary;
