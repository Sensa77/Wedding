import React from "react";
import styles from "./Invitation.module.scss";
import branchLeft from "../Invitation/branch-left.webp";
import branchRight from "../Invitation/branch-right.webp";
import smallBranch from "../Invitation/small-branch.webp";

export const Invitation = () => {
  const url = window.location;
  const decodedURL = decodeURI(url.search);
  const searchParams = new URLSearchParams(decodedURL);
  // необходимо изменить дефолтную строку
  const guest1 = searchParams.get("guest1") || 'гости';
  const guest2 = searchParams.get("guest2") || '';
  const isGuest1 = guest1 !== 'гости' ? guest1 : '';

  return (
    <div className={styles.container}>
      <div className={styles.invitation}>
        <img className={styles.picture} src={branchLeft}></img>
        <div className={styles.wrapper}>
          <p className={styles.title}>Приглашение на свадьбу</p>
          <span className={styles.name}>{`${guest1} ${isGuest1 && guest2 && `и ${guest2}`}`}</span>
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
        <img className={styles.picture} src={branchRight}></img>
      </div>
    </div>
  );
};
