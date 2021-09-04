import React, { Component } from 'react';
import Board from './Board'
import '../index.css';

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(64).fill(null),
        }
    }
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board squares={this.state.squares}/>
          </div>
          <div className="game-info">
          </div>
        </div>
      );
    }
}

export default Game