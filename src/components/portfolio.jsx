import React from 'react';
import multi_site from '../images/portfolio/multi_site.jpg';
import landing from '../images/portfolio/landing.jpg';
import personal from '../images/portfolio/personal.jpg';
import magazin from '../images/portfolio/magazin.jpg';

const Portfolio = () => {
    return(
        <div className="portfolio none">
            <div className="conteiner">
                <h2 className="portfolio-header">Портфолио</h2>
                <div className="portfolio-wrapper">
                    <div className="card">
                        <img className="card-img" src={multi_site} alt="Многостраничный сайт"/>
                            <h3 className="card-title">Многостраничный сайт</h3>
                            <p>Верстка многостраничного сайта.</p>
                    </div>
                    <div className="card">
                        <img className="card-img" src={landing} alt="Адаптивный лендинг"/>
                            <h3 className="card-title">Адаптивный лендинг</h3>
                            <p>Верстка многостраничного сайта.</p>
                    </div>
                    <div className="card">
                        <img className="card-img" src={personal} alt="Личный сайт"/>
                            <h3 className="card-title">Личный сайт</h3>
                            <p>Верстка многостраничного сайта.</p>
                    </div>
                    <div className="card">
                        <img className="card-img" src={magazin} alt="Интернет магазин"/>
                            <h3 className="card-title">Интернет магазин</h3>
                            <p>Верстка многостраничного сайта.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;