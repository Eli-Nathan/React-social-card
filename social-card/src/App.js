import React, { Component } from 'react';
import './App.css'

const randImage = "https://source.unsplash.com/random/800x600";

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
          <img
            src={randImage}
            alt="Image"
          />
        </div>
      </div>
    );
  }
}

export default App;
