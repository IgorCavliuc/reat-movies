import React from 'react';
import Movie from '../Movie/Movie'
import './Movies.css'

export default function Movies ({movies = []}){

    
    return(
        
        <div className='movies'>
            { movies.length ? (movies.map((movie) =>  <Movie key={movie.imdbID} {...movie}/>
            )) : (<h5>Not Found</h5>)} 
        </div>
    )
}