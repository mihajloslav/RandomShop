import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart"; // Dodaj ovu komponentu ako nije već dodata

const App = () => {
  const [page, setPage] = useState(0); // 0 = Home, 1 = Shop, 2 = Cart

  return (
    <div className="app-root">
      <NavBar setPage={setPage} /> {/* Prosleđujemo setPage kao prop */}
      {page === 0 && <Home />}
      {page === 1 && <Shop />}
      {page === 2 && <Cart />}
      <Footer />
    </div>
  );
};

export default App;
