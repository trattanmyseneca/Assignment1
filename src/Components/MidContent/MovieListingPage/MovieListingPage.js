import React from 'react'
import { useState, useEffect, useContext } from 'react'
import movieContext from '../../Context/MovieContext';

const MovieListingPage = (props) => {

    const [movies, setmovies] = useState([]);
    const [view, setView] = useState("movielistpage");
    const [search, setSearch] = useState("");
    useEffect(() => {
        fetch("/movies").then((res) => {
            return res.json();
        }).then((data) => {
            //console.log(data.body);
            setmovies(data.body);
        }).catch((err) => {
            console.log(err);
        });
    },[])
    const searchPressed = (e) => {
        setSearch(e.target.value);
        //alert(e.target.value);
        fetch("/movies/title?title="+e.target.value).then((res) => {
            return res.json();
        }).then((data) => {
            //console.log(data.body);
            setmovies(data.body);
        }).catch((err) => {
            console.log(err);
        });
    }


    return (
        <>
            <div className="main-news" style={{ marginTop: "10px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <input onChange={searchPressed} value={search} placeholder="Search Movies" style={{ float: "right", height: "30px", marginBottom: "10px", fontSize: "13px" }} type="text" className="form-control col-md-2 pull-right"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                {movies.map((movie) => (
                                    <div key={movie.id} className="col-md-3">
                                        <div className="mn-img" onClick={() => props.onMovieClicked(movie.id)} >
                                            <img src={movie.smallPosterPath} id={movie.id} />
                                            <div className="mn-title">
                                                <a href="">{movie.title}</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieListingPage
