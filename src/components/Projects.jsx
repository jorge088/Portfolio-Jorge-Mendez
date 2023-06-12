import style from './Projects.module.css';
import projectsData from '../consts/projectsData';
import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <div className={style.container}>
            <h3>PROYECTOS</h3>
            <div className={style.projectsContainer}>
                {projectsData.map(item =>
                    <ProjectItem project={item} key={item.name} />
                )}

            </div>
        </div>
    )
}
export default Projects