import React from 'react';
import BirdItem from './BirdItem';

export default function BirdList({ birds }) {
  return (
    <div className='bird-list'>
      {
        birds.map((bird) => 

          <BirdItem
            key={bird.name} 
            bird={bird}
          />
        )
      }
    </div>
  );
}

