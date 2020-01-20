import React, {Component} from 'react';
import Square from '../Square/Square';
import './Line.css';

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

export default Line;