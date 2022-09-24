import React from 'react';
import './Header.css'

function Header(){
    return (
        <div className='header'>
        <div className='header-center'>
        <h1 className='header-name'>FoodiPie</h1>
        <div className='header-cart-banner'>
            <p className="header-cart-text">🛒 Your Cart</p>
            <p className='header-cart-quantity'>00</p>
        </div>
        </div>
        </div>

    )
}

export { Header }