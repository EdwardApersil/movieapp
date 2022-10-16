import React from 'react';

function Movies({ movie }) {
    
    return (
        <div className='watch'>
            <div className='all'>
                <div className='all-img'>
                    <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.path} />
                </div>
                <div className='movie-content'>
                    <h4> <strong>Title</strong> - {movie?.title}</h4>
                    <span><strong>Language</strong> - {movie.original_language}</span>
                    <h5><strong>Average</strong> - { movie.vote_average}</h5>
                </div>
                <div className="overview">
                    <p><strong>Overview</strong>: {movie.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default Movies;