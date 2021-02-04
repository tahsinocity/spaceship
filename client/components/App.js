import React, { Component } from 'react';
import SpaceshipForm from './SpaceshipForm.js';
import spaceships from '../../dummyData.js';
import SpaceshipList from './SpaceshipList.js';
// TO-DO
// [ ] Determine a state for the App component(hint: use the dummy data file)
// [ ] Render the SpaceshipList & SpaceshipForm components
// [ ] Finish the handleSubmitNewSpaceship method

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spaceships: spaceships
    };
    this.handleSubmitNewSpaceship = this.handleSubmitNewSpaceship.bind(this);
  }

  handleSubmitNewSpaceship(ship) {
    ship.id = this.state.spaceships.length + 1;
    this.setState({
      spaceships: [...this.state.spaceships, ship]
    })
  }

  render() {
    return (
      <div>
        <SpaceshipForm addShip={this.handleSubmitNewSpaceship}/>
        <SpaceshipList ships={this.state.spaceships} />
      </div>
    );
  }
}