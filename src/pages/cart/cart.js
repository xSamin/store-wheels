import React, { useContext } from "react";
import { PRODUCTS } from "../../productState";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cartItem";
import "./cart.css"





export const Cart = () => {
    const { cartItems , getTottalCartAmount } = useContext(ShopContext)
    const totalAmount = getTottalCartAmount()

    return (

        <div className="cart">
            <div>
                <h1>Your items</h1>
            </div>

            <div className="cartItems">
                {PRODUCTS.map((products) => {
                    if (cartItems[products.id] !== 0) {
                        return <CartItem data={products} />
                    }
                })}
            </div>
            <div className="checkout">
                <p>Subtotal: ${totalAmount}</p>
                <button> Countinue Shopping</button>
                <button> Checkout</button>
            </div>
            

        </div>
    )
}