import React from 'react';
import './Modal.css'
function  Modal(props){
    return (
        <div className='modal'>
            {props.children}
        </div>
    )

}
export { Modal };