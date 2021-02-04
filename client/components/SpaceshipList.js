import React from 'react';
import Spaceship from './Spaceship';

// TO-DO
// [ ] implement a map method for rendering the spaceship list

// Destructuring props, because we can
const SpaceshipList = ({ ships }) => {
  console.log(ships);
  return (
    <div>
      <h2>
        Our Ships!
      </h2>
      <ul>
        {ships.map((ships) => (<Spaceship ships={ships} key={ships.id}/>))}
      </ul>
    </div>
  )
};

export default SpaceshipList;
