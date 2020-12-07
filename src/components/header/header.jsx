import React from 'react';
import headerCss from './header.module.css';
import header_arrow from '../../images/header/header-arrow.svg';

const Header = () => {
    return(
        <header className={headerCss.header}>
            <h1 className={headerCss.header_title}>Perfect Digital Context</h1>
            <p className={headerCss.header_subtitle}>Лучшее агенство по контексту</p>
            <div className={headerCss.header_arrow}>
                <img src={header_arrow} alt="Arrow"/>
            </div>
        </header>
    );
}

export default Header;