import React, { Component } from 'react';
import './App.css';
import Game from '../components/Game/Game';
import InputNumber from '../components/InputNumber/InputNumber';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      number: 3,
      squares: null,
      xIsNext: true
    }
  }

  clickHandler = (event, lid, sid) => {
    console.log(`clickHandler: `);
  }

  blurHandler = (event) => {
    let val = parseInt(event.target.value);
    if(!val) val = 3;
    console.log(`blurHandler: ${val}`);
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
        <Game number={this.state.number} squares={this.state.squares} appClick={this.clickHandler} xIsNext={this.state.xIsNext}/>
      </div>
    );
  }
}

export default App;
