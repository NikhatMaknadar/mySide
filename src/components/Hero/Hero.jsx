// import React from 'react'
import styles from "./Hero.module.css"
const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title} >Hi, I`m Nikhat</h1>
                <p className={styles.description}>
                    Hello, I`m Nikhat Makandar, a passionate and skilled web developer with a strong foundation in modern web technologies. I have recently completed my Bachelor of Computer Applications (BCA) from Rani Channamma University, Belagavi, and I am excited to embark on my professional journey in the world of web development.
                </p>
                <p className={styles.description}>
                    Throughout my academic journey and independent projects, I have gained hands-on experience with technologies like JavaScript, React JS, Tailwind CSS, and more. My focus lies in building impactful web applications and creating user-centric, responsive designs that deliver exceptional experiences.
                </p>
                <p className={styles.description}>
                    If you`re looking for a dedicated and driven developer to join your team, let’s connect! Together, we can create web solutions that leave a lasting impact.
                </p>
                <a href="#contact" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img className={styles.heroImg} src={"assets/hero/mypic2.jpg"} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero