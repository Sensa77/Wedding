import React from "react";
import styles from "./Wedding.module.scss";
import branch from "./small-branch.webp";

export const Wedding = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Свадьба</span>
      <div className={styles.content}>
        <div className={styles.date}>
          <span className={`${styles.caption} ${styles.captionDate}`}>
            Когда
          </span>
          <p className={styles.description}>30 сентября 2022, 12:20 PM</p>
          <p className={styles.description}>30 сентября 2022, 18:00 PM</p>
        </div>
        <img className={styles.picture} src={branch} />
        <div className={styles.location}>
          <span className={`${styles.caption} ${styles.captionLocation}`}>
            Где
          </span>
          <a
            href="https://yandex.ru/maps/-/CCUNmAVJ2B"
            target="_blank"
            className={styles.description}
          >
            Церемония - ул.Стасова 174/1
          </a>
          <a
            href="https://yandex.ru/maps/-/CCUNmAfmgC"
            target="_blank"
            className={styles.description}
          >
            Ресторан - ул.Селезнева 189
          </a>
        </div>
      </div>
      <button className={styles.button} type="button">
        Я приду
      </button>
    </div>
  );
};
