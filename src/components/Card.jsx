import React, { Component } from 'react';
import calculate_errors from '../helpers/calculate_errors';

class Card extends Component {
    render() {
        return (
            <div className='error-message'>
                <div>
                    {calculate_errors(this.props.squares)}
                </div>
                {/* <div>
                      
                </div> */}
            </div>
        );
    }
}

export default Card;