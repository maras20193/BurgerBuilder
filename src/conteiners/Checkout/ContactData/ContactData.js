import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axiosInstance from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

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

    this.setState({
      loading: true,
    });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Lucas",
        address: {
          street: "Lakowa",
          zipCode: "59300",
          country: "Poland",
        },
        email: "lucas@gmail.com",
      },
      deliveryMethod: "fastest",
    };
    axiosInstance
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => this.setState({ loading: false }));
  };

  render() {
    let form = (
      <>
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
      </>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <>
        <div className={classes.ContactData}>
          <h4>Enter Your Contact Data</h4>
          {form}
        </div>
      </>
    );
  }
}

export default ContactData;
