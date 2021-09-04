import React, { Component } from 'react';
import LetterSquare from './LetterSquare'

class LetterRow extends Component {
    state = {
        squares: [
            '',
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H'
        ]
    }

    renderSquare(i) {
        return (
            <LetterSquare
                value={this.state.squares[i]}
            />
        );
}

    render() {
        return (
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
        )
    }
}

export default LetterRow