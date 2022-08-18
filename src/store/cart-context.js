import React, { useReducer, useContext } from "react";
import cartReducer from "../reducers/cart-reducer";
import { initialState } from "../reducers/cart-reducer";

const CartContext = React.createContext(initialState);

export const CartProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  console.log(state);

  const addToCart = (product) => {
    const updatedCart = state.products.concat(product);

    updatePrice(updatedCart);

    dispatch({
      type: "ADD_TO_CART",
      payload: { products: updatedCart },
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );

    updatePrice(updatedCart);

    dispatch({ type: "REMOVE_FROM_CART", payload: { products: updatedCart } });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => (total += product.price));

    dispatch({
      type: "UPDATE_PRICE",
      payload: { total: total.toFixed(2) },
    });
  };

  const orderItems = () => {
    let price = 0;
    dispatch({
      type: "ORDER_ITEMS",
      payload: {
        total: price,
      },
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
    orderItems,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used withing CartContext ");
  }

  return context;
};

export default useCart;
