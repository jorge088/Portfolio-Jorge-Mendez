import style from './AboutMe.module.css';
import tecnologiesData from '../consts/tecnologiesData';



const AboutMe = () => {

    let tecnologiesItems = tecnologiesData.map(item => (
        <div className={style.tecnoItem} key={item.name}>
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
                <p>Soy graduado de la carrera Analista Programador Universitario y desarrollador web Front End. Vivo en Argentina y tengo un gran interés por la tecnología y el desarrollo. Me encuentro en el camino de fortalecer mis habilidades en el desarrollo de sitios web con React, realizando practicas y aprendiendo metodologías y técnicas que me permitan mejorar en el desarrollo de código. </p>
                <p>Me considero una persona entusiasta por encarar nuevos proyectos y en adquirir conocimientos que me ayuden a mejorar en mi desarrollo profesional y personal.</p>
                <p>Inicie mi camino en la programación en la universidad, en donde aprendí y realicé practicas con distintos lenguajes de programación (C++, java, js, c#, etc) y estudié técnicas y tecnologías para desarrollar un proyecto de forma óptima. Continué mis estudios de desarrollo web en cursos online y de forma autodidacta.</p>
            </div>
            <div className={style.experienceContainer}>
                <h3>EXPERIENCIA</h3>
                <p>Tutor en los cursos online de Javascript en Coderhouse. Mis tareas en este cargo son: Responder a las consultas de los estudiantes durante las clases en vivo y durante el curso. Realizar la corrección de las entregas de proyecto de los estudiantes, brindando un feedback constructivo con sugerencias y observaciones a mejorar en el código.</p>
                <p>Cuento con proyectos de sitios web, que realicé: Algunos como parte de cursos en donde participé y otros como proyectos personales, que realicé para solucionar necesidades propias o de amigos/familiares. </p>
                <p>También, he participado en proyectos de desarrollo grupales. Aplicando la metodología SCRUM con sprints semanales y reuniones de avances del proyecto.</p>
            </div>
            <div className={style.tecnologiesContainer}>
                <h3>TECNOLOGÍAS</h3>
                <div className={style.tecnologiesItemsContainer}>
                    {tecnologiesItems}
                </div>
            </div>
        </>
    )
}
export default AboutMe