import React, { Component } from 'react';

import '../assets/css/Home.css';

import Header from "../components/Header";
import Menu from "../components/Menu";

export default class Home extends Component{
	render(){
		return(
			<>
				<Header text="charlieengler.com"/>
				<Menu/>
			</>
		)
	}
}