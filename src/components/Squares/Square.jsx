import React, { Component } from 'react';
class Square extends Component {


    render() {
        return (
            <button
            className="reg_square color"
            onClick={this.props.onClick}
            >
                {this.props.value}
            </button>
        )

    }
}

export default Square