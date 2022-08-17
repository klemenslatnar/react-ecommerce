import React from "react";

import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.modalTitle}>Cart Items</div>
        <div className={classes.modalBody}>{}</div>
        <div className={classes.modalFooter}>
          <div>Total Amount:{}</div>
          <button onClick={props.showModal} className={classes.closeBtn}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
