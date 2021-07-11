import React, { Component } from 'react'

export default class Star extends Component {
    getStyle=()=>{
        return this.props.starMovie.vote_average*10+'%';
    }
    render() {
        return (
            <div>
                <div class="stars-bg">&#9733;&#9733;&#9733;&#9733;&#9733;
                    <span class="stars-fg"  style={{width:this.getStyle()}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    
                </div>
                <small>{this.props.starMovie.vote_count } votes</small>
            </div>
        )
    }
}
