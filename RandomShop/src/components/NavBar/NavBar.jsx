import React from "react";
import "./style/NavBar.scss";

const NavBar = ({ setPage }) => {
  return (
    <div className="navbar-root">
      <ul className="navbar-wrapper">
        <li>
          <a onClick={() => setPage(1)}>SHOP</a>
        </li>
        <li className="home-button">
          <a onClick={() => setPage(0)}>HOME</a>
        </li>
        <li>
          <a onClick={() => setPage(2)}>CART</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
