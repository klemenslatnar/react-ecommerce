import React, { useContext, useEffect } from "react";
import ProductContext from "../../store/product-context";
import StoreItem from "./StoreItem";

import classes from "./StoreItemList.module.css";

function StoreItemList() {
  const productsCtx = useContext(ProductContext);

  return (
    <div className={classes.storeItemList}>
      {productsCtx.products.map((product) => {
        return (
          <StoreItem
            id={product.id}
            key={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default StoreItemList;
