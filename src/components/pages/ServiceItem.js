import React from 'react';

function ServiceItem(props) {
  return (
    <>
      <li className='services__item'>
        <div className='services__item__link'>
            <img
              className='services__item__img'
              alt='cardimage'
              src={props.src}
            />
          <div className='services__item__info'>
          </div>
        </div>
      </li>
    </>
  );
}

export default ServiceItem;
