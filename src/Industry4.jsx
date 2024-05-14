import './Industry4.css';
import './index.css';

export default function Industry4() {
  return (
    <section id='industry-4' className='industry-4 section'>
      <div className='industry-4__container container'>
        <h2 className='industry-4__title section__title'>Производство 4.0</h2>
        <p className='industry-4__desc'>
          Индустрия 4.0 - это новая фаза промышленной революции,
          характеризующаяся глубокой цифровизацией и интеграцией технологий,
          таких как искусственный интеллект (ИИ), машинное обучение,
          автоматизация, интернет вещей (IoT), расширенная реальность (AR) и
          виртуальная реальность (VR) в производственные процессы. Основная идея
          заключается в создании "умных" заводов и цифровых экосистем, где
          машины, устройства и люди будут взаимодействовать более эффективно и
          автономно.
        </p>
        <div className='industry-4__wrapper'>
          <iframe
            className='industry-4__video'
            src='https://www.youtube.com/embed/yjEbONkWIuo?si=v8B7KIUvvQWNTFPP'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <img
        className='industry-4__human-hand'
        src='src/images/industry4/human_hand.png'
        alt=''
      />
      <img
        className='industry-4__robot-hand'
        src='src/images/industry4/robot_hand.png'
        alt=''
      />
    </section>
  );
}
