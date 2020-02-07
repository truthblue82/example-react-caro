import React, { Component } from 'react';
import './App.css';
import utils from '../utils';
import Game from '../components/Game/Game';
import InputNumber from '../components/InputNumber/InputNumber';

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    number: 3,
    squares: Array(9).fill(null),
    xIsNext: true
  }
  
  clickHandler = (event, lid, sid) => {
    const squares = this.state.squares.slice();
    let idx = (lid - 1)*this.state.number + sid;
    
    if(squares[idx] === null) {
      squares[idx] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
    });
    }

    let winner = utils.calculateWinnerFull(squares);
    if ( winner || squares[idx]) {
        return;
    }
  }

  blurHandler = (event) => {
    let val = parseInt(event.target.value);
    if(!val) val = 3;
    let n = Math.pow(val, 2);
    this.setState({
      number: val,
      squares: Array(n).fill(null)
    });
  }

  render() {
    return (
      <div className="App">
        <InputNumber blur={this.blurHandler} />
        <br />
        <Game 
          number={this.state.number} 
          squares={this.state.squares} 
          appClick={this.clickHandler} 
          xIsNext={this.state.xIsNext} 
          />
      </div>
    );
  }
}

export default App;
