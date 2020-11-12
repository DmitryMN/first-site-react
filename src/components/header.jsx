import React from 'react';
import header_arrow from '../images/header/header-arrow.svg';

const Header = () => {
    return(
        <header className="header none">
            <h1 className="header-title">Perfect Digital Context</h1>
            <p className="header-subtitle">Лучшее агенство по контексту</p>
            <div className="header-arrow">
                <img src={header_arrow} alt="Arrow"/>
            </div>
        </header>
    );
}

export default Header;