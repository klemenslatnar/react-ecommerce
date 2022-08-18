import React, { useContext, useRef } from "react";
import Layout from "../ui/Layout";
import MainNavigation from "./MainNavigation";
import ProductContext from "../../store/product-context";

import classes from "./AddProduct.module.css";

function AddProduct() {
  const productContext = useContext(ProductContext);

  const imageRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredImage = imageRef.current.value;
    const enteredName = nameRef.current.value;
    const enteredPrice = Number(priceRef.current.value);

    const item = {
      imageUrl: enteredImage,
      name: enteredName,
      price: enteredPrice,
    };

    productContext.addItem(item);

    console.log(enteredImage, enteredName, enteredPrice);
  };

  return (
    <Layout>
      <header>
        <MainNavigation />
      </header>
      <div className={classes.formContainer}>
        <form onSubmit={submitHandler} className={classes.itemForm}>
          <input ref={imageRef} type="text" placeholder="Image Url" />
          <input ref={nameRef} type="text" placeholder="Item Name" />
          <input ref={priceRef} type="text" placeholder="Price" />
          <button className={classes.addBtn}>Add Item</button>
        </form>
      </div>
    </Layout>
  );
}

export default AddProduct;
