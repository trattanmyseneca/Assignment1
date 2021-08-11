import {React,useState,useEffect} from 'react'

const FeaturedTVShows = (props) => {
    const [movies, setmovies] = useState([])

    useEffect(() => {

        fetch("/movies/tvfeatured").then((res) => {
            return res.json();
        }).then((data) => {
            setmovies(data.body);
        }).catch((err) => {
            console.log(err);
        });

    }, [])
    return (
        <>
           <div className="cat-news">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Featured TV Shows</h2>

                    </div>
                </div>
            </div>
        </div>
        <div className="main-news">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            
                            
                            
                        {
                                    movies.map((movie) => (
                                        <div className="col-md-3">
                                            <div className="mn-img" onClick={() => props.onMovieClicked(movie.id)}>
                                                <img src={movie.smallPosterPath} />
                                                <div className="mn-title">
                                                    <a href="">{movie.title}</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }


                        </div>
                    </div>


                </div>
            </div>
        </div>  
        </>
    )
}

export default FeaturedTVShows
