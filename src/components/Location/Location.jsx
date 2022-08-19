import React from "react";
import styles from './Location.module.scss';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import video from './video.mp4'

export const Location = () => {

  return (
    <div id="location" className={styles.container}>
      <video className={styles.video} autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <span className={styles.title}>Как добраться</span>
      <div className={styles.location}>
        <div className={styles.block}>
          <span className={styles.caption}>Церемония</span>
          <YMaps>
            <div className={styles.map}>
              <Map
                className={styles.yandex}
                defaultOptions={{
                  autoFitToViewport: "always",
                }}
                width="100%"
                defaultState={{ center: [45.023966, 39.043944], zoom: 18 }}
              >
                <Placemark defaultGeometry={[45.023966, 39.043944]} />
              </Map>
            </div>
          </YMaps>
        </div>
        <div className={styles.block}>
          <span className={styles.caption}>Ресторан</span>
          <YMaps>
            <div className={styles.map}>
              <Map
                className={styles.yandex}
                defaultOptions={{
                  autoFitToViewport: "always",
                }}
                width="100%"
                height="500px"
                defaultState={{ center: [45.015031, 39.088161], zoom: 18 }}
              >
                <Placemark defaultGeometry={[45.015031, 39.088161]} />
              </Map>
            </div>
          </YMaps>
        </div>
      </div>
    </div>
  );
}