import React, { Component } from 'react';

class DigitalClicker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            timesClicked: 0,
         };
         this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        this.setState(pState =>({
            timesClicked: pState.timesClicked+1
        }))
    }
    render() {
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        );
    }
}

export default DigitalClicker;