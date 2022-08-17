import React from "react";

import classes from "./StoreItem.module.css";

function StoreItem(props) {
  return (
    <div className={classes.storeItem}>
      <div className={classes.storeImg}>
        <img src={props.imageUrl} alt="" />
      </div>
      <br />
      <div className={classes.itemInfo}>
        <div>{props.name}</div>
        <div>{props.price}$</div>
      </div>
    </div>
  );
}

export default StoreItem;
