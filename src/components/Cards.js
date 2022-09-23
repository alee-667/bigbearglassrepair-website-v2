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
              src='images/img-9.jpg'
              text='Service 1'
              label='Services link'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Service 2'
              label='Services link'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-8.jpg'
              text='Schedule Appointment'
              label='Sign up'
              path='/sign-up'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Product 1'
              label='Product'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Product 2'
              label='Product'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
