import React from "react";
import "./productList.scss";
import { FaIndianRupeeSign } from "react-icons/fa6";

const ProductList = ({ productList }) => {
  return (
    <div className="product-list-container row">
      {productList.map((product) => {
        return (
          <div
            className="col-12 col-sm-6 col-lg-4 product-container mb-4"
            key={product.id}
          >
            <div className="card mb-2">
              <img src={product.images[0]} />
            </div>
            <div className="product-name">{product.name}</div>
            <div className="product-description">{product.description}</div>
            <div className="product-price">
              MRP: <FaIndianRupeeSign /> {product.price}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
