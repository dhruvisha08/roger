import React from "react";
import { Route, Routes } from "react-router-dom";
import Introduction from "../components/Introduction/Introduction";
import Shoes from "../components/Shoes/Shoes";
import Polos from "../components/Polos/Polos";

const ContainerRoutes = () => {
  return (
    <Routes>
    <Route path="/roger" element={<Introduction />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/new-arrivals" element={<Introduction />} />
      <Route path="/active-wear" element={<Polos />} />
    </Routes>
  );
};

export default ContainerRoutes;
