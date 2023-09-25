import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";


export const Products = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext)

  const cartItemAmount = cartItems[id]
  return (
    <div className="productss">
      <img src={productImage} alt="Cars" />
      <div className="description">
        <p className="productName"><b>{productName}</b> </p> {/* Corrected variable name */}
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

