import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './LeftSidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MEAL DELIVERY</h1>
        <div className="find-container">FIND YOUR PLACE</div>
        <div className="find-container">FIND YOUR MEAL</div>
        <LeftSidebar />
        <div className="img-container"><img src="" className="image" alt="img" /></div>
        <RightSidebar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
