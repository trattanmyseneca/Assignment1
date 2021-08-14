import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

    const goToUserList = () => {
        props.setPageName("userlist");
    }
    const goToAddMovie = (e) => {
        e.preventDefault();
        props.setPageName("addmovie");
    }
    const goToMovieList = (e) => {
        e.preventDefault();
        props.setPageName("movielist");
    }
    const goToHome = () => {
        props.setPageName("home");
    }
    const goToMovies = () => {
        props.setPageName("movies");
    }
    const goToUserRegistration = () => {
        props.setPageName("userregistration");
    }
    const goToLogin = () => {
        props.setPageName("login");
    }
    const goToMovieOld = () => {
        props.setPageName("moviesold");
    }

    return (
        <>
            <div className="nav-bar">
                <div className="container">
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        <a href="#" className="navbar-brand">Movie App</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Movies</a>
                                    <div className="dropdown-menu">
                                        <a href="" onClick={goToAddMovie} className="dropdown-item">Add/Update Movie</a>
                                        <a href="" onClick={goToMovieList} className="dropdown-item">List Of Movies</a>
                                    </div>
                                </div>
                                <a onClick={goToHome}   className="nav-item nav-link">Home</a>
                                <a onClick={goToMovies} className="nav-item nav-link">Movies</a>
                                <a onClick={goToLogin} className="nav-item nav-link">Login</a>
                                <a onClick={goToUserRegistration} className="nav-item nav-link">User Registration</a>
                                {/* <a className="nav-item nav-link" onClick={goToMovieOld}>Movie Old</a> */}
                                {/* <a className="nav-item nav-link" onClick={goToUserList}>user list</a> */}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header
