import React from 'react'
import { useState, useEffect } from 'react'

const MoviesList = (props) => {
    const [movies, setmovies] = useState([]);
    const [isDeleted,setIsDeleted] = useState();
    useEffect(() => {
        fetch("/movies").then((res) => {
            //console.log(res);
            return (res.json())
        }).then((data) => {
            setmovies(data.body);
        }).catch((err) => {
        });
    }, [isDeleted]);

    const deleteMovie = (id) => {
        fetch("/movies/" + id, {
            method: "Delete"
        }).then((res) => {
            console.log(res);
            setIsDeleted(isDeleted+1);            
        }).then(() => {

        });
    }
    return (
        <div>
            <div className="main-news" style={{ marginTop: "40px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Delete</th>
                                            <th>Edit</th>
                                            <th> Title</th>
                                            <th> S P Path</th>
                                            <th> L P Path</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {movies.map((movie) => (
                                            <tr key={movie.id}>
                                                <td> <a href="javascript:void(0)" onClick={() => deleteMovie(movie.id)}>Delete</a> </td>
                                                <td> <a href="javascript:void(0)" onClick={() => props.editMovie(movie.id)}>Edit</a> </td>
                                                <td>{movie.title}</td>
                                                <td>{movie.smallPosterPath}</td>
                                                <td>{movie.largePosterPath}</td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div> </div></div> </div></div> </div>
    )
}

export default MoviesList
