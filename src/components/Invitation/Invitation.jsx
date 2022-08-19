import React from "react";
import styles from "./Invitation.module.scss";
import smallBranch from "../Invitation/small-branch.png";


export const Invitation = () => {
  const url = window.location;
  const decodedURL = decodeURI(url.search);
  const searchParams = new URLSearchParams(decodedURL);
  // необходимо изменить дефолтную строку
  const guest1 = searchParams.get("guest1") || 'гости';
  const guest2 = searchParams.get("guest2") || '';
  const isGuest1 = guest1 !== 'гости' ? guest1 : '';

  return (
    <div id="invitation" className={`${styles.container}`}>
      <div className={`${styles.invitation} container`}>
        <div className={styles.wrapper}>
          <p className={styles.title}>Приглашение на свадьбу</p>
          <span className={styles.name}>
            {`${guest1}`}
            {isGuest1 && guest2 && " и "}
            <br className={styles.endline} />
            {isGuest1 && guest2 && `${guest2}`}
          </span>
          <img src={smallBranch} className={styles.icon} />
          <p className={styles.text}>Будем очень рады видеть вас</p>
          <p className={styles.date}>30 сентября 2022</p>
          <div className={styles.ceremony}>
            <span>Церемония</span>
            <p>ул.Стасова, 174/1 (по желанию)</p>
          </div>
          <div className={styles.restaurant}>
            <span>Ресторан</span>
            <p>Ресторан "БогАрт"</p>
            <p>ул. Василия Мачуги, д. 139</p>
          </div>
        </div>
      </div>
    </div>
  );
};
