import style from './Main.module.css';
import profileImg from './../../Assets/perfil.jpg'
const Main = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.information}>
                <h2 className={style.welcome}>¡Hola!</h2>
                <h1 className={style.mainText}>Soy <span className={style.name}>Jorge Mendez</span> </h1>
                <h3 className={style.secundaryText}>Analista Programador</h3>
                <h3 className={style.secundaryText}>Front End Developer</h3>
                <div className={style.btnContainer}>
                    <a href='https://drive.google.com/file/d/1EwuryfBUCisn3V7vOs_tDwxkHxVgpwnc/view?usp=sharing' target='_blank'>Ver CV</a>
                    <a href='https://www.linkedin.com/in/jorge-n-mendez/' target='_blank'>Linkedin</a>
                </div>
            </div>
            <div className={style.imgContainer}>
                <img src={profileImg} className={style.profileImg} alt='profileImg'></img>
            </div>
        </div>
    )
}
export default Main