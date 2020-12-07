import React from 'react';
import footerCss from './footer.module.css';
import instagram from '../../images/icons/instagram.svg';
import facebook from '../../images/icons/facebook.svg';
import vk from '../../images/icons/vk.svg';
import linkedin from '../../images/icons/linkedin.svg';
import github from '../../images/icons/github.svg';


const Footer = () => {
    return(
        <footer className={footerCss.footer}>
            <div className="conteiner">
                <div className={footerCss.footer_wrapper}>
                    <div className={`${footerCss.footer_copyright} ${footerCss.footer_col}`}>
                        <div className={footerCss.footer_copyright_name}>© Дмитрий Маленков</div>
                        <p>HTML верстка и разработка сайтов</p>
                    </div>
                    <div className={`${footerCss.footer_icons} ${footerCss.footer_col}`}>
                        <p>Мои профили в соцсетях</p>
                        <div className={footerCss.icons_wrapper}>
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
                    <div className={`${footerCss.footer_contacts} ${footerCss.footer_col}`}>
                        <a href="/#" className={footerCss.footer_button}>
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