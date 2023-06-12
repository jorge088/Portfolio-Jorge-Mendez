import style from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerContain}>
                <p>Mis redes</p>
                <div className={style.socialContainer}>
                    <a target='_blank' href='https://github.com/jorge088'><FontAwesomeIcon icon={faGithub} /></a>
                    <a target='_blank' href='https://www.youtube.com/channel/UCqEaO7TLZrMFiI7LRmdhCEA'><FontAwesomeIcon icon={faYoutube} /></a>
                    <a target='_blank' href='https://www.linkedin.com/in/jorge-n-mendez/'><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
                <p>Jorge Mendez - 2023</p>
            </div>
        </footer>
    )
}
export default Footer