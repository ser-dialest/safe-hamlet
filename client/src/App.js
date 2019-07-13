import React, { Component } from "react";
import './App.css';
import Game from "./components/Game/";

class App extends Component {
  constructor(props) {
    super(props);
  
    // rowLength determines the number of tiles that will be rendered. Either 19, 17, or 15
    // tileSize determines whether each tile will be 16, 32, or 48 pixels (for 1, 2, or 3, respectively)
    this.state = { rowLength: 19, tileSize: 3 };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  // multiplier for tile size 
  tileBase = 16;
  maximumTile = 3;
  minimumTile = 1;

  // number of tiles in row for playable game
  // To have a central camera position, it must always be odd
  maximumRow = 19;
  minimumRow = 15;

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    const width = window.innerWidth;
    const currentSize = this.state.rowLength * this.state.tileSize * this.tileBase
    if (width < currentSize) {
      // debugger;
      if (this.state.rowLength > this.minimumRow) { 
        this.setState({ rowLength: this.state.rowLength - 2 }, () => this.updateWindowDimensions());
      } else if (this.state.tileSize > this.minimumTile) {
        this.setState({ rowLength: this.maximumRow, tileSize: this.state.tileSize - 1 }, () => this.updateWindowDimensions());
      }
    } else if (width > currentSize) {
      if (this.state.rowLength < this.maximumRow && width >= (this.state.rowLength + 2) * this.state.tileSize * this.tileBase) {
        this.setState({ rowLength: this.state.rowLength +2 }, () => this.updateWindowDimensions());
      } else if (this.state.tileSize < this.maximumTile && width >= this.minimumRow * (this.state.tileSize + 1) * this.tileBase) {
        this.setState({ rowLength: this.minimumRow, tileSize: this.state.tileSize + 1 }, () => this.updateWindowDimensions());
      }
    }
  }

  render() {
    return (
      <div 
        id='layout'
        style={{gridTemplateColumns: `1fr 48px ${this.state.rowLength * this.state.tileSize * this.tileBase - (48 * 2)}px 48px 1fr`}}
      >
        <div className='sides'></div>
        <div className="sides left-border"></div>
        <Game
          rowLength={this.state.rowLength}
          tileSize={this.state.tileSize}
        ></Game>
        <div className="sides right-border"></div>
        <div className='sides'></div>  
      </div>
    );
  }
}

export default App;
