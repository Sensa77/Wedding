import React from "react";
import styles from "./Wedding.module.scss";
import branch from "../Invitation/small-branch.png";

export const Wedding = () => {
  return (
    <div id="wedding" className={`${styles.container}`}>
      <div className={`${styles.wrapper} container`}>
        <span className={styles.title}>Свадьба</span>
        <div className={styles.content}>
          <div className={styles.date}>
            <span className={`${styles.caption} ${styles.captionDate}`}>
              Когда
            </span>
            <p className={styles.description}>30 сентября 2022, 12:00</p>
            <p className={styles.description}>30 сентября 2022, 18:00</p>
          </div>
          <img className={styles.picture} src={branch} />
          <div className={styles.location}>
            <span className={`${styles.caption} ${styles.captionLocation}`}>
              Где
            </span>
            <a
              href="https://yandex.ru/maps/-/CCUNmAVJ2B"
              target="_blank"
              className={styles.description} rel="noreferrer"
            >
              Церемония - ул.Стасова 174/1
            </a>
            <a
              href="https://yandex.ru/maps/-/CCUNmAfmgC"
              target="_blank"
              className={styles.description} rel="noreferrer"
            >
              Ресторан - ул. Мачуги, д. 139
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
