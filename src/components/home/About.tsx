import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.container} style={{backgroundImage: 'url("/img/braggmtn.jpeg")'}}>
            <div className={styles.content}>
                <h1>&lt; / &gt;</h1>
                <h3>Daniel</h3>
                <p>Programmer</p>
                <p>Currently located in the Okanagan area, seeking to relocate.</p>
                <Link to="/career/"><button className={styles.button}>Tech experience</button></Link>
                <br/>
            </div>
            <div className={styles.content}>
                <h1>Aspiring Developer</h1>
                <div className={styles.section}>
                    <h3>Interests</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><button className={styles.listItemButton}>Web Development</button></li>
                        <li className={styles.listItem}><button className={styles.listItemButton}>ERP Systems</button></li>
                    </ul>
                    <h3>Web Technologies</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><button className={styles.listItemButton}>React</button></li>
                        <li className={styles.listItem}><button className={styles.listItemButton}>TypeScript</button></li>
                        <li className={styles.listItem}><button className={styles.listItemButton}>CSS-modules</button></li>
                        <li className={styles.listItem}><button className={styles.listItemButton}>JavaScript</button></li>
                        <li className={styles.listItem}><button className={styles.listItemButton}>HTML</button></li>
                        <li className={styles.listItem}><button className={styles.listItemButton}>SAP UI5</button></li>
                    </ul>
                    <h3>Programming Languages</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><button className={styles.listItemButton}>Java</button></li>
                        <li className={styles.listItem}><button className={styles.listItemButton}>C#</button></li>
                    </ul>
                    <br/>
                </div>
            </div>
            <br/>
            <a href="mailto: info@dswebpro.com"><button className={styles.contactButton}>For inquiries, please contact info@dswebpro.com</button></a>
            <br/><br/>
        </div>
    )
}
