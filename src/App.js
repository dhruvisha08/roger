import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ContainerRoutes from "./routes/ContainerRoutes.jsx";

function App() {
  return (
    <>
      {" "}
      <Header />
      <Navbar />
      <ContainerRoutes />
      <Footer />
    </>
  );
}

export default App;
