import React from 'react';
import { MenuItem } from '../Menu/MenuItem';
import CartContext from '../../store/cart-context';
import './Cart.css'
function Cart(){
    const { items } = React.useContext(CartContext)
    return (
        <div className='cart'>
            <div className='cart-header'>
                <h4>Your Cart</h4>
            </div>
            <div className='cart-items'>
            {items.map(({imageUrl, price, title, amount, id}) => {
                return <MenuItem imageUrl={imageUrl} price={price} title={title} amount={amount} id={id} />
            })}
            </div>
            <div className='cart-details'>
                <p>Total</p>
                <p>2022</p>
            </div>
        </div>
    )

}

export { Cart };