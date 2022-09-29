import React from 'react';
import "./Input.css"

function InputForm({onFormSubmit, amount} = {}){
    const [number, setNumber] = React.useState(amount)
    function handleInputChange(e){
        setNumber(+(e.target.value))
    }
    function handleAddbtn(e){
        onFormSubmit(number + 1, e.target.name)
        setNumber(number + 1)
    }
    function handleRemovebtn(e){
        if(number - 1 < 0) return
        onFormSubmit(number - 1, e.target.name)
        setNumber(number - 1)
    }
    return (
        <div className='input-form'>
            <button  name="REMOVE" onClick={handleRemovebtn}>&#65293;</button>
            <input type='text' value={number} onChange={handleInputChange} />
            <button name="ADD"  onClick={handleAddbtn}>&#65291;</button>
        </div>
    )
}

export { InputForm }