import React, { Component } from 'react'

export default class MyClassComp extends Component {

    constructor(){
        super();
        this.state={
            name:"babar",
            color:"red"
        };
        this.changeColor=this.changeColor.bind(this);
    }
    changeColor = function() {
        this.setState({color: "blue"});
      }

    render() {
        return (
            <div>
                <h1>Name is {this.state.name}</h1>
                <h2>{this.state.color}</h2>
                <button type="button" onClick={this.changeColor}>Change Color</button>
            </div>

            
        )
    }
}
