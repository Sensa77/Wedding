import React, { useEffect } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-scroll";

export const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled !== 0) {
        document.getElementById("header").style.opacity = "0.9";
        document.getElementById("header").style.zIndex = "100";
      } else {
        document.getElementById("header").style.opacity = "1";
      }
    });
  });

  return (
    <nav id="header" className={styles.header}>
      <ul className={`${styles.list} container`}>
        <Link
          activeClass="active"
          to="invitation"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          <li className={styles.item}>Главная</li>
        </Link>
        <Link
          activeClass="active"
          to="history"
          spy={true}
          smooth={true}
          offset={70}
          duration={1000}
        >
          <li className={styles.item}>Наша история</li>
        </Link>
        <Link
          activeClass="active"
          to="wedding"
          spy={true}
          smooth={true}
          offset={-170}
          duration={1000}
        >
          <li className={styles.item}>Свадьба</li>
        </Link>
        <Link
          activeClass="active"
          to="location"
          spy={true}
          smooth={true}
          offset={-25}
          duration={1000}
        >
          <li className={styles.item}>Как добраться</li>
        </Link>
        <Link
          activeClass="active"
          to="gallery"
          spy={true}
          smooth={true}
          offset={100}
          duration={1000}
        >
          <li className={styles.item}>Галерея</li>
        </Link>
        <Link
          activeClass="active"
          to="memory"
          spy={true}
          smooth={true}
          offset={60}
          duration={1000}
        >
          <li className={styles.item}>Память</li>
        </Link>
      </ul>
    </nav>
  );
};
