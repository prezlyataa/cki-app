import React, { Component } from 'react';
import { data } from './config/data';

class App extends Component {
  render() {
    console.log(data);
    return (
      <div className="App">
        <h3>React APP</h3>
        <h2>{data.eventDate.city}</h2>
      </div>
    );
  }
}

export default App;
