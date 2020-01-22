import React, {Component} from 'react';
import './InputNumber.css';

const InputNumber = (props) => {
    return (
        <div className='input-number'>
            <h1>Input the number for the game</h1>
            <input type='text' defaultValue='3' onBlur={(event) => props.blur(event)}/>
        </div>
    )
}

export default InputNumber;