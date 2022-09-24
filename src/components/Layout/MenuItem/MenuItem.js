import React from 'react'
import "./MenuItem.css" 

function MenuItem({ imageUrl, title, price }){
    return (
        <div className="menu-item">
            <img className="menu-item-img" src={imageUrl} />
            <div className='menu-item-detail'>
            <p className='menu-item-title'>{title}</p>
            <p className='menu-item-price'>{price}</p>
            </div>
        </div>
    )
}

export { MenuItem }

