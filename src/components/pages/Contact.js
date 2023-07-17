import React from 'react';
import '../../App.css';
import '../Footer.css';
import { Button } from '../Button';
import {sendForm} from '@emailjs/browser'

function sendEmail() {
  sendForm('service_oc9d5co','template_kc1v3qb');
};



export default function Contact() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Learn more about our upcoming events, fundraisers, and more!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form className='footer-subscription'>
            <input
              className='footer-input'
              name='email_from'
              type='email'
              id='email'
              placeholder='Your Email'
            />
            <input
              className='footer-input'
              name='message'
              id='message'
              type='text'
              placeholder='Message'
            />
            <Button buttonStyle='btn--outline' onSubmit={sendEmail}>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
          <div class='footer-link-items'>
            <a href="https://youtube.com/@shalemministries3968" target='_blank' rel="noreferrer"><i class='fab fa-youtube' /> Youtube</a>
          </div>
          <div class='footer-link-items'>
            <a href="https://www.facebook.com/ShalemMinistries" target='_blank' rel="noreferrer"><i class='fab fa-facebook-f' /> Facebook</a>
          </div>
          <div class='footer-link-items'>
            <a href="https://wa.me/+916302211537" target='_blank' rel="noreferrer"> <i class='fab fa-whatsapp' style={{color: '#fff'}} /> Whatsapp</a>
          </div>
      </div>
      
    </div>
  );
}
