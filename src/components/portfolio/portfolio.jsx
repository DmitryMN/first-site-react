import React from 'react';
import portfolioCss from './portfolio.module.css';
import multi_site from '../../images/portfolio/multi_site.jpg';
import landing from '../../images/portfolio/landing.jpg';
import personal from '../../images/portfolio/personal.jpg';
import magazin from '../../images/portfolio/magazin.jpg';

const Portfolio = () => {
    return(
        <div className={portfolioCss.portfolio}>
            <div className="conteiner">
                <h2 className={portfolioCss.portfolio_header}>Портфолио</h2>
                <div className={portfolioCss.portfolio_wrapper}>
                    <div className={portfolioCss.card}>
                        <img className={portfolioCss.card_img} src={multi_site} alt="Многостраничный сайт"/>
                            <h3 className={portfolioCss.card_title}>Многостраничный сайт</h3>
                            <p>Верстка многостраничного сайта.</p>
                    </div>
                    <div className={portfolioCss.card}>
                        <img className={portfolioCss.card_img} src={landing} alt="Адаптивный лендинг"/>
                            <h3 className={portfolioCss.card_title}>Адаптивный лендинг</h3>
                            <p>Верстка многостраничного сайта.</p>
                    </div>
                    <div className={portfolioCss.card}>
                        <img className={portfolioCss.card_img} src={personal} alt="Личный сайт"/>
                            <h3 className={portfolioCss.card_title}>Личный сайт</h3>
                            <p>Верстка многостраничного сайта.</p>
                    </div>
                    <div className={portfolioCss.card}>
                        <img className={portfolioCss.card_img} src={magazin} alt="Интернет магазин"/>
                            <h3 className={portfolioCss.card_title}>Интернет магазин</h3>
                            <p>Верстка многостраничного сайта.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;