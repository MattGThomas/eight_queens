import React, { Component } from 'react';

import Rows from './Rows'

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
                <div className='title'>
                    <div>
                        Eight Queens Game
                    </div>
                </div>
                <div>
                    <Rows renderSquare={this.renderSquare} squares={this.props.squares}/>
                </div>
            </div>
        );
    }
}

export default Board