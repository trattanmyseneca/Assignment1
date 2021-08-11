import {React,useState,useEffect} from 'react'
import Slider from './Slider/Slider'
import FeaturedMovies from './FeaturedMovies/FeaturedMovies'
import FeaturedTVShows from './FeaturedTVShows/FeaturedTVShows'
const MainMoviePage = (props) => {
    //const [search, setSearch] = useState("");
    return (
        <>
           <Slider></Slider> 
           <FeaturedMovies onMovieClicked={props.onMovieClicked}></FeaturedMovies>
           <FeaturedTVShows onMovieClicked={props.onMovieClicked} />
        </>
    )
}

export default MainMoviePage
