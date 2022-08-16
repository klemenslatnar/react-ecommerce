import React from "react";
import StoreItem from "./StoreItem";

import classes from "./StoreItemList.module.css";

function StoreItemList() {
  return (
    <div className={classes.storeItemList}>
      <StoreItem />
      <StoreItem />
      

    </div>
  );
}

export default StoreItemList;
