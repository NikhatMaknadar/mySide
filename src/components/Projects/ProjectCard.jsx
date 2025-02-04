/* eslint-disable react/prop-types */
import styles from "./ProjectCard.module.css";
// import { getImageUrl } from "../../utils";


const ProjectCard = ({project: { title, imageSrc, description, skills, demo, source }}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <img
                src={imageSrc}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    );
                })}
            </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>
                    Demo
                </a>
                <a href={source} className={styles.link}>
                    Source
                </a>
            </div>
        </div>
    );
};
export default ProjectCard