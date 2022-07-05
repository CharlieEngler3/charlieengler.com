import React, { Component } from 'react';

export default class Header extends Component{
	render(){
		return(
			<div className="Header">{this.props.text}</div>
		);
	}
}