import React from 'react';

function CardItem1(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap1' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='cardsimage'
              src={props.src}
            />
          </figure>
        </div>
      </li>
    </>
  );
}

export default CardItem1;