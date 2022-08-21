import React from "react";
import styles from './Gallery.module.scss';
import weddingPhoto from '../../img/min-image/wedding.jpg';
import sea from "../../img/min-image/sea2.jpg";
import voda from "../../img/min-image/voda.jpg";
import pub from "../../img/min-image/pub.jpg";
import ikea from "../../img/min-image/ikea.jpg";
import snow from "../../img/min-image/snow.jpg";
import newYear from "../../img/min-image/newYear.jpg";
import park from "../../img/min-image/park.jpg";
import oldSea from "../../img/min-image/sea.jpg";
import school from "../../img/min-image/school.jpg";
import bird from "../../img/min-image/bird.jpg";
import home from "../../img/min-image/home.jpg";
import bridge from "../../img/min-image/bridge.jpg";
import valentine from "../../img/min-image/valentine.jpg";
import karasun from "../../img/min-image/karasun.jpg";
import oldWedding from "../../img/min-image/oldWedding.jpg";
import myHome from "../../img/min-image/myHome.jpg";
import sbs from "../../img/min-image/sbs.jpg";
import Slider from "react-slick";


export const Gallery = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          dots: false,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div name="gallery" className={styles.container}>
      <div className='container'>

      </div>
      <Slider
        {...settings}
        className={styles.slider}
        originalHeigth="800px"
        originalWidth="900px"
      >
        <div>
          <img
            src={weddingPhoto}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.wedding}`}
          />
        </div>
        <div>
          <img
            src={sea}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.sea}`}
          />
        </div>
        <div>
          <img
            src={voda}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.voda}`}
          />
        </div>
        <div>
          <img
            src={pub}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.pub}`}
          />
        </div>
        <div>
          <img
            src={ikea}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.ikea}`}
          />
        </div>
        <div>
          <img
            src={snow}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.snow}`}
          />
        </div>
        <div>
          <img
            src={newYear}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.newYear}`}
          />
        </div>
        <div>
          <img
            src={park}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.park}`}
          />
        </div>
        <div>
          <img
            src={oldSea}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.oldSea}`}
          />
        </div>
        <div>
          <img
            src={school}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.school}`}
          />
        </div>
        <div>
          <img
            src={bird}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.bird}`}
          />
        </div>
        <div>
          <img
            src={home}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.home}`}
          />
        </div>
        <div>
          <img
            src={bridge}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.bridge}`}
          />
        </div>
        <div>
          <img
            src={valentine}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.valentine}`}
          />
        </div>
        <div>
          <img
            src={karasun}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.karasun}`}
          />
        </div>
        <div>
          <img
            src={oldWedding}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.oldWedding}`}
          />
        </div>
        <div>
          <img
            src={myHome}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.myHome}`}
          />
        </div>
        <div>
          <img
            src={sbs}
            width="800px"
            height="800px"
            className={`${styles.photo} ${styles.sbs}`}
          />
        </div>
      </Slider>
    </div>
  );
}