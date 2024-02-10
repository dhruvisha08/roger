import React from "react";
import ProductList from "../ProductList/ProductList";
import { SHOES_PRODUCT_LIST } from "../../data/shoes";

const Shoes = () => {
  return <ProductList productList={SHOES_PRODUCT_LIST} />;
};

export default Shoes;
