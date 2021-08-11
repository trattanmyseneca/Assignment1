import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const MovieDetailsPage = (props) => {

    const [movie, setMovie] = useState({});
    const goToHome = () => {
        <Link to="/userregistration" className="dropdown-item">Add/Update User</Link>
    }
    const goToMovies = () => {
        props.setPageName("mainListingPage");
    }

    useEffect(() => {

        console.log(props.movieId);
        fetch("/movies/" + props.movieId).then((res) => {
            console.log(res);
            return res.json();
        }).then((data) => {
            console.log(data.body[0]);
            setMovie(data.body[0]);
        }).catch((err) => {
            console.log(err);
        });

    }, [])


    return (
        <>
            <div className="single-news">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* <a className="btn btn-danger btn-sm" href="javascript:void(0)" onClick={goToHome}>Go To Home</a> &nbsp; */}
                            {/* <a className="btn btn-danger btn-sm" href="javascript:void(0)" onClick={goToMovies}>Go To Movies</a> */}
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="sn-container">
                                <div className="sn-img">
                                    <img style={{height:"500px"}} src={movie.largePosterPath} />
                                </div>
                                <div className="sn-content">
                                    <h1 className="sn-title">{movie.title}</h1>
                                    <p>
                                        {movie.synopsis}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar-widget">
                                    <h2 className="sw-title">Details</h2>
                                    <div className="category">
                                        <ul>
                                        <li><a href="">Movie/TV Show</a><span>{movie.type=="movie" ? "Movie" : "TV Show"}</span></li>
                                        <li><a href="">Featured/Non Featured</a><span>{movie.featured=="yes" ? "Featured" : "Non Featured"}</span></li>
                                            <li><a href="">Price</a><span>${movie.price}</span></li>
                                            <li><a href="">Rent</a><span>${movie.rent}</span></li>
                                           
                                            
                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetailsPage
