import React, { Component } from 'react';
import Square from './Squares/Square'
import NumberSquare from './Squares/NumberSquare'
import _ from 'lodash'
import calculate_errors from '../helpers/calculate_errors';
import Card from './Card'
import { GiChessQueen } from 'react-icons/gi'
import '../index.css';


class Rows extends Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(64).fill(null),
        }
    }

    renderSquare(i, first_column = false) {
        if(first_column === true) {
            return (
                <NumberSquare
                    value={i}
                    onClick={() => this.click(i)}
                />
            )
        } else {
            return (
                <Square
                    value={this.state.squares[i]}
                    onClick={() => this.click(i)}
                />
            )
        }
    }

    click = (i) => {
        
        const squares = this.state.squares.slice();
        _.isNil(squares[i]) ? squares[i] = 
            'X'
         : squares[i] = null
        
        
        this.setState({
            squares: squares,
        });
        // console.log('this is state after setSTate', this.state)
    }

    render() {
        // let message = 'placeholder'
        // const {squares} = this.props
        // console.log('this is squares from props', squares)
        return (
            <div style={{display: 'flex'}}> 
                <div>
                    <div className="board-row">
                        {this.renderSquare('8', true)}
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare('7', true)}
                        {this.renderSquare(8)}
                        {this.renderSquare(9)}
                        {this.renderSquare(10)}
                        {this.renderSquare(11)}
                        {this.renderSquare(12)}
                        {this.renderSquare(13)}
                        {this.renderSquare(14)}
                        {this.renderSquare(15)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare('6', true)}
                        {this.renderSquare(16)}
                        {this.renderSquare(17)}
                        {this.renderSquare(18)}
                        {this.renderSquare(19)}
                        {this.renderSquare(20)}
                        {this.renderSquare(21)}
                        {this.renderSquare(22)}
                        {this.renderSquare(23)}
                        
                    </div>
                    <div className="board-row">
                        {this.renderSquare('5', true)}
                        {this.renderSquare(24)}
                        {this.renderSquare(25)}
                        {this.renderSquare(26)}
                        {this.renderSquare(27)}
                        {this.renderSquare(28)}
                        {this.renderSquare(29)}
                        {this.renderSquare(30)}
                        {this.renderSquare(31)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare('4', true)}
                        {this.renderSquare(32)}
                        {this.renderSquare(33)}
                        {this.renderSquare(34)}
                        {this.renderSquare(35)}
                        {this.renderSquare(36)}
                        {this.renderSquare(37)}
                        {this.renderSquare(38)}
                        {this.renderSquare(39)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare('3', true)}
                        {this.renderSquare(40)}
                        {this.renderSquare(41)}
                        {this.renderSquare(42)}
                        {this.renderSquare(43)}
                        {this.renderSquare(44)}
                        {this.renderSquare(45)}
                        {this.renderSquare(46)}
                        {this.renderSquare(47)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare('2', true)}
                        {this.renderSquare(48)}
                        {this.renderSquare(49)}
                        {this.renderSquare(50)}
                        {this.renderSquare(51)}
                        {this.renderSquare(52)}
                        {this.renderSquare(53)}
                        {this.renderSquare(54)}
                        {this.renderSquare(55)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare('1', true)}
                        {this.renderSquare(56)}
                        {this.renderSquare(57)}
                        {this.renderSquare(58)}
                        {this.renderSquare(59)}
                        {this.renderSquare(60)}
                        {this.renderSquare(61)}
                        {this.renderSquare(62)}
                        {this.renderSquare(63)}
                    </div>
                </div>
                <div>
                    <Card squares={this.state.squares}/>
                </div>
            </div>
        )
    }
    
}

export default Rows