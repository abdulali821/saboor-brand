import React from "react";
import CardItem from "./CardItem";

const CardRetailList = () => {
  const img = "/images/brand.jpg";
  let array = [
    {
      name: "Ittehad",
      id: 1,
      price: 1000,
      quantity: 1,
    },
    {
      name: "Ittehad",
      id: 2,
      price: 1000,
      quantity: 1,
    },
    {
      name: "Ittehad",
      id: 3,
      price: 1000,
      quantity: 1,
    },
    {
      name: "Ittehad",
      id: 4,
      price: 1000,
      quantity: 1,
    },
  ];
  return (
    <div className="cardList">
      {array.map((card) => (
        <CardItem
          img={img}
          key={card.id}
          name={card.name}
          id={card.id}
          price={card.price}
          quantity={card.quantity}
        />
      ))}
    </div>
  );
};

export default CardRetailList;
