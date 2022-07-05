import React, { Component } from 'react';

import MenuButton from "../parts/MenuButton";

export default class Menu extends Component{
    render(){
        return(
            <div style={{textAlign: "center"}}>
                <MenuButton text="Proficiencies"/>
            </div>
        )
    }
}