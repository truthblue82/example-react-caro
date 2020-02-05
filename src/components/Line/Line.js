import React, {Component} from 'react';
import Square from '../Square/Square';
import './Line.css';

function Line(props) {
    const number = props.number;
    const lid = props.lid;
    return (
        <div className='board-row'>
            {number > 0 &&
                [...Array(number)].map((item, idx) => {
                    let sId = (lid - 1)*number + idx;
                    return <Square value={props.squares[sId]} lineClick={(event) => props.boardClick( event, lid, idx)} key={sId} />
                })
            }
        </div>
    );
}

export default Line;