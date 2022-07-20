import React from "react";

const CardItem = (props) => {
  return (
    <div className="cardItem">
      <img
        src={process.env.PUBLIC_URL + props.img}
        alt="brand"
        height={"100%"}
        style={{ objectFit: "fill" }}
      />
      <div className="afterCard">
        <h5>Brand Name: {props.name}</h5>
        <h5>ID: {props.id}</h5>
        <h5>Price: {props.price}/-</h5>
        <h5>Quantity: {props.quantity}</h5>
      </div>
      <div className="hov">
        <button>VIEW</button>
      </div>
    </div>
  );
};

export default CardItem;
