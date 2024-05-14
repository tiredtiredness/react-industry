import './Comparison.css';
import './index.css'

export default function Comparison() {
  return (
    <section id='comparison' class='comparison section'>
      <div class='comparison__container container'>
        <h2 class='comparison__title section__title'>3.0 vs 4.0</h2>
        <div class='comparison__wrapper'>
          <div class='comparison__column'>
            <h3 class='column__title'>Индустрия 3.0</h3>
            <ul class='column__list'>
              <li class='column__item'>
                <p>
                  Основана на цифровых технологиях, автоматизации и оптимизации
                  процессов производства.
                </p>
              </li>
              <li class='column__item'>
                <p>
                  Использует сенсоры, мобильные устройства и интернет вещей для
                  сбора и анализа данных.
                </p>
              </li>
              <li class='column__item'>
                <p>
                  Улучшает производственные процессы и повышает эффективность
                  работы предприятий.
                </p>
              </li>
            </ul>
          </div>
          <div class='comparison__column'>
            <h3 class='column__title'>Индустрия 4.0</h3>
            <ul class='column__list'>
              <li class='column__item'>
                <p>
                  Характеризуется использованием передовых технологий, таких как
                  искусственный интеллект, большие данные и роботизированные
                  системы.
                </p>
              </li>
              <li class='column__item'>
                <p>
                  Обеспечивает полную цифровизацию производства и создание умных
                  фабрик, где все процессы автоматизированы и интегрированы в
                  единую сеть.
                </p>
              </li>
              <li class='column__item'>
                <p>
                  Предоставляет возможность гибкого и индивидуализированного
                  производства, а также более высокий уровень персонализации
                  продуктов.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
