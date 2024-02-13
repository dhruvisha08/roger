import React from "react";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ContainerRoutes from "./routes/ContainerRoutes.jsx";
import ProductContext from "./context/productContext.jsx";

function App() {
  const [product, setProduct] = React.useState();
  return (
    <>
      <ProductContext.Provider
        value={{
          product,
          setProduct,
        }}
      >
        <Header />
        <Navbar />
        <ContainerRoutes />
        <Footer />
      </ProductContext.Provider>
    </>
  );
}

export default App;
