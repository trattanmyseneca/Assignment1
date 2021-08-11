import { render } from '@testing-library/react';
import { React, useState, useEffect, Component } from 'react'
import Footer from '../Footer/Footer';
import MainMoviePage from './MainMoviePage/MainMoviePage';
import MovieDetailsPage from './MovieListingPage/MovieDetailsPage/MovieDetailsPage';
import MovieListingPage from './MovieListingPage/MovieListingPage';
// export default class MoviePage extends Component{
const MoviePage = (props) => {
    const [pageName, setPageName] = useState(props.pagename);
    // constructor() {
    //     super();
    //     this.state = {
    //         view: this.props.pagename,
    //         movieId:''
    //     };
    // }
    // render(){

    const onMovieClicked = (id) => {
        setPageName("movieDetailsPage");
    }
    const getCurrentView = () => {
        if (pageName === "mainListingPage") {
            return <MovieListingPage onMovieClicked={onMovieClicked} />;
        }
        else if (pageName === "movieDetailsPage") {
            return <MovieDetailsPage pageName={pageName} setPageName={setPageName} />;
        }
        else if (pageName === "mainMoviePage") {
            return <MainMoviePage />;
        }
    }
    return (
        <div>
            {getCurrentView()}
        </div>
    )

    // }


}
export default MoviePage


