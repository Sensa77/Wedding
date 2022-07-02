import React from "react";
import styles from './Footer.module.scss'
import { animateScroll as scroll } from 'react-scroll'

export const Footer = () => {

  const scrollToTop = () => {
      scroll.scrollToTop(); 
  };

  return (
    <div className={styles.container}>
      <button type='button' className={styles.button} onClick={scrollToTop}>Вернуться наверх</button>
      <p className={styles.prodaction}>©2022 Aleksandra&Igor</p>
    </div>
  )
}