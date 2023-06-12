import style from './Projects.module.css'

const ProjectItem = ({ project }) => {

    let tecnos = project.tecnos.map(tec => (
        <div className={style.tecnoItem} key={tec}>{tec}</div>
    ))
    return (
        <div className={style.projectItem}>
            <div className={style.projectImgContainer}>
                <img src={project.img} className={style.projectImg}></img>
            </div>
            <div className={style.projectDescription}>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
            </div>
            <div className={style.projectTecnos}>
                {tecnos}
            </div>
            <div className={style.projectBtnContainer}>
                <a href={project.deployUrl} target='_blank' >Ver sitio</a>
                <a href={project.codeUrl} target='_blank'>Ver código</a>
            </div>
        </div>
    )
}
export default ProjectItem