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
              Церемония
            </span>
            <p className={styles.description}>30 сентября 2022, 12:00</p>
            <a
              href="https://yandex.ru/maps/-/CCUNmAVJ2B"
              target="_blank"
              className={styles.description}
              rel="noreferrer"
            >
              <p className={styles.description}>ул.Стасова 174/1</p>
            </a>
          </div>
          <img className={styles.picture} src={branch} />
          <div className={styles.location}>
            <span className={`${styles.caption} ${styles.captionLocation}`}>
              Ресторан
            </span>
            <p className={styles.description}>30 сентября 2022, 18:00</p>
            <a
              href="https://yandex.ru/maps/-/CCUNmAfmgC"
              target="_blank"
              className={styles.description}
              rel="noreferrer"
            >
              ул. Мачуги, д. 139
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
