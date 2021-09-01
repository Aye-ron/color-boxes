import React, { Component } from 'react'
import './ColorSquare.css';
import { choice } from './helper';

class ColorSquare extends Component{
    static defaultProps = {
        allColors: ['purple', 'magenta', 'violet', 'pink']
    };

    constructor(props){
        super(props);
        this.state = {color: choice(this.props.allColors)};
        this.changeColor = this.changeColor.bind(this); 
    }
    changeColor() {
        let newCol = choice(this.props.allColors);
        this.setState({color : newCol});
    } 
    render(){

        // document.getElementsByClassName("square").background = 'blue';
        return(
            <div className = 'square' 
            onClick = {this.changeColor} 
            style={{backgroundColor: this.state.color}}/>
        );
    }
}

export default ColorSquare;