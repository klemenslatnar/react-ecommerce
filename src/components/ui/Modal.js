import React, { useState } from "react";
import useCart from "../../store/cart-context";

import classes from "./Modal.module.css";

function Modal(props) {
  const { total, products, orderItems, removeFromCart } = useCart();
  const [order, setOrder] = useState(products);

  const orderHandler = () => {
    while (products.length > 0) {
      products.pop();
    }

    setOrder((prevState) => {
      return [...prevState, ...products];
    });

    orderItems();

    console.log(products, total);
  };

  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.modalHead}>Cart Items</div>
        <div className={classes.modalBody}>
          {order.map((product) => {
            return (
              <div key={Math.random()} className={classes.cartItem}>
                <p>{product.name}</p>
                <p>{product.price}$</p>
              </div>
            );
          })}
        </div>
        <div className={classes.modalFooter}>
          <div>Total: {total}$</div>
          <button className={classes.orderBtn} onClick={orderHandler}>
            Order
          </button>
          <button className={classes.closeBtn} onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
