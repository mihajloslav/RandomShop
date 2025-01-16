import React from "react";
import "./style/NavBar.scss";

const NavBar = () => {
  return (
    <div className={"navbar-root"}>
      <ul className={"navbar-wrapper"}>
        <li>
          <a>SHOP</a>
        </li>
        <li className={"home-button"}>
          <a>HOME</a>
        </li>
        <li>
          <a>CART</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
