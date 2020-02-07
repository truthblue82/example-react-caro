import React, {Component} from 'react';
import Square from '../Square/Square';
import Line from '../Line/Line';
import utils from '../../utils';

class Board extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const winner = utils.calculateWinnerFull(this.props.squares)
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                
                {this.props.number > 0 && 
                    [...Array(this.props.number)].map((line, lid) => {
                        return <Line number={this.props.number} lid={lid+1} boardClick={this.props.gameClick} key={lid} squares={this.props.squares} />
                    })
                }
            </div>
        );
    }
}

export default Board;
