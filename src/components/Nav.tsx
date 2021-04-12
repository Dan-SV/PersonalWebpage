import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
        <div className={styles.menu}>
            <ul className={styles.list}>
                <li className={styles.listItem}><Link to='/' className={styles.link}>Home</Link></li>
                <li className={styles.listItem}><Link to='/career/' className={styles.link}>IT Experience</Link></li>
            </ul>                      
        </div>
    )
}
