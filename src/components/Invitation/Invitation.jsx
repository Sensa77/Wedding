import React from "react";
import styles from './Invitation.module.scss'
import branchLeft from '../Invitation/branch-left.webp'
import branchRight from '../Invitation/branch-right.webp'
import smallBranch from '../Invitation/small-branch.webp'

export const Invitation = () => {
  return (
    <div className={styles.container}>
   <div className={styles.invitation}>
    <img className={styles.picture} src={branchLeft} width="300px" height="600px"></img>
    <div className={styles.wrapper}>
      <p className={styles.title}>Приглашение на свадьбу</p>
      <span className={styles.name}>Ирина и Глеб</span>
      <img src={smallBranch} className={styles.icon} />
      <p className={styles.text}>Будем очень рады видеть вас</p>
      <p className={styles.date}>30 сентября 2022</p>
      <div className={styles.ceremony}>
      <span>Церемония</span>
      <p>ул.Стасова, 174/1 (по желанию)</p>
    </div>
  <div className={styles.restaurant}>
    <span>Ресторан</span>
    <p>Ресторан "Хванчкара"</p>
    <p>ул.Селезнева 38</p>
    </div>
    </div>
    <img className={styles.picture} src={branchRight} width="300px" height="600px"></img>
   </div>
  </div>)
}