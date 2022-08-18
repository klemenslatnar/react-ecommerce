import React from "react";

export const initialState = {
  total: 0,
  products: [],
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  if (type === "ADD_TO_CART") {
    console.log("ADDED_TO_CART");
    return {
      ...state,
      products: payload.products,
    };
  }

  if (type === "REMOVE_FROM_CART") {
    return {
      ...state,
      products: payload.products,
    };
  }

  if (type === "UPDATE_PRICE") {
    return {
      ...state,
      total: payload.total,
    };
  }

  if (type === "ORDER_ITEMS") {
    return {
      ...state,
      total: payload.total,
    };
  }

  return state;
};

export default cartReducer;
