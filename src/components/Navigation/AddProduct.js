import React from "react";
import Layout from "../ui/Layout";
import MainNavigation from "./MainNavigation";

import classes from "./AddProduct.module.css";

function AddProduct() {
  return (
    <Layout>
      <header>
        <MainNavigation />
      </header>
      <div className={classes.formContainer}>
        <form className={classes.itemForm}>
          <input type="text" placeholder="Image Url" />
          <input type="text" placeholder="Item Name" />
          <input type="text" placeholder="Price" />
          <button className={classes.addBtn}>Add Item</button>
        </form>
      </div>
    </Layout>
  );
}

export default AddProduct;
