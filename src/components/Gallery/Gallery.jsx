import React from "react";
import styles from './Gallery.module.scss';
import photo from './photo.jpg';
import Slider from "react-slick";


export const Gallery = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.container}>
      <Slider {...settings} className={styles.slider}>
      <div>
        <img src={photo} width="900px" height="800px" className={styles.photo}/>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    </div>
  )
}