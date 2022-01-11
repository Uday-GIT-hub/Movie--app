import React,{useEffect} from 'react';
import banner from '../../images/banner3.jpg';
import {Link} from 'react-router-dom';
import './Home.scss'
import MovieListing from '../MovieListing/MovieListing';
import {fetchAsyncMovies,fetchAsyncShows} from '../../features/movies/movieSlice';
import {useDispatch} from 'react-redux';

function Home() {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());

    },[dispatch])

    return (
        <div>
        <div className="home">
            <div className="heading-div">
                <div className="heading">Welcome to Movie Web</div>
                <hr className="solid"></hr>
                <div className="text">Join Movie Web to watch the latest movies,</div>
                <div className="text">TV shows and award-winning Web Originals</div>
                <a href="#movies"><div><button className="watch-btn">Watch Now</button></div></a>
            </div>
            <div className="banner-img">
                <img src={banner} alt="banner-image"/>
            </div>
        </div>
            <MovieListing />
        </div>
        
    )
}

export default Home
