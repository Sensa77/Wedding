import React from "react";
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <>
    <nav className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.item}>Главная</li>
        <li className={styles.item}>Наша история</li> 
        <li className={styles.item}>Свадьба</li> 
        <li className={styles.item}>Как добраться</li> 
        <li className={styles.item}>Галерея</li>
        <li className={styles.item}>Память</li>   
      </ul>
    </nav>
    </>
  )
}