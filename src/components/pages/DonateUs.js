import React from 'react';
import CardItem from '../CardItem';

export default function DonateUs() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Donate/donate-image1.jpg'
              text='Manda Jawahar
              ICICI BANK
              A.C No: 053401003396
              IFSCode: ICIC0000534'
              label='Bank Details'
            />
            <CardItem
              src='images/Donate/donate-image2.jpg'
              text="You can send any of your contributions or donations for this wonderful work, you can send through Google Pay or Phone pe to these numbers +91 6302211527."
              label='UPI'
            />
            <CardItem
              src='images/Donate/donate-image3.png'
              text="You can send Money order or DD in favor of J&J Foundation to 6-105, yernadugem, devarapalli mandal, AP, India 534313."
              label='Address'
            />
          </ul>         
        </div>
      </div>
    </div>
  );
}
