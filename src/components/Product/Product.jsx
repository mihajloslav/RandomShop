import React, { useContext, useState } from "react";
import "./style/Product.scss";
import { CartContext } from "../../contexts/CartContextProvider";

const Product = ({ data }) => {
  const { addToCart } = useContext(CartContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const cartAction = () => {
    setIsAddedToCart(true);
    addToCart(data);
  };

  return (
    <div className="product-card">
      <img src={data.imgUrl} alt="Product" className="product-image" />
      <p className="product-name">{data.naziv}</p>
      <p className="product-price">{data.cena} rsd</p>
      <button onClick={cartAction} className="add-to-cart">
        Dodaj u korpu
      </button>
    </div>
  );
};

export default Product;
