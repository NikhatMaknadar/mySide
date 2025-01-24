// import React from 'react'
import styles from "./About.module.css";
// import { getImageUrl } from "../../utils";
const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src="https://res.cloudinary.com/nikhat/image/upload/v1737722570/portfolio/t6u6f8b0ezpmjoyjycsw.jpg"
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src="https://res.cloudinary.com/nikhat/image/upload/v1737721884/portfolio/tgk30tbm8d7d3jhkycf1.png" alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I`m a frontend developer with experience in building responsive
                                and optimized sites
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="https://res.cloudinary.com/nikhat/image/upload/v1737722630/portfolio/t6lrfksdqbadotzsmm4n.png" alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience developing fast and optimised back-end systems
                                and APIs
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    );
}

export default About