import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div className="app-root">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
