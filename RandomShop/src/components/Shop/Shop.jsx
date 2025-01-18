import React, { useContext } from "react";
import "./style/Shop.scss";
import Product from "../Product/Product";
import { products } from "../../util/products";
import { CartContext } from "../../contexts/CartContextProvider";

const Shop = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="shop-root">
      <div className="shop-wrapper">
        <div className="cart-icon">
          <img
            className="cart-icon-image"
            src="./cart-icon.svg"
            alt="cart icon"
          />
          <p className="cart-count">{totalItems}</p>
        </div>
        <div className="center-wrapper">
          <p className="our-products">Our products:</p>
          <div className="shop-body">
            {products.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
