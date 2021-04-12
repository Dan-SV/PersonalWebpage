import React from 'react'
import style from '../styles/Header.module.css'
import Nav from './Nav'

export default function Header() {
    return (
        <div className={style.header}>
            <h1 className={style.headerText}>DSWebPro</h1>
            <Nav/>
        </div>
    )
}
