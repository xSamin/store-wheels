import React from "react";
import { PRODUCTS } from "../../productState";
import { Products } from "./products";
import './shop.css'

export const Shop = () =>{
    return(
        <div className="shop">
            <div className="shopTtile">
                <h1>
                    Samin Wheels
                </h1>
            </div>
            <div className="products">
                {PRODUCTS.map((products) => (
                    <Products data={products} />
                ))}
            </div>

        </div>
    )
     
}