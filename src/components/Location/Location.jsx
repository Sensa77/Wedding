import React from "react";
import styles from './Location.module.scss';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const Location = () => {

  return (
    <div className={styles.container}>
      <span className={styles.title}>Как добраться</span>
      <span className={styles.caption}>Церемония</span>
      <YMaps>
        <div className={styles.map}>
          <Map
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
  );
}