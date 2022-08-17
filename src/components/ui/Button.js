import React, { useState } from "react";

import classes from "./Button.module.css";
import Modal from "./Modal";

function Button() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {showModal && <Modal showModal={() => setShowModal(!showModal)} />}
      <button
        onClick={() => setShowModal(!showModal)}
        className={classes.cartBtn}
      >
        Cart 🛒
      </button>
    </div>
  );
}

export default Button;
