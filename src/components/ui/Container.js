import React, { useEffect, useContext } from "react";
import ProductContext from "../../store/product-context";
import StoreItemList from "../StoreItems/StoreItemList";

import classes from "./Container.module.css";

function Container() {
  const productsCtx = useContext(ProductContext);

  useEffect(() => {
    productsCtx.getItems();
  }, []);

  return (
    <div className={classes.container}>
      <StoreItemList />
    </div>
  );
}

export default Container;
