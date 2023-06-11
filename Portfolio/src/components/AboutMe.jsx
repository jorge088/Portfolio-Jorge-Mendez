import style from './AboutMe.module.css';
import tecnologiesData from '../consts/tecnologiesData';



const AboutMe = () => {

    let tecnologiesItems = tecnologiesData.map(item => (
        <div className={style.tecnoItem}>
            <div className={style.tecnoImgContainer}>
                <img src={item.icon} className={style.tecnoImg} alt={item.name + ' icon'}></img>
            </div>
            <p>{item.name.toUpperCase()}</p>
        </div>
    ))
    return (
        <>
            <div className={style.aboutMeContainer}>
                <h3>SOBRE MI</h3>
                <p>Soy Analista Programador Universitario y actualmente estoy estudiando Ingeniería en Computación. Me gusta el desarrollo web, y es por esto, que decidí orientar mis estudios por el desarrollo Front-End.</p>
                <p>Me considero una persona entusiasta por encarar nuevos proyectos y en adquirir conocimientos que me permitan mejorar en mi desempeño dia a dia. Me gusta aprender sobre otros y compartir mis conocimientos.</p>
                <p>Inicie mi camino en el desarrollo web en la universidad, realizando pequeños proyectos junto a mis compañeros. Luego decidí continuar mis estudios de forma autodidacta con libros, guias y cursos en linea.</p>
            </div>
            <div className={style.experienceContainer}>
                <h3>EXPERIENCIA</h3>
                <p>Tutor en cursos de Javascript en Coderhouse. En donde, doy respuestas a las dudas y consultas de los alumnos durante las clases en linea. Además, me encargo de corregir y brindar feedback a sus entregas de proyectos.</p>
                <p>También cuento con proyectos que realicé como parte de trabajos finales en cursos y otros como proyectos personales para solucionar ciertas necesidades mias ó de conocidos.</p>
            </div>
            <div className={style.tecnologiesContainer}>
                <h3>TECNOLOGIAS</h3>
                <div className={style.tecnologiesItemsContainer}>
                    {tecnologiesItems}
                </div>
            </div>
        </>
    )
}
export default AboutMe