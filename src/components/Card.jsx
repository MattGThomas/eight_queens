import React, { Component } from 'react';
import calculate_errors from '../helpers/calculate_errors';

class Card extends Component {
    render() {
        return (
            <div>
                {calculate_errors(this.props.squares)}
            </div>
        );
    }
}

export default Card;