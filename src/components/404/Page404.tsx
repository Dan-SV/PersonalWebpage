import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Page404.module.css';

export default function Page404() {
    return (
        <div className={styles.page} style={{backgroundImage: 'url("/img/closed.jpeg")'}}>
                <div className={styles.vAlignPane}>
            <div className={styles.hAlignPane}>
                    <div className={styles.innerPane}>
                        <h2>404</h2>
                        <p>Broken link, Page not found</p>
                        <p>¯\_(ツ)_/¯</p>
                    </div>
                    <br/>
                    <Link to='/'><button className={styles.button}>Return to the home page</button></Link>
                </div>
            </div>
        </div>
    )
}
