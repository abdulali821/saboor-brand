import React from "react";
import CardItem from "./CardItem";

const CardRetailList = () => {
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
    {
      name: "Ittehad",
      id: 5,
      price: 1000,
      quantity: 1,
    },
    {
      name: "Ittehad",
      id: 6,
      price: 1000,
      quantity: 1,
    },
    {
      name: "Ittehad",
      id: 7,
      price: 1000,
      quantity: 1,
    },
    {
      name: "Ittehad",
      id: 7,
      price: 1000,
      quantity: 1,
    },
    {
      name: "Ittehad",
      id: 8,
      price: 1000,
      quantity: 1,
    },
    {
      name: "Ittehad",
      id: 9,
      price: 1000,
      quantity: 1,
    },
  ];
  return (
    <div className="cardList">
      {array.map((card) => (
        <CardItem
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
