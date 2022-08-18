import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import useCart from "../../store/cart-context";

import classes from "./StoreItem.module.css";

function StoreItem(props) {
  const { name, price } = props;
  const { products, addToCart, removeFromCart } = useCart();

  const clickHandler = () => {
    const product = { name, price };
    console.log(product)

    addToCart(product);
  };

  return (
    <div className={classes.storeItem}>
      <div className={classes.storeImg}>
        <img src={props.imageUrl} alt="" />
      </div>
      <div className={classes.info}>
        <div>{props.name}</div>
        <div>{props.price}$</div>
        <button onClick={clickHandler} className={classes.addBtn}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default StoreItem;
