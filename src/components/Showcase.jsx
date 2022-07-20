import React from "react";

const Showcase = () => {
  return (
    <div id="showcase">
      <div className="container">
        <div className="showcase-text">
          <h1>Raining Offers For Hot Summer!</h1>
          <h3>25% Off On All Products</h3>
          <div className="btn">
            <button>Shop Now</button>
            <a href="#categories">
              <button>View More</button>
            </a>
          </div>
        </div>
        <div className="showcase-image"></div>
      </div>
    </div>
  );
};

export default Showcase;
