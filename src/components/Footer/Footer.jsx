import React from "react";
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <button type='button' className={styles.button}>Вернуться наверх</button>
      <p className={styles.prodaction}>©2022 Aleksandra&Igor</p>
    </div>
  )
}