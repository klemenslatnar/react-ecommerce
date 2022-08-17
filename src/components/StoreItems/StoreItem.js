import React, { useState } from "react";

import classes from "./StoreItem.module.css";

function StoreItem(props) {
  return (
    <div className={classes.storeItem}>
      <div className={classes.storeImg}>
        <img src={props.imageUrl} alt="" />
      </div>
      <div className={classes.info}>
        <div>{props.name}</div>
        <div>{props.price}$</div>
        <button className={classes.addBtn}>Add To Cart</button>
      </div>
    </div>
  );
}

export default StoreItem;
