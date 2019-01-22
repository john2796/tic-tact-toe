import React from "react";
import { Route, NavLink } from "react-router-dom";
import Story from "./Story";
import Shipping from "./Shipping";
import styled from "styled-components";

const ItemStyle = styled.div`
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
      text-decoration: none;
      color: black;
    }
  }
`;

const Item = ({ itemList, history, match: { params } }) => {
  const item = itemList.find(item => item.id.toString() === params.id);
  if (!itemList) return <p>item not found</p>;
  return (
    <ItemStyle className="item-wrapper">
      <h1 onClick={() => history.goBack()} style={{ cursor: "pointer" }}>
        {" "}
        go Back
      </h1>
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>
      <nav className="item-sub-nav">
        <div>
          <NavLink
            exact
            to={`/shop/${item.id}`}
            activeStyle={{ color: "#72B9C8" }}
          >
            the story
          </NavLink>
          <NavLink
            activeStyle={{ color: "#72B9C8" }}
            to={`/shop/${item.id}/shipping`}
          >
            shipping
          </NavLink>
        </div>
        <Route
          exact
          path={`/shop/${item.id}`}
          render={props => <Story {...props} item={item} />}
        />
        <Route
          path={`/shop/${item.id}/shipping`}
          render={props => <Shipping {...props} item={item} />}
        />
      </nav>
    </ItemStyle>
  );
};

export default Item;
