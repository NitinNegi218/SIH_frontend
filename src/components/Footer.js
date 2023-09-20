import React, { useState, useEffect } from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
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

const email = 'nitinnegi27.nn@gmail.com';

  useEffect(() => {
    showButton();
  }, []);

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to know more about medicinal plant species
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <h2>
          <Link
                to='/AboutUs'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              </h2>
          
          </div>
          <div class='footer-link-items'>
            <h2>
            <a href={`mailto:${email}`}>Contact Us</a>
            </h2>
         
          </div>
          <div class='footer-link-items' >
            <h2>Demonstration</h2>
       
          </div>
       
        </div>
        </div>
     
          

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            
            
              <img src="/favicon-32x32.png" alt="Logo" className='logo-image' />
              <span className='logo-text'> Sankalp</span>
         
            </Link>
          </div>
          <small class='website-rights'>SANKALP © 2023</small>

        </div>
      </section>
    </div>
  );
}

export default Footer;
