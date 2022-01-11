import React,{useState} from 'react';
import {Link } from 'react-router-dom';
import user from '../../images/user1.png';
import './Header.scss';
function Header() {

    const [term ,setTerm] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(term);
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
