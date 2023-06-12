import style from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-scroll';
import './headerStyle.css';

const Header = () => {
    const [showNavMenu, setShowNavMenu] = useState(false);
    const [showHideAnimation, setShowHideAnimation] = useState(false);

    const handleShowNavMenu = () => {
        setShowNavMenu(true);
    }
    const handleHideNavMenu = (e) => {
        console.log(e.target);
        setShowHideAnimation(true);
        setTimeout(() => {
            setShowNavMenu(false)
            setShowHideAnimation(false);
        }, 250);
    }

    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <button
                    className={`${style.btnNavMenu} ${showNavMenu && style.active}`}
                    onClick={showNavMenu ? handleHideNavMenu : handleShowNavMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <ul className={style.navMenu}  >
                    <li className={style.navItem} >
                        <Link to="main" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>INICIO</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link to="aboutMe" activeClass="active" spy={true} smooth={true} offset={-65} duration={500}>SOBRE MI</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link to="projects" activeClass="active" spy={true} smooth={true} offset={-65} duration={500}>PROYECTOS</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link to="contact" activeClass="active" spy={true} smooth={true} offset={-65} duration={500}>CONTACTO</Link>
                    </li>
                </ul>
                <ul className={`${style.navMenuResponsive} ${showNavMenu && style.showNavMenuResponsive} ${showHideAnimation ? style.hideAnimation : style.showAnimation}`}>
                    <li className={style.navItemResponsive}>
                        <Link to="main" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onClick={handleHideNavMenu}>INICIO</Link>
                    </li>
                    <li className={style.navItemResponsive}>
                        <Link to="aboutMe" activeClass="active" spy={true} smooth={true} offset={-60} duration={500} onClick={handleHideNavMenu}>SOBRE MI</Link>
                    </li>
                    <li className={style.navItemResponsive}>
                        <Link to="projects" activeClass="active" spy={true} smooth={true} offset={-60} duration={500} onClick={handleHideNavMenu}>PROYECTOS</Link>
                    </li>
                    <li className={style.navItemResponsive}>
                        <Link to="contact" activeClass="active" spy={true} smooth={true} offset={-60} duration={500} onClick={handleHideNavMenu}>CONTACTO</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header