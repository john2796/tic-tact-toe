import React from "react";

const Item = ({ itemList, history, match: { params } }) => {
  console.log(itemList);

  const item = itemList.find(item => item.id.toString() === params.id);
  if (!itemList) return <p>item not found</p>;
  return (
    <div className="item-wrapper">
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
    </div>
  );
};

export default Item;
