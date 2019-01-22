import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ShopStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .item_name {
    text-align: center;
    display: block;
  }
`;

const Shop = ({ itemList }) => {
  return (
    <ShopStyle className="items-list-wrapper">
      {itemList.map(item => (
        <div className="item-card" key={item.id}>
          <img
            className="item-list-image"
            src={item.imageUrl}
            alt={item.name}
          />
          <Link to={`/shop/${item.id}`} className="item_name">
            {item.name}
          </Link>
          <p>${item.price}</p>
        </div>
      ))}
    </ShopStyle>
  );
};

export default Shop;
