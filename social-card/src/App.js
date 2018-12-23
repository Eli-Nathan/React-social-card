import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Social Card</h1>
        </header>

        <div className="card-wrap">

        </div>
      </div>
    );
  }
}

export default App;
