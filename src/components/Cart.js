import React from 'react';
import { MenuItem } from './MenuItem';
import CartContext from '../store/cart-context';
import '../styles/Cart.css'

function Cart(){
    const { items, totalAmount } = React.useContext(CartContext)
    return (
        <div className='cart'>
            <div className='cart-header'>
                <h4>Your Cart</h4>
            </div>
            <div className='cart-items'>
            {items.map(({imageUrl, price, title, id}) => {
                return <MenuItem imageUrl={imageUrl} price={price} title={title} id={id} />
            })}
            </div>
            <div className='cart-details'>
                <p>Total</p>
                <p>{totalAmount}</p>
            </div>
        </div>
    )

}

export { Cart };