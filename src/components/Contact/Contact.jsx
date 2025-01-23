// import React from 'react'
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out !</p>
            </div>
            <ul className={styles.links}>
                {/* Email */}
                <li className={styles.link}>
                    <a href="mailto:nikhatmakandar30@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={"/assets/contact/emailIcon.png"} alt="Email icon" />
                    </a>
                    <a href="mailto:nikhatmakandar30@gmail.com">nikhatmakandar30@gmail.com</a>
                </li>
                {/* LinkedIn */}
                <li className={styles.link}>
                    <a href="https://www.linkedin.com/in/nikhat-m-89ba1328a/" target="_blank" rel="noopener noreferrer">
                        <img src={"/assets/contact/linkedinIcon.png"} alt="LinkedIn icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/nikhat-m-89ba1328a/">linkedin.com/Nikhat Makandar</a>
                </li>
                {/* GitHub */}
                <li className={styles.link}>
                    <a href="https://github.com/NikhatMaknadar" target="_blank" rel="noopener noreferrer">
                        <img src={"/assets/contact/githubIcon.png"} alt="Github icon" />
                    </a>
                    <a href="https://github.com/NikhatMaknadar">github.com/NikhatMakandar</a>
                </li>
            </ul>
        </footer>
    );
}

export default Contact;
