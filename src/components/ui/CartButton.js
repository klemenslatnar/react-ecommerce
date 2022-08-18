import React, { useState } from "react";
import Modal from "./Modal";

import classes from "./CartButton.module.css";

function CartButton() {
  const [openModal, setOpenModal] = useState(false);

  const clickHandler = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      {openModal && <Modal onClose={clickHandler} />}
      <button onClick={clickHandler} className={classes.cartButton}>
        Cart🛒
      </button>
    </>
  );
}

export default CartButton;
