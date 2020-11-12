import React from 'react';
import instagram from '../images/icons/instagram.svg';
import facebook from '../images/icons/facebook.svg';
import vk from '../images/icons/vk.svg';
import linkedin from '../images/icons/linkedin.svg';
import github from '../images/icons/github.svg';


const Footer = () => {
    return(
        <footer className="footer">
            <div className=" conteiner">
                <div className="footer-wrapper">
                    <div className="footer-copyright footer-col">
                        <div className="footer-copyright-name">© Дмитрий Маленков</div>
                        <p>HTML верстка и разработка сайтов</p>
                    </div>
                    <div className="footer-icons footer-col">
                        <p>Мои профили в соцсетях</p>
                        <div className="icons-wrapper">
                            <a href="/#">
                                <img src={instagram} alt="instagram"/>
                            </a>
                            <a href="/#">
                                <img src={facebook} alt="facebook"/>
                            </a>
                            <a href="/#">
                                <img src={vk} alt="vk"/>
                            </a>
                            <a href="/#">
                                <img src={linkedin} alt="linkedin"/>
                            </a>
                            <a href="/#">
                                <img src={github} alt="github"/>
                            </a>
                        </div>
                    </div>
                    <div className="footer-contacts footer-col">
                        <a href="/#" className="footer-button">
                            Связаться в контакте
                        </a>
                        <p>Напишите мне, чтобы заказать или узнать стоимость верстки вашего проекта</p>
                    </div>
                </div>
            </div>
        </footer>
);
}

export default Footer;