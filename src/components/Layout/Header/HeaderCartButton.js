import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import { Modal } from "../../UI/Modal";
import { Cart } from "../../Cart/Cart";
import './HeaderCartButton.css'

function HeaderCartButton(){
    const [isOpen, setIsOpen] = React.useState(false);
    const cartContext = useContext(CartContext)
    const cartItemsQuantity = cartContext.items.reduce((curNum, item) => {
        return curNum + item.amount;
    }, 0)
    return(
        <>
        <div onClick={() => setIsOpen(!isOpen)} className='header-cart-btn'>
            <p className="header-cart-btn-text">🛒 Your Cart</p>
            <p className='header-cart-btn-quantity'>{cartItemsQuantity}</p>
        </div>
        {isOpen && (
            <Modal>
              <Cart/>
            </Modal>
          )}
        </>
    )
}

export { HeaderCartButton }