import React from 'react'

const ListMovies = (props) => {
    return (
    <>
       {props.movies.map((movie) => (  
              <li>{movie.title}</li>  
            ))}  
       </>     
    )
}
export default ListMovies
