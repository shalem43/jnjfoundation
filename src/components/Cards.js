import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardItem1 from './CardItem1';

function Cards() {
  return (
    <div className='cards'>
      <h1>ABOUT US </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image-2.jpeg'
              text='Embodying a vision of compassion, Dr. M Johnson and his philanthropic allies have dedicated themselves to uplifting individuals in need. Their collective efforts extend far beyond providing basic necessities. The foundation is committed to nurturing self-esteem and unlocking the limitless potential within each person they encounter.'
              label='Dr. M Johnson'
            />
            <CardItem
              src='images/image-1.jpeg'
              text="With an unwavering commitment to inclusivity and equality, M. Vijayavani Johnson, and her philanthropic partners and J&J Team tirelessly work to eliminate barriers that hinder progress. By empowering individuals,Orphans with the tools and support needed to navigate life's challenges. The J&J Foundation pave the way for a future where self-esteem flourishes and potential knows no bounds."
              label='M Vijayavani Johnson'
            />
          </ul>
          <ul>
          <div className='cards__span2'>Our services</div>
          </ul>
          <ul className='cards__items'>
              <CardItem1
                src='images/image-3.jpeg'
                label='Children Home'
              />
            
            <CardItem1
              src='images/image-4.jpeg'
              label='Church Ministry'
            />
            <CardItem1
              src='images/image-5.jpg'
              label='Covid Care'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem1
              src='images/image-6.jpg'
              label='Donating Food '
            />
            <CardItem1
              src='images/image-7.jpg'
              label='Christmas Celebrations'
            />
            <CardItem1
              src='images/image-8.jpg'
              label='Strengthening Pastors'
            />
          </ul>          
        </div>
        <small style={{color: '#708525' , font:'message-box'}}>PLEASE CHECK OUT OUR GALLERY FOR MORE DETAILS</small>
        
      </div>
      <img className='cards__item__img' alt='card' src= 'images/fotter-image.jpg'
      style={{position: 'relative', marginTop: '50px'}}
      />
    </div>
  );
}

export default Cards;
