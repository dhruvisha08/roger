import React from "react";
import ProductContext from "../../context/productContext";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { PRODUCT_SIZE } from "../../shared/constants";
import "./product.scss";

const Product = () => {
  const [quantity, setQuantity] = React.useState(1);

  const updateQuantity = (action) => {
    switch (action) {
      case "remove":
        if (quantity > 0) {
          setQuantity(quantity - 1);
        }
        break;
      case "add":
        setQuantity(quantity + 1);
        break;
    }
  };

  const { product } = React.useContext(ProductContext);
  return (
    <div className="product-container row">
      <div className="product-image-container col-lg-5">PRODUCT IMAGES</div>
      <div className="product-details-container col-lg-7">
        <div className="product-name">
          <h1>{product.name}</h1>
        </div>
        <div className="product-description">{product.description}</div>
        <div className="product-size-container mt-4 d-flex">
          {PRODUCT_SIZE.map((size) => {
            return <div className="product-size">{size}</div>;
          })}
        </div>
        <div className="product-price-container mt-4">
          <div className="product-price-title">PRICE</div>
          <div className="product-price">
            <FaIndianRupeeSign /> {product.price}.00
          </div>
        </div>
        <div className="product-quantity-container mt-4">
          <div className="product-quantity-title">QUANTITY</div>
          <div className="quantity-button d-flex mt-2">
            <button
              className="quantity-cta mr-4"
              onClick={() => {
                updateQuantity("remove");
              }}
            >
              -
            </button>
            <div className="quantity">{quantity}</div>
            <button
              className="quantity-cta ml-4"
              onClick={() => {
                updateQuantity("add");
              }}
            >
              +
            </button>
          </div>
        </div>
        <button className="add-to-cart-cta">ADD TO CART</button>
      </div>
    </div>
  );
};

export default Product;
