import React from "react";
import StoreItemList from "../StoreItems/StoreItemList";

import classes from "./Container.module.css";

function Container() {
  return (
    <div className={classes.container}>
      <StoreItemList />
    </div>
  );
}

export default Container;
