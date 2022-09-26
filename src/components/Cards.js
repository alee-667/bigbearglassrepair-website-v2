import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./bigbearglassrepair-website-v2/images/img-9.jpg'
              text='Service 1'
              label='Services link'
              path='/bigbearglassrepair-website-v2/services'
            />
            <CardItem
              src='./bigbearglassrepair-website-v2/images/img-2.jpg'
              text='Service 2'
              label='Services link'
              path='/bigbearglassrepair-website-v2/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./bigbearglassrepair-website-v2/images/img-8.jpg'
              text='Schedule Appointment'
              label='Sign up'
              path='/bigbearglassrepair-website-v2/sign-up'
            />
            <CardItem
              src='./bigbearglassrepair-website-v2/images/img-4.jpg'
              text='Product 1'
              label='Product'
              path='/bigbearglassrepair-website-v2/products'
            />
            <CardItem
              src='./bigbearglassrepair-website-v2/images/img-4.jpg'
              text='Product 2'
              label='Product'
              path='/bigbearglassrepair-website-v2/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
