import React, { useState } from "react";
import CardRetailList from "./card/CardRetailList";
import CardWholesaleList from "./card/CardWholesaleList";

const Categories = () => {
  const [catName, setCatName] = useState({
    name: "Retails",
    body: <CardRetailList />,
  });
  const handleClick = () => {
    catName.name === "Retails"
      ? setCatName({ name: "Wholesales", body: <CardWholesaleList /> })
      : setCatName({ name: "Retails", body: <CardRetailList /> });
  };
  return (
    <>
      <div id="categories">
        <div className="container">
          <div className="title">
            <i
              onClick={handleClick}
              className="bi bi-chevron-left"
              style={{ fontSize: "30px" }}
            ></i>
            <div className="cat-text">
              <h1>{catName.name}</h1>
              <div className="underline"></div>
            </div>
            <i
              onClick={handleClick}
              className="bi bi-chevron-right"
              style={{ fontSize: "30px" }}
            ></i>
          </div>
          <div className="gallery">{catName.body}</div>
        </div>
      </div>
    </>
  );
};

export default Categories;
