import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaRegSnowflake } from 'react-icons/fa';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Winter Child
            <FaRegSnowflake className="fa-icon" />
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Characters'
                className='nav-links'
                onClick={click}
              >
                Characters
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Books'
                className='nav-links'
                onClick={click}
              >
                Books
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to='/TvSeries'
                className='nav-links'
                onClick={click}
              >
                Tv Series
              </Link>
            </li>
            
          </ul>

          
          <Link to='/pages/SignUp'>
          {button && <Button buttonStyle='btn--outline' onClick={click}>SIGN UP</Button>}
          </Link>

        </div>
      </nav>
    </>
  );
}

export default Navbar;