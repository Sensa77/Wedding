import React from "react";
import styles from './Location.module.scss';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import video from './video.mp4'

export const Location = () => {

  return (
    <div className={styles.container}>
      <video className={styles.video} autoPlay muted loop>
        <source src={video} type='video/mp4'/>
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
              autoFitToViewport: 'always'
            }}
            width="100%"
            height="500px"
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
              autoFitToViewport: 'always'
            }}
            width="100%"
            height="500px"
            defaultState={{ center: [45.023941, 39.041636], zoom: 18 }}
          >
            <Placemark defaultGeometry={[45.023941, 39.041636]} />
          </Map>
        </div>
      </YMaps></div>
      </div>
    </div>
  );
}