import React,{useState} from 'react';
import {Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import user from '../../images/user1.png';
import { fetchAsyncMovies ,fetchAsyncShows } from '../../features/movies/movieSlice';
import './Header.scss';
function Header() {

    const dispatch = useDispatch();
    const [term ,setTerm] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        if(term === "") return alert("Please Enter Movie or Show")
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm("");
    }

    return (
        <div className="header">
           <div className="logo"><Link to="/">Movie Web</Link></div>
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Search for Movies or shows"/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className="user-image">
                <img src={user} alt="user"/>
            </div>
        </div>
    )
}

export default Header
