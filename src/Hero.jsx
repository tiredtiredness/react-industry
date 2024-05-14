import { useEffect, useState } from 'react';
import './Hero.css';
import './index.css';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(1);

  const displayPrevImage = () => {
    setCurrentImage(prevImage => (prevImage === 1 ? 5 : prevImage - 1));
  };

  const displayNextImage = () => {
    setCurrentImage(prevImage => (prevImage === 5 ? 1 : prevImage + 1));
  };

  return (
    <section
      className='hero section'
      style={{ backgroundImage: `url(src/images/slider/${currentImage}.png)` }}
    >
      <div className='hero__container container'>
        <div className='hero__content'>
          <h1 className='hero__title'>Индустрии производства 3.0 и 4.0</h1>
          <p className='hero__desc'>
            Добро пожаловать в мир индустрий 3.0 и 4.0. Здесь мы представляем
            вам революционные концепции и технологии, которые меняют облик
            современного производства.
          </p>
          <a href='/industry-3' className='btn'>
            Узнать больше
          </a>
          <button
            className='btn-slider btn-slider--left'
            onClick={displayPrevImage}
          ></button>
          <button
            className='btn-slider btn-slider--right'
            onClick={displayNextImage}
          ></button>
        </div>
      </div>
    </section>
  );
}
