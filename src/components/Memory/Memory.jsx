import React from "react";
import styles from './Memory.module.scss'
import collage from './collage.jpg'

export const Memory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
      <span className={styles.title}>Память</span>
      <p className={styles.description}>Фотографии со свадьбы можно будет найти в instagram по хештегу</p>
      <span className={styles.hashtag}>#свадьбаGadji</span>
      <p className={styles.call}>Фотографируйтесь и выкладывайте свои снимки!</p>
      <img className={styles.collage} src={collage} width='700px' height='400px'/>
      </div>
    </div>
  )
}