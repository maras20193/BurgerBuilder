import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    adress: {
      street: "",
      postalCOde: "",
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();

    // this.setState({
    //   loading: true,
    // });
    // const order = {
    //   ingredients: this.props.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Lucas",
    //     address: {
    //       street: "Lakowa",
    //       zipCode: "59300",
    //       country: "Poland",
    //     },
    //     email: "lucas@gmail.com",
    //   },
    //   deliveryMethod: "fastest",
    // };
    // axiosInstance
    //   .post("/orders.json", order)
    //   .then((response) => this.setState({ loading: false, purchasing: false }))
    //   .catch((error) => this.setState({ loading: false, purchasing: false }));
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Your name"
          />
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Your Mail"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className={classes.Input}
            type="text"
            name="postal"
            placeholder="Postal Code"
          />
        </form>
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </div>
    );
  }
}

export default ContactData;
