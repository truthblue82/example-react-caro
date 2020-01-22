import React, {Component} from 'react';
import Square from '../Square/Square';
import './Line.css';

function Line(props) {
    const number = props.number;
    const lid = props.lid;
    console.log(`Line ${lid}`);
    return (
        <div className='board-row'>
            {number > 0 &&
                [...Array(number).fill(null)].map((item, idx) => {
                    return <Square value={item} lineClick={() => props.boardClick( lid, idx)} key={idx} />
                })
            }
        </div>
    );
}

/*
class Line extends Component {
    constructor(props) {
        super(props);
        console.log(`number: ${this.props.number}`);
        this.state = {
            lines: Array(this.props.number).fill(null),
            xIsNext: true
        };
    }

    renderSquare(sqr, i) {
        return <Square 
            value={sqr} 
            onClick={() => alert(i)}/>;
    }

    render() {
        return (
            <div className='board-row'>
                {
                    this.state.lines.forEach((sqr, idx) => {
                        console.log(`index: ${idx}`);
                        this.renderSquare(sqr, idx);
                    })
                }
            </div>
        )
    }
}
*/
export default Line;