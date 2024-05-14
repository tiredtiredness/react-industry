import './Examples.css';
import './index.css';

export default function Examples() {
  return (
    <section id='examples' className='examples section'>
      <div className='examples__container container'>
        <h2 className='examples__title section__title'>
          Примеры в реальном мире
        </h2>
        <div className='examples__list'>
          <div className='example'>
            <h3 className='example__title'>
              Промышленное производство:
              <br />
              Siemens и General Electric
            </h3>
            <img
              src='src/images/examples/example1.png'
              alt=''
              className='example__img'
            />
          </div>
          <div className='example'>
            <h3 className='example__title'>
              Автомобильная промышленность:
              <br />
              Tesla и BMW
            </h3>
            <img
              src='src/images/examples/example2.png'
              alt=''
              className='example__img'
            />
          </div>
          <div className='example'>
            <h3 className='example__title'>
              Здравоохранение:
              <br />
              мониторинг пациентов и анализ больших данных
            </h3>
            <img
              src='src/images/examples/example3.png'
              alt=''
              className='example__img'
            />
          </div>
          <div className='example'>
            <h3 className='example__title'>
              Сельское хозяйство:
              <br />
              использование датчиков IoT и дронов
            </h3>
            <img
              src='src/images/examples/example4.png'
              alt=''
              className='example__img'
            />
          </div>
          <div className='example'>
            <h3 className='example__title'>
              Логистика и снабжение:
              <br />
              UPS и DHL
            </h3>
            <img
              src='src/images/examples/example5.png'
              alt=''
              className='example__img'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
