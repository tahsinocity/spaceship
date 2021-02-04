import React from 'react';

// TO-DO
// [ ] Finish implementing this component

// What a boring component. But that's okay! It serves as a template for each ship.
const Spaceship = ({ships}) => {
  return (
    <li>
      The {ships.name}, a beautiful {ships.color} ship from fleet: {ships.fleet}
    </li>
  )
};

export default Spaceship;
