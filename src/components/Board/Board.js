import React, {Component} from 'react';
import Square from '../Square/Square';
import Line from '../Line/Line';
import utils from '../../utils';

class Board extends Component {
    constructor(props) {
        super(props);
        console.log(`constructor of Board`);
        //let number = Math.pow(this.props.number, 2);
        /*this.state = {
            number: number,
            squares: Array(number).fill(null),
            xIsNext: true
        };*/
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (utils.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

    handleClickInLine(lid, sid) {
        let id = lid * (sid + 1) - 1;
        console.log(`handleClickInLine: ${lid} - ${id}`);
        /*let squares = [...this.state.squares];
        if(calculateWinner(squares) || squares[id]) {
            return;
        }
        squares[id] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });*/
    }

    renderSquare(i) {
        return <Square 
            value={this.state.squares[i]} 
            onClick={() => this.handleClick(i)} />;
    }

    render() {
        console.log(`render in Board`);
        const winner = utils.calculateWinner(this.props.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                {/*
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                */}
                {this.props.number > 0 && 
                    [...Array(this.props.number).fill(null)].map((line, lid) => {
                        return <Line number={this.props.number} lid={lid+1} boardClick={this.props.gameClick} key={lid} squares={this.props.squares} />
                    })
                }
            </div>
        );
    }
}

export default Board;
