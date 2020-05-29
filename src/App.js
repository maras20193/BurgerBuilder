import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./conteiners/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    );
  }
}

export default App;
