import { useContext, useState } from 'react';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { ThemeContext } from '../../contexts/theme';
import { experiences, projects } from '../../portfolio';
import './Navbar.css';

const Navbar = () => {
  const [{ themeName }] = useContext(ThemeContext);

  const [showNavList, setShowNavList] = useState(false);
  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className='center nav'>
      <ul style={{ display: showNavList ? 'flex' : null }} className='nav__list'>
        {experiences.length ? (
          <li className='nav__list-item'>
            <a href='#experiences' onClick={toggleNavList} className='link link--nav'>
              Experience
            </a>
          </li>
        ) : null}
        {projects.length ? (
          <li className='nav__list-item'>
            <a href='#projects' onClick={toggleNavList} className='link link--nav'>
              Projects
            </a>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
