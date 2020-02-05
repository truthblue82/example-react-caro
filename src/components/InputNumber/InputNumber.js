import React, {Component} from 'react';
import './InputNumber.css';

const InputNumber = (props) => {
    return (
        <div className='input-number'>
            <label htmlFor="number">Input number </label>
            <input type='text' name='number' defaultValue='3' onBlur={(event) => props.blur(event)} />
        </div>
    )
}

export default InputNumber;