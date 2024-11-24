import React, { useState } from "react";
import "./ProductCard.css";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

function ProductCard({ image, name, details, price }) {
  const [favourite, setFavourite] = useState(true);
  const [showFeatures, setShowfeatures] = useState(false);

  function handleFavourite() {
    setFavourite(!favourite);
  }

  function handleFeatures() {
    setShowfeatures(!showFeatures);
  }

  return (
    <div className="container">
      <img
        style={{
          borderColor: favourite ? "black" : "red",
          border: "3px solid",
          width: "90%",
        }}
        src={image}
        alt="productImage"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "15px 15px 0 15px",
          fontSize: "20px",
        }}
        onClick={handleFavourite}
      >
        <h5>{name}</h5>
        {favourite ? <FaRegHeart /> : <FcLike />}
      </div>
      <h5 className="price">MRP: ₹{price}</h5>
      <p>{details}</p>
      <button onClick={handleFeatures} className="features">
        {showFeatures ? "Collapse" : "Expand"} Features
      </button>
      <ul
        style={{
          listStyle: "none",
          display: showFeatures ? "block" : "none",
        }}
      >
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
    </div>
  );
}

export default ProductCard;
