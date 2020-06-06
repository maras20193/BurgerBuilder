import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./conteiners/BurgerBuilder/BurgerBuilder";
import Checkout from "./conteiners/Checkout/Checkout";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
