import React, { useState, useEffect } from "react";
import useCart from "../../store/cart-context";

import classes from "./StoreItem.module.css";

function StoreItem(props) {
  const { name, price, id } = props;
  const { products, addToCart, removeFromCart } = useCart();
  const [inCheckout, setInCheckout] = useState(false);

  useEffect(() => {
    const productIsInCart = products.find((product) => product.name === name);

    if (productIsInCart) {
      setInCheckout(true);
    } else {
      setInCheckout(false);
    }
  }, [products, name]);

  const clickHandler = () => {
    const product = { name, price, id };
    console.log(product);

    if (inCheckout) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className={classes.storeItem}>
      <div className={classes.storeImg}>
        <img src={props.imageUrl} alt="" />
      </div>
      <div className={classes.info}>
        <div>{props.name}</div>
        <div>{props.price}$</div>
        <button
          onClick={clickHandler}
          className={classes.addBtn}
          style={{ backgroundColor: `${inCheckout ? "green" : "red"}` }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default StoreItem;
