import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ContainerRoutes from "./routes/ContainerRoutes.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <ContainerRoutes />
      {/* <Banner /> */}
      {/* <Introduction /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
