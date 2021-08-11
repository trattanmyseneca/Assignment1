import { forStatement } from '@babel/types';
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import movieContext from '../Context/MovieContext';
import ListMovies from './ListMovies';


const AddMovieForm = (props) => {
    
  
    const movieId = useContext(movieContext);
    const setPageName = useContext(movieContext);
    const [movieid, setMovieid] = useState(movieId.movieId);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [formElements, setFormElements] = useState({
        title: "",
        price: "",
        synopsis: "",
        type: "",
        smallPosterPath: "",
        largePosterPath: "",
        rent: "",
        featured: ""
    });
    useEffect(() => {
        console.log(setPageName)
        if (movieid) {
            console.log("/movies/" + movieid)
            fetch("/movies/" + movieid).then((res) => {
                // console.log(res);
                return res.json();
            }).then((data) => {
                // console.log(data.body[0]);
                setFormElements({
                    title: data.body[0].title == null ? "" : data.body[0].title
                    , price: data.body[0].price == null ? "" : data.body[0].price
                    , synopsis: data.body[0].synopsis == null ? "" : data.body[0].synopsis
                    , type: data.body[0].type == null ? "" : data.body[0].type
                    , smallPosterPath: data.body[0].smallPosterPath == null ? "" : data.body[0].smallPosterPath
                    , largePosterPath: data.body[0].largePosterPath == null ? "" : data.body[0].largePosterPath
                    , rent: data.body[0].rent == null ? "" : data.body[0].rent
                    , featured: data.body[0].featured == null ? "" : data.body[0].featured
                });
            }).catch((err) => {
                console.log(err);
            });
        }
        else {
            console.log(movieid);
        }
    }, []);
    var SaveData = (e) => {
        e.preventDefault();
        if (formElements.title.trim() == "") {
            setError("Please check if the mandatory fields are filled or not");
        }
        else if (formElements.price.trim() == "") {
            setError("Please check if the mandatory fields are filled or not");
        }
        else if (formElements.type.trim() == "") {
            setError("Please check if the mandatory fields are filled or not");
        }
        else {
            setError("");
        }
        if (movieid) {
            console.log("update");
            console.log(formElements);
            fetch("/movies/" + movieid, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "title": formElements.title,
                    "price": formElements.price,
                    "synopsis": formElements.synopsis,
                    "type": formElements.type,
                    "smallPosterPath": formElements.smallPosterPath,
                    "largePosterPath": formElements.largePosterPath,
                    "rent": formElements.rent,
                    "featured": formElements.featured
                })
            }).then((res) => {
                console.log(res);
                console.log(res.json());
                if (res.status === 200) {
                    setFormElements({ title: "", price: "", synopsis: "", type: "", smallPosterPath: "", largePosterPath: "", rent: "", featured: "" });
                    setSuccess("Saved Successfully");
                    setError("");
                    setMovieid("");
                    //setPageName("movieslist");
                }

                else {
                    return res.json();
                }
            }).then((data)=>{
console.log(data);
            }).catch((err) => {
                console.log(err);
            });
        }
        else {
            console.log("insert");
            fetch("/movies", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "title": formElements.title,
                    "price": formElements.price,
                    "synopsis": formElements.synopsis,
                    "type": formElements.type,
                    "smallPosterPath": formElements.smallPosterPath,
                    "largePosterPath": formElements.largePosterPath,
                    "rent": formElements.rent,
                    "featured": formElements.featured
                })
            }).then((res) => {
                console.log(res);
                console.log(res.json());
                if (res.status === 200) {
                    setFormElements({ title: "", price: "", synopsis: "", type: "", smallPosterPath: "", largePosterPath: "", rent: "", featured: "" });
                    setSuccess("Saved Successfully");
                    setError("");
                    props.setPageName("movieslist");
                }

                else {
                    return res.json();
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }
    var titlePressed = (evnt) => {
        setFormElements({ ...formElements, title: evnt.target.value });
    }
    var pricePressed = (evnt) => {
        setFormElements({ ...formElements, price: evnt.target.value });
    }
    var synopsisPressed = (evnt) => {
        setFormElements({ ...formElements, synopsis: evnt.target.value });
    }
    var typeChanged = (evnt) => {
        setFormElements({ ...formElements, type: evnt.target.value });
    }
    var smallPosterPathPressed = (evnt) => {
        setFormElements({ ...formElements, smallPosterPath: evnt.target.value });
    }
    var largePosterPathPressed = (evnt) => {
        setFormElements({ ...formElements, largePosterPath: evnt.target.value });
    }
    var rentPressed = (evnt) => {
        setFormElements({ ...formElements, rent: evnt.target.value });
    }
    var featuredChanged = (evnt) => {
        setFormElements({ ...formElements, featured: evnt.target.value });
    }
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="offset-3 col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    Add Movie
                                </div>
                                <div className="card-body">
                                    <div className="contact-form">
                                        <form>
                                            <div className="form-row">
                                                <label style={{ color: "red" }}>{error}</label>
                                                <label style={{ color: "green" }}>{success}</label>
                                                <div className="form-group col-md-12">
                                                    <label for="title">Movie Title <span style={{ color: "red" }}>*</span></label>
                                                    <input onChange={titlePressed} value={formElements.title} type="text" className="form-control" name="title" placeholder="Movie Title" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="price">Price<span style={{ color: "red" }}>*</span></label>
                                                    <input onChange={pricePressed} value={formElements.price} type="text" className="form-control" name="price" placeholder="Price" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="synopsis">Synopsis</label>
                                                    <textarea onChange={synopsisPressed} className="form-control"value={formElements.synopsis} name="synopsis" ></textarea>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="type">Movie/TV Show<span style={{ color: "red" }}>*</span></label>
                                                    <select onChange={typeChanged} className="form-control" name="type">
                                                        <option>--select--</option>
                                                        <option value="movie">Movie</option>
                                                        <option value="tvshow">TV Show</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="smallPosterPath">Small Poster Path</label>
                                                    <input onChange={smallPosterPathPressed} value={formElements.smallPosterPath} type="text" className="form-control" name="smallPosterPath" placeholder="Small Poster Path" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="largePosterPath">Large Poster Path</label>
                                                    <input onChange={largePosterPathPressed} value={formElements.largePosterPath} type="text" className="form-control" name="largePosterPath" placeholder="Large Poster Path" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="rent">Rent</label>
                                                    <input onChange={rentPressed} value={formElements.rent} type="text" className="form-control" name="rent" placeholder="Rent" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="featured">Featured</label>
                                                    <select onChange={featuredChanged} className="form-control" name="featured">
                                                        <option>--select--</option>
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </select>
                                                </div>
                                                <div><button className="btn" onClick={SaveData} type="submit">Save</button></div>
                                            </div>
                                        </form>
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

export default AddMovieForm
