import React from "react";
import CartContext from "./cart-context";

const cartReducer = function (state, action) {
  if (action.type === "ADD") {
    let updatedItems;
    const idxIfItemAlreadyExist = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[idxIfItemAlreadyExist];
    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedItems = [...state.items];
      updatedItems[idxIfItemAlreadyExist] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: state.totalAmount + action.item.price * action.item.amount,
    };
  } else if (action.type === "REMOVE") {
    let updatedItems;
    const idxIfItemAlreadyExist = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[idxIfItemAlreadyExist];
    if (existingCartItem.amount === 1)
      updatedItems = state.items.filter((item) => item.id !== action.id);
    else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[idxIfItemAlreadyExist] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: state.totalAmount - existingCartItem.price,
    };
  } else {
    return state;
  }
};
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = React.useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    removeItem: removeItemFromCartHandler,
    addItem: addItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
