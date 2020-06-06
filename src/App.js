import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./conteiners/BurgerBuilder/BurgerBuilder";
import Checkout from "./conteiners/Checkout/Checkout";
import Orders from "./conteiners/Orders/Orders";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
