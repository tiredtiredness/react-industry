import { useState } from 'react';
import './ContactUs.css';
import './index.css';

export default function ContactUs() {
  const [showSuccessWindow, setShowSuccessWindow] = useState(false);
  const [showErrorWindow, setShowErrorWindow] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements['name'].value.trim();
    const email = e.target.elements['email'].value.trim();
    const message = e.target.elements['message'].value.trim();

    const nameRegex = /^[a-zA-z]+$/;

    if (!nameRegex.test(name) || !email || !message) {
      setShowErrorWindow(true);
      return;
    }

    setShowSuccessWindow(true);

    e.target.reset();
  };

  return (
    <section id='contacts' class='contacts section'>
      <div className='contacts__container container'>
        <h2 className='section__title'>
          Свяжитесь с нами, чтобы узнать больше об индустрии 3.0 и 4.0
        </h2>
        <form className='contacts__form form' onSubmit={handleSubmit}>
          <div className='form__wrapper'>
            <div className='form__item'>
              <label for='name' className='item__title'>
                <h4 className=''>Ваше имя</h4>
              </label>
              <input
                type='text'
                name='name'
                id='name'
                required
                placeholder='Иван'
              />
            </div>
            <div className='form__item'>
              <label for='email' className='item__title'>
                <h4 className=''>Ваш email</h4>
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='address@domain.com'
              />
            </div>

            <div className='form__item'>
              <label for='message' className='item__title'>
                <h4 className=''>Ваше сообщение</h4>
              </label>
              <textarea
                name='message'
                id='message'
                placeholder='Посоветуйте, какие книги прочесть по этой теме?'
              ></textarea>
            </div>
          </div>

          <button type='submit' className='btn btn--submit'>
            Отправить
          </button>
        </form>
      </div>

      {showSuccessWindow && (
        <div className='modal-window'>
          <div className='modal-window__content'>
            <h3>Спасибо!</h3>
            <p>Ваше сообщение успешно отправлено.</p>
            <button
              onClick={() => setShowSuccessWindow(false)}
              className='close'
            ></button>
          </div>
        </div>
      )}

      {showErrorWindow && (
        <div className='modal-window'>
          <div className='modal-window__content'>
            <h3>Ошибка!</h3>
            <p>Пожалуйста, проверьте поля или заполните все поля формы.</p>
            <button
              onClick={() => setShowErrorWindow(false)}
              className='close'
            ></button>
          </div>
        </div>
      )}
    </section>
  );
}
