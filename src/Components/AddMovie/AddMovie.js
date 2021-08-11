import React from 'react'
import Header from '../Header/Header'
import AddMovieForm from './AddMovieForm'

const AddMovie = () => {
    return (
        <div className="container">
            <div className="row">
                <AddMovieForm></AddMovieForm>
            </div>
        </div>
    )
}

export default AddMovie
