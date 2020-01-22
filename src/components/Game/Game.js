import React, {Component} from 'react';
import Board from '../Board/Board';

function Game(props) {
    return(
        <div className="game">
            <div className="game-board">
                <Board number={props.number} gameClick={props.appClick} squares={props.squares} xIsNext={props.xIsNext}/>
            </div>
            <div className="game-info">
                <div></div>
                <ol></ol>
            </div>
        </div>
    );
}

export default Game;