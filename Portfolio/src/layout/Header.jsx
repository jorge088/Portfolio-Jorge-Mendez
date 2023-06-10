import style from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
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
                <ul className={style.navMenu}>
                    <li className={style.navItem}><a>INICIO</a> </li>
                    <li className={style.navItem}><a>SOBRE MI</a> </li>
                    <li className={style.navItem}><a>PROYECTOS</a> </li>
                    <li className={style.navItem}><a>CONTACTO</a> </li>
                </ul>
                <ul className={`${style.navMenuResponsive} ${showNavMenu && style.showNavMenuResponsive} ${showHideAnimation ? style.hideAnimation : style.showAnimation}`}>
                    <li className={style.navItemResponsive}><a onClick={handleHideNavMenu} >INICIO</a> </li>
                    <li className={style.navItemResponsive}><a onClick={handleHideNavMenu} >SOBRE MI</a> </li>
                    <li className={style.navItemResponsive}><a onClick={handleHideNavMenu} >PROYECTOS</a> </li>
                    <li className={style.navItemResponsive}><a onClick={handleHideNavMenu} >CONTACTO</a> </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header