import React, { Component } from 'react';
import Overview from './Partial/Overview';
import Reviews from './Partial/Reviews';
import Recommendations from './Partial/Recommendations';
import { Link } from 'react-router-dom';
export default class MovieDetails extends Component {

    constructor(){
        super();
        this.state={
            currentView:'overview',
           getUrl:()=>{ 
            return 'https://api.themoviedb.org/3/movie/' + this.props.id + '?api_key=2498a34e67fe4a6a0a209316d830d942&append_to_response=videos,similar,reviews,recommendations'
        },
        selectedMovie:null
        }
    }
    componentDidMount() {
       // alert(this.props.id);
        this.getMovie(this.props.id);
       }
    
       getMovie=(id)=>{
         fetch(this.state.getUrl())
         .then(res => res.json())
         .then(
           (result) => {
               //alert(this.state.isLoaded);
             this.setState({
               isLoaded: true,
               selectedMovie: result
             });
             //alert(result.page);
           },
           // Note: it's important to handle errors here
           // instead of a catch() block so that we don't swallow
           // exceptions from actual bugs in components.
           (error) => {
               this.setState({
               isLoaded: true,
               error
             });
           }
         )
       }
     
    changeView=(viewName)=>{
    this.setState({currentView:viewName})
    }
    getCurrentView=()=>{
        if(this.state.selectedMovie){
      //  return <Overview selectedMovie={this.state.selectedMovie} />;
      if(this.state.currentView=='reviews')
        return <Reviews selectedMovie={this.state.selectedMovie} />;
        if(this.state.currentView=='recommendations')
        return <Recommendations setView={this.setView} selectedMovie={this.state.selectedMovie} />;
        if(this.state.currentView=='overview')
            return <Overview selectedMovie={this.state.selectedMovie} />;
        }

    }
    movieClicked=(id)=>{
        this.props.setView('overviewDetails',id)
    }
    setView=(overviewDetails,id)=>{
        alert(id);
        this.setState({currentView:'overviewe'});
        this.getMovie(id);
    }
        render() {
            return (
                <div>
                    <h3><a href="#" onClick={()=>this.props.goToHome()}>Movies</a><small><a to="/AddMovie">Click here to add a movie!</a></small></h3>
                    <h1> {this.state.selectedMovie?this.state.selectedMovie.title:''} </h1>
                    <ul className="nav nav-tabs nav-justified">
                        <li className={this.state.currentView == 'overview' ? 'active' : ''} onClick={() =>this.changeView('overview')}><a href="overview">Overview</a></li>                   
                        <li className={this.state.currentView == 'reviews' ? 'active' : ''} onClick={() => this.changeView('reviews')}><a href="#reviews">Reviews</a></li>
                        <li className={this.state.currentView == 'recommendations' ? 'active' : ''} onClick={() =>this.changeView('recommendations')}><a href="#recommend">Recommendations</a></li>
                      </ul>
    
                    <hr />
                   
                    {this.getCurrentView()}
   
                </div>
            )
        }
    }
    