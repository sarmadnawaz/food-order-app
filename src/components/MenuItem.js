import React from "react";
import CartContext from "../store/cart-context";
import { getAmount } from "../Utilz/amountFunctions"
import "../styles/MenuItem.css";

function MenuItem({ imageUrl, title, price, id}) {
  const cartContext = React.useContext(CartContext)
  const amount = getAmount(id, cartContext.items)
  function handleAddbtn(e){
      inputFormSubmitHandler(amount + 1, e.target.name)
  }
  function handleRemovebtn(e){
        if(amount - 1 < 0) return
        inputFormSubmitHandler(amount - 1, e.target.name)
  }
  function inputFormSubmitHandler(amount, event){
    if(event === 'ADD'){
      cartContext.addItem({
        imageUrl,
        title,
        price,
        id,
        amount
      })
    }else if(event === "REMOVE"){
      cartContext.removeItem(id)
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
        <div className='input-form'>
            <button  name="REMOVE" onClick={handleRemovebtn}>&#65293;</button>
            <input type='text' value={amount} />
            <button name="ADD"  onClick={handleAddbtn}>&#65291;</button>
        </div>
      </div>
    </div>
  );
}

export { MenuItem };
