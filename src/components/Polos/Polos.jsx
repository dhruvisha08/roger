import React from "react";
import ProductList from "../ProductList/ProductList";
import { POLOS_PRODUCT_LIST } from "../../data/polos";

const Polos = () => {
  return <ProductList productList={POLOS_PRODUCT_LIST} />;
};

export default Polos;
