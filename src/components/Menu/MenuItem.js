import React from "react";
import { InputForm } from "../UI/InputForm";
import CartContext from "../../store/cart-context";
import "./MenuItem.css";

function MenuItem({ imageUrl, title, price, id, amount = 0 }) {
  const cartContext = React.useContext(CartContext);
  function inputFormSubmitHandler(amount, type) {
    console.log(amount)
    if (type === "ADD") {
      cartContext.addItem({
        id,
        amount,
        title,
        price,
        imageUrl,
      });
    } else if (type === "REMOVE") {
      cartContext.removeItem(id);
  }
}
  return (
    <div className="flex">
      <div className="menu-item">
        <img className="menu-item-img" src={imageUrl} />
        <p className="menu-item-title">{title}</p>
        <p className="menu-item-price">{price}</p>
      </div>
      <div className="meun-item-form">
        <InputForm amount={amount}  onFormSubmit={inputFormSubmitHandler} />
      </div>
    </div>
  );
}

export { MenuItem };
