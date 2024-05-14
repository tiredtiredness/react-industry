import { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import './index.css';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <header className='header'>
      <nav className='nav'>
        <NavLink className='nav__logo' to='/'>
          IND3STRI4L
        </NavLink>
        <menu className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <NavLink className='nav__link' to='industry-3'>
                Индустрия 3.0
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink className='nav__link' to='industry-4'>
                Индустрия 4.0
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink className='nav__link' to='comparison'>
                3.0 vs 4.0
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink className='nav__link' to='examples'>
                Примеры
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink className='nav__link' to='contact-us'>
                Связаться с нами
              </NavLink>
            </li>
          </ul>
          <button
            className='nav__mobile'
            onClick={toggleSidebar}
            style={{
              backgroundImage: isSidebarOpen
                ? "url('./src/images/buttons/close-tab-svgrepo-com.svg')"
                : "url('./src/images/buttons/hamburger-svgrepo-com.svg')",
            }}
          ></button>
        </menu>
        <menu
          className='nav__menu--mobile'
          style={{ right: isSidebarOpen ? '0' : '-50%' }}
        >
          <ul className='nav__list'>
            <li className='nav__item'>
              <NavLink
                className='nav__link'
                to='industry-3'
                // onClick={toggleSidebar}
              >
                Индустрия 3.0
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink className='nav__link' to='industry-4'>
                Индустрия 4.0
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink className='nav__link' to='comparison'>
                3.0 vs 4.0
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink className='nav__link' to='examples'>
                Примеры
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink className='nav__link' to='contact-us'>
                Связаться с нами
              </NavLink>
            </li>
          </ul>
        </menu>
      </nav>
    </header>
  );
}
