import React, {useRef} from "react";
import styles from './Location.module.scss';
import { useMapboxGl } from "use-mapbox-gl";

const osmStyle = {
  version: 8,
  sources: {
    osm: {
      type: "raster",
      tiles: [
        "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
      ],
      tileSize: 256,
    },
  },
  layers: [
    {
      id: "osm",
      source: "osm",
      type: "raster",
    },
  ],
};

export const Location = () => {
  const containerRef = useRef();

  console.log(containerRef)

  useMapboxGl(containerRef, {
    style: osmStyle,
    zoom: 17,
    center: [39.043944, 45.023966],
  });


  return (
    <div className={styles.container}>
      <span className={styles.title}>Как добраться</span>
      <span className={styles.caption}>Церемония</span>
      <div ref={containerRef} className={styles.map}/>
    </div>
  )
}