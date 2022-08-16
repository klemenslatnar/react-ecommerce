import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div className={classes.MainNavigation}>
      <Link to="/">
        <button className={classes.left}>React E-Commerce</button>
      </Link>
      <div className={classes.right}>
        <Link to="/add-product">
          <button className={classes.addProduct}>Add Product</button>
        </Link>
        <button className={classes.cartBtn}>Cart 🛒</button>
      </div>
    </div>
  );
}

export default MainNavigation;
