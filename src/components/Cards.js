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

           <ul style={{color: '#166758', textAlign: 'center', marginTop: '10px'}}>
              <strong>Welcome to the J&J Foundation!</strong>      
          </ul>
          <ul style={{color: '#273232', textAlign: 'center', marginTop: '20px', marginBottom: '10px'}}>
            <small>At the J&J Foundation, we are driven by a deep passion for making a positive impact on the lives of others. Our foundation was established in 2011’ with the belief that every individual deserves access to opportunities that can transform their lives and empower them to reach their full potential.</small>
          </ul>

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

          <ul style={{color: '#2f1994', marginTop: '10px'}}>
              <strong>Our Mission: </strong>      
          </ul>
          <ul style={{color: '#273232', marginTop: '20px'}}>
            <small>Our mission is to create lasting change by supporting initiatives that address critical social challenges. Through strategic partnerships and targeted interventions, we aim to uplift communities and foster sustainable development.</small>
          </ul>

          <ul style={{color: '#61136d', marginTop: '10px'}}>
              <strong>Our Vision: </strong>      
          </ul>
          <ul style={{color: '#273232', marginTop: '20px'}}>
            <small>We envision a world where every person has access to quality education, healthcare, and opportunities for personal and economic growth. We strive to be a catalyst for change, inspiring others to join us in building a brighter future for all.</small>
          </ul>

          <ul style={{color: '#0d5912', marginTop: '10px'}}>
              <strong>Our Values: </strong>      
          </ul>
          <ul style={{color: '#273232', marginTop: '20px'}}>
            <small>Integrity, compassion, and collaboration are at the core of everything we do. We believe in transparency and accountability, ensuring that our efforts have a meaningful and measurable impact on the lives we touch.</small>
          </ul>

          <ul style={{color: '#a9b139', marginTop: '10px'}}>
              <strong>Our Impact: </strong>      
          </ul>
          <ul style={{color: '#273232', marginTop: '20px'}}>
            <small>Since our inception, the J&J Foundation has worked tirelessly to support projects that promote education, healthcare, food distribution and orphanage home. Together with our dedicated team. we have achieved significant milestones and transformed lives.</small>
          </ul>

          <ul style={{color: '#a72b2b', marginTop: '10px'}}>
              <strong>Disaster Relief and Rehabilitation: </strong>      
          </ul>
          <ul style={{color: '#273232', marginTop: '20px'}}>
            <small>During times of crisis, the J&J Foundation has stepped in to provide aid and support to communities affected by natural disasters. Our disaster relief efforts include emergency supplies, shelter, and long-term rehabilitation programs.</small>
          </ul>

          <ul style={{color: '#3a6d71', marginTop: '10px', textAlign: 'center'}}>
              <strong>Meet Our Team </strong>      
          </ul>
          <ul style={{color: '#273232', marginTop: '20px', marginBottom: '20px'}}>
            <small>Our foundation is powered by a team of passionate individuals who bring diverse expertise and experiences to the table. Together, we are united by a shared commitment to drive positive change and create a brighter future for those in need.

              Join us on this journey of hope and empowerment. Together, we can make a difference and create a world where every dream is within reach.</small>
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
