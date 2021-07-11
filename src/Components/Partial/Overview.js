import React, { Component } from 'react';
import Star from './Star';

export default class Overview extends Component {
    getUrl=()=>{
return 'https://image.tmdb.org/t/p/w342'+ this.props.selectedMovie.poster_path;
    }
    render() {
        return (
            <div>
            
            <div className='displayFlex' >
                <div>
                    <img src={this.getUrl()} />
                </div>
                <div className="padding10">
                    <p><i>Release date: {this.props.selectedMovie.release_date}</i></p>
                    <p>Rating: <Star starMovie={this.props.selectedMovie}></Star></p>
                    <p>{this.props.selectedMovie.overview}</p>
                </div>
                <div>
                    {/* {{#each .videos.results}}
                        {{#if .site == "YouTube"}}
                         <iframe width="256" height="144" src="https://www.youtube.com/embed/{{.key}}" allowfullscreen="true"></iframe>
                        {{/if}}
                    {{/each}} */}
                </div>
            </div>
           
            </div>
        )
    }
}
