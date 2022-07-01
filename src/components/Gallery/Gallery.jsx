import React from "react";
import styles from './Gallery.module.scss';
import weddingPhoto from './wedding.jpg';
import sea from './sea2.jpg';
import voda from './voda.jpg';
import pub from './pub.jpg';
import ikea from './ikea.jpg';
import snow from './snow.jpg';
import newYear from './newYear.jpg';
import park from './park.jpg';
import oldSea from './sea.jpg';
import school from './school.jpg';
import bird from './bird.jpg';
import home from './home.jpg';
import bridge from './bridge.jpg';
import valentine from './valentine.jpg';
import karasun from './karasun.jpg';
import oldWedding from './oldWedding.jpg';
import myHome from './myHome.jpg';
import sbs from './sbs.jpg';
import Slider from "react-slick";


export const Gallery = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={styles.container}>
      <Slider {...settings} className={styles.slider} originalHeigth="800px" originalWidth="900px">
      <div>
        <img src={weddingPhoto} width="800px" height="800px" className={`${styles.photo} ${styles.wedding}`}/>
      </div>
      <div>
      <img src={sea} width="800px" height="800px" className={`${styles.photo} ${styles.sea}`}/>
      </div>
      <div>
      <img src={voda} width="800px" height="800px" className={`${styles.photo} ${styles.voda}`}/>
      </div>
      <div>
      <img src={pub} width="800px" height="800px" className={`${styles.photo} ${styles.pub}`}/>
      </div>
      <div>
      <img src={ikea} width="800px" height="800px" className={`${styles.photo} ${styles.ikea}`}/>
      </div>
      <div>
      <img src={snow} width="800px" height="800px" className={`${styles.photo} ${styles.snow}`}/>
      </div>
      <div>
      <img src={newYear} width="800px" height="800px" className={`${styles.photo} ${styles.newYear}`}/>
      </div>
      <div>
      <img src={park} width="800px" height="800px" className={`${styles.photo} ${styles.park}`}/>
      </div>
      <div>
      <img src={oldSea} width="800px" height="800px" className={`${styles.photo} ${styles.oldSea}`}/>
      </div>
      <div>
      <img src={school} width="800px" height="800px" className={`${styles.photo} ${styles.school}`}/>
      </div>
      <div>
      <img src={bird} width="800px" height="800px" className={`${styles.photo} ${styles.bird}`}/>
      </div>
      <div>
      <img src={home} width="800px" height="800px" className={`${styles.photo} ${styles.home}`}/>
      </div>
      <div>
      <img src={bridge} width="800px" height="800px" className={`${styles.photo} ${styles.bridge}`}/>
      </div>
      <div>
      <img src={valentine} width="800px" height="800px" className={`${styles.photo} ${styles.valentine}`}/>
      </div>
      <div>
      <img src={karasun} width="800px" height="800px" className={`${styles.photo} ${styles.karasun}`}/>
      </div>
      <div>
      <img src={oldWedding} width="800px" height="800px" className={`${styles.photo} ${styles.oldWedding}`}/>
      </div>
      <div>
      <img src={myHome} width="800px" height="800px" className={`${styles.photo} ${styles.myHome}`}/>
      </div>
      <div>
      <img src={sbs} width="800px" height="800px" className={`${styles.photo} ${styles.sbs}`}/>
      </div>
    </Slider>
    </div>
  )
}