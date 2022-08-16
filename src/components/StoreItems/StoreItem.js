import React from "react";

import classes from "./StoreItem.module.css";

function StoreItem() {
  return (
    <div className={classes.storeItem}>
      <div className={classes.storeImg}>
        <img
          src="https://images.unsplash.com/photo-1660562924547-71ba91ccc4b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <br />
      <div className={classes.itemInfo}>
        <div>Floaties</div>
        <div>34.99$</div>
      </div>
    </div>
  );
}

export default StoreItem;
