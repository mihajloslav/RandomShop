import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import "./style/Cart.scss";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-root">
      <div className="cart-wrapper">
        <p className="your-products">Your products:</p>
        {cart.length === 0 ? (
          <div className="empty-wrapper">
            <p>Your Cart is Empty</p>
          </div>
        ) : (
          <ul className="cart-list">
            {cart.map((product) => (
              <li key={product.id} className="cart-item">
                <img
                  src={product.imgUrl}
                  alt={product.naziv}
                  className="cart-img"
                />
                <div className="cart-details">
                  <p className="cart-name">{product.naziv}</p>
                  <p className="cart-price">{product.cena} rsd</p>
                </div>
                <div className="cart-quantity">
                  <button
                    onClick={() => addToCart(product)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                  <p className="quantity">{product.quantity}</p>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
