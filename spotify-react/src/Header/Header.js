import React from "react";
import "./Header.css";
import smallRight from "../assets/icons/small-right.png";
import smallLeft from "../assets/icons/small-left.png";
import search from "../assets/icons/search.png";

const Header = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="" />
                </button>
            </div>
            <div className="header__search">
                <img src={search} alt="" />
                <input 
                    id="search-input" 
                    maxLength="800" 
                    autoCapitalize="off" 
                    spellCheck="false"
                    placeholder="What do you want to hear?" 
                />
            </div>
            <div className="header__login">
                <button className="subscribe">Sign up</button>
                <button className="login">Login</button>
            </div>
        </nav>
    );
};

export default Header;
