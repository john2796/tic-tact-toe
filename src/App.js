import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./component/Home";
import Shop from "./component/Shop";
import styled from "styled-components";
import Item from "./component/Item";
import data from "./data";

const AppStyle = styled.div`
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    a {
      margin-right: 20px;
      text-decoration: none;
      color: black;
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: data
    };
  }

  render() {
    return (
      <Router>
        <AppStyle>
          <nav>
            <NavLink exact activeStyle={{ color: "#72B9C8" }} to="/">
              Home
            </NavLink>
            <NavLink activeStyle={{ color: "#72B9C8" }} to="/shop">
              Shop
            </NavLink>
          </nav>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/shop"
            render={props => <Shop {...props} itemList={this.state.item} />}
          />
          <Route
            path="/shop/:id"
            render={props => <Item {...props} itemList={this.state.item} />}
          />
        </AppStyle>
      </Router>
    );
  }
}

export default App;
