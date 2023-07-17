import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container1'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>J&J Foundation</small>
          <div className='social-icons'>
            <div
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <a href="https://www.facebook.com/ShalemMinistries" target='_blank' rel="noreferrer" style={{color: '#242424', marginLeft: '100px'}}><i className='fab fa-facebook-f'  style={{color: '#fff'}} /></a>
            </div>
            <div
              className='social-icon-link youtube '
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <a href="https://youtube.com/@shalemministries3968" target='_blank' rel="noreferrer" style={{color: '#242424',  marginLeft: '30px'}} ><i className='fab fa-youtube'  style={{color: '#fff'}}/></a>
            </div>
            <div
              className='social-icon-link whatsapp'
              to='/'
              target='_blank'
              aria-label='whatsapp'
            >
             <a href="https://wa.me/+916302211537" target='_blank' rel="noreferrer" style={{color: '#242424', marginLeft: '30px'}}> <i className='fab fa-whatsapp' style={{color: '#fff'}} /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
