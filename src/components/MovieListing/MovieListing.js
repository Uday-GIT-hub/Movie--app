import React from 'react'
import Slider from 'react-slick';
import {useSelector} from 'react-redux';
import {getAllMovies ,getAllShows} from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import {Settings} from '../../common/settings';
import './MovieListing.scss';

function MovieListing() {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
   
    let renderMovies,renderShows = "";

    renderMovies = movies.Response === "True" ? 
    (movies.Search.map((movie,index) => 
        {
            return( <MovieCard key={index} data={movie} />)
           
        })
    ) : 
    (
        <div className="movies-error">
            <h3>{movies.Error}</h3>
        </div>
    );

    renderShows = shows.Response === "True" ? 
    (shows.Search.map((show,index) => 
        {
            return( <MovieCard key={index} data={show} />)
           
        })
    ) : 
    (
        <div className="movies-error">
            <h3>{shows.Error}</h3>
        </div>
    );

    
    return (
        <div className="movie-wrapper">
            <div className="movie-list" id="movies">
                <h2>Movies</h2>
                <div className="movie-container">
                    <Slider {...Settings}>{renderMovies}</Slider>
                </div>
            </div>
            <div className="shows-list">
                <h2>Shows</h2>
                <div className="movie-container">
                    <Slider {...Settings}>{renderShows}</Slider>
                </div>
            </div>
        </div>
    )
}

export default MovieListing
