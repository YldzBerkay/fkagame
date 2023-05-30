import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: require('../../Images/hero.jpg'),
  },
  {
    url: require('../../Images/game3.2.jpg'),
  },
  {
    url: require('../../Images/game3.1.jpg'),
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%' ,height:'100vh',objectFit:'cover'}} src={fadeImage.url} />
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow;