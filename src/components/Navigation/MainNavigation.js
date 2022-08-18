import React from "react";
import { Link } from "react-router-dom";
import CartButton from "../ui/CartButton";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div className={classes.MainNavigation}>
      <Link to="/">
        <button className={classes.left}>React E-Commerce</button>
      </Link>
      <div className={classes.right}>
        <div className={classes.addProduct}>
          <Link to="/add-product" className={classes.linkAddProduct}>
            <button className={classes.addProduct}>Create Product</button>
          </Link>
        </div>
        <CartButton />
      </div>
    </div>
  );
}

export default MainNavigation;
