import React, { Component } from 'react';

export default class MenuButton extends Component{
    render(){
        return(
            <div className="MenuButton">{this.props.text}</div>
        )
    }
}