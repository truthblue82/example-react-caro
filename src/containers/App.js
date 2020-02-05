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

  componentDidMount(nextProps, nextState) {
    console.log(``);
  }
  
  clickHandler = (event, lid, sid) => {
    console.log(`clickHandler: ${lid}:${sid} `);
    const squares = this.state.squares.slice();
    let idx = (lid - 1)*this.state.number + sid;
    console.log(`idx: ${idx}`);
    
    squares[idx] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
    });

    let winner = utils.calculateWinnerFull(squares, lid - 1, sid);
    if ( winner || squares[idx]) {
        // let status;
        // if (winner) {
        //     status = 'Winner: ' + winner;
        // } else {
        //     status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        // }
        // this.setState({status: status});
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
