import React, { Component } from "react";
import './App.css';
import Game from "./pages/Game"

class App extends Component {
  
  render() {
    return (
      <div id='layout'>
        <div className='sides'></div>
        <div className="sides left-border"></div>
        <Game />
        <div className="sides right-border"></div>
        <div className='sides'></div>  
      </div>
    );
  }
}

export default App;
