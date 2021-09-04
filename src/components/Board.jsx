import React, { Component } from 'react';
// import calculate_winner from '../helpers/calculate_errors';
import Rows from './Rows'
import LetterRow from './LetterRow';
import '../index.css';


class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            next_player: 'X',
        }
    }

  
    render() {
    
        return (
            <div>
            <Rows renderSquare={this.renderSquare} squares={this.props.squares}/>
            <LetterRow renderSquare={this.renderSquare} />
            </div>
        );
    }
}

export default Board