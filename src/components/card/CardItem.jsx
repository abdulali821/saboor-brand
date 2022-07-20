import React from "react";

const CardItem = (props) => {
  return (
    <div className="cardItem">
      <div className="afterCard">
        <h4>Brand Name: {props.name}</h4>
        <h4>ID: {props.id}</h4>
        <h4>Price: {props.price}/-</h4>
      </div>
      <div className="hov">
        <button>VIEW</button>
      </div>
    </div>
  );
};

export default CardItem;
