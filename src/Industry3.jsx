import './Industry3.css';
import './index.css';

export default function Industry3() {
  return (
    <section id='industry-3' className='industry-3 section'>
      <div className='industry-3__container container'>
        <h2 className='industry-3__title section__title'>Производство 3.0</h2>
        <p className='industry-3__desc'>
          В 1948 году компания «General Electric» разработала автоматический
          электромеханический манипулятор «Хэнди Мэн». Он копировал движения
          оператора и давал обратную связь от предмета манипуляций.
        </p>
        <img src='src/images/industry3/computer.webp' width='100%' alt='' />
        <p className='industry-3__desc'>
          Совершенствование логических контроллеров, их программирование,
          создание промышленных роботов обусловили автоматизацию производства и
          бурный экономический рост после 1970 годов.
        </p>
        <p className='industry-3__desc'>
          Индустрия 3.0 - это концепция экономического развития, основанная на
          использовании информационных технологий для автоматизации производства
          и увеличения эффективности производственных процессов. В основе
          индустрии 3.0 лежат компьютеризация и автоматизация производства, а
          также использование интернета и цифровых технологий для управления
          бизнес-процессами. Основные черты индустрии 3.0 включают в себя
          цифровизацию производства, развитие интернета вещей (IoT), применение
          облачных технологий и аналитики данных для оптимизации
          производственных процессов.
        </p>
        <img
          src='src/images/industry3/Industrial-robot-machine-precision-sparks-welder_3840x2160.jpg'
          width='100%'
          alt=''
        />
      </div>
    </section>
  );
}