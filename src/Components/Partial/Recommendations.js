import React, { Component } from 'react'
import MovieTitle from './MovieTitle';

export default class Recommendations extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    getRcomendedMovieComponents=()=>{
        var rcomendedMovieTitleList=[];
        this.props.selectedMovie.recommendations.results.forEach((item, index) => {
                 return rcomendedMovieTitleList.push(<MovieTitle  movieItem={item} key={index} movieClickedEvent={this.movieClicked}/>)
                 }
             )
return rcomendedMovieTitleList;
    }
    getSimilarMovieComponents=()=>{
        var similarMovieTitleList=[];
        this.props.selectedMovie.similar.results.forEach((item, index) => {
                 return similarMovieTitleList.push(<MovieTitle  movieItem={item} key={index} movieClickedEvent={this.movieClicked}/>)
                 }
             )
return similarMovieTitleList;
    }
    movieClicked=(id)=>{
        this.props.setView('overviewDetails',id)
    }
    render() {
        return (
            <div>
            <div className="row">
                <div className="col-md-6">
                    <h2>Recommendations</h2>
                    <div className="tiles">
                       {this.getRcomendedMovieComponents()}
                    </div>
                </div>
                <div className="col-md-6">
                    <h2>Similar movies</h2>
                    <div className="tiles">
                       {this.getSimilarMovieComponents()}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
