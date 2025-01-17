import React from "react";
import "./style/NavBar.scss";

const NavBar = ({ page, setPage }) => {
  return (
    <div className="navbar-root">
      <ul className="navbar-wrapper">
        <li>
          <a
            className={page === 1 ? "underline" : ""}
            onClick={() => setPage(1)}
          >
            SHOP
          </a>
        </li>
        <li className="home-button">
          <a
            className={page === 0 ? "underline" : ""}
            onClick={() => setPage(0)}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            className={page === 2 ? "underline" : ""}
            onClick={() => setPage(2)}
          >
            CART
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
